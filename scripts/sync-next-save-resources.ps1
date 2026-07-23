[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

$workspace = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$cacheRoot = Join-Path $workspace '.source-cache\next-save'
$resourceRoot = Join-Path $workspace 'assignments\day-02\resources'
$upstreamRoot = Join-Path $resourceRoot 'upstream'

function Sync-Repository {
    param(
        [Parameter(Mandatory = $true)][string]$Name,
        [Parameter(Mandatory = $true)][string]$Url,
        [Parameter(Mandatory = $true)][string]$Branch
    )

    $destination = Join-Path $cacheRoot $Name
    if (Test-Path (Join-Path $destination '.git')) {
        git -C $destination fetch --depth 1 origin $Branch | Out-Null
        git -C $destination checkout --detach FETCH_HEAD | Out-Null
    }
    else {
        New-Item -ItemType Directory -Force -Path $cacheRoot | Out-Null
        git clone --depth 1 --branch $Branch $Url $destination | Out-Null
    }

    $commit = (git -C $destination rev-parse HEAD).Trim()
    if ($LASTEXITCODE -ne 0 -or -not $commit) {
        throw "Could not resolve $Name/$Branch HEAD."
    }

    return [pscustomobject]@{
        Name = $Name
        Url = $Url
        Branch = $Branch
        Path = $destination
        Commit = $commit
    }
}

function Copy-SourceFile {
    param(
        [Parameter(Mandatory = $true)]$Repository,
        [Parameter(Mandatory = $true)][string]$SourcePath,
        [Parameter(Mandatory = $true)][string]$LocalPath,
        [Parameter(Mandatory = $true)][string]$Usage
    )

    $source = Join-Path $Repository.Path $SourcePath
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) {
        throw "Missing upstream resource: $($Repository.Name):$SourcePath"
    }

    $destination = Join-Path $resourceRoot $LocalPath
    New-Item -ItemType Directory -Force -Path (Split-Path $destination -Parent) | Out-Null
    Copy-Item -LiteralPath $source -Destination $destination -Force

    $blob = (git -C $Repository.Path rev-parse "$($Repository.Commit):$SourcePath").Trim()
    $sha256 = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash.ToLowerInvariant()

    return [ordered]@{
        repository = $Repository.Url
        branch = $Repository.Branch
        commit = $Repository.Commit
        sourcePath = $SourcePath.Replace('\', '/')
        localPath = "assignments/day-02/resources/$($LocalPath.Replace('\', '/'))"
        gitBlob = $blob
        sha256 = $sha256
        usage = $Usage
    }
}

$idea = Sync-Repository -Name 'idea' -Url 'https://github.com/rlaqudwn1/idea.git' -Branch 'master'
$design = Sync-Repository -Name 'design' -Url 'https://github.com/rlaqudwn1/design.git' -Branch 'main'

$ideaFiles = @(
    'ideas/next-save.md',
    'handoff/next-save.md',
    'ideas/next-save-domains.md',
    'sessions/2026-07-20-archetype-soft-core-pivot.md',
    'research/signal-sufficiency-sheet.md',
    'research/genre-core-mapping.md',
    'research/archetype-naming-research.md',
    'research/gpt-pro-archetype-consult.md'
)

$designBase = 'app/e/003-next-save-landing'
$designFiles = @(
    'page.tsx',
    'landing.css',
    'atlas.tsx',
    'atlas.pixel.css',
    'copy.ts',
    'fonts.ts',
    'steam.ts',
    'meta.json',
    'components/Nav.tsx',
    'components/DemoBar.tsx',
    'components/Hero.tsx',
    'components/ProfileStrip.tsx',
    'components/HowItWorks.tsx',
    'components/Community.tsx',
    'components/Footer.tsx',
    'components/Icons.tsx',
    'brief.md',
    'direction.md',
    'atlas-plan.md',
    'NEXT-SESSION.md',
    'copy.final.md',
    'voice-corpus.md',
    'design-needs.md',
    'HANDOFF.md',
    'atlas-explorations/README.md',
    'atlas-explorations/atlas-a1-howto.html',
    'atlas-explorations/atlas-howitworks.html',
    'atlas-explorations/atlas-map-vs-image.html',
    'atlas-explorations/atlas-structure.html',
    'atlas-explorations/atlas-symbol-vs-terrain.html',
    'atlas-explorations/continent-character.html',
    'capture/shoot-v09.mjs',
    'capture/v09-full.png',
    'capture/v09-hero.png',
    'capture/v09-mobile-hero.png'
)

$entries = New-Object System.Collections.Generic.List[object]

foreach ($path in $ideaFiles) {
    $local = "upstream/idea/$path"
    $entries.Add((Copy-SourceFile -Repository $idea -SourcePath $path -LocalPath $local -Usage 'product-source'))
}

foreach ($path in $designFiles) {
    $sourcePath = "$designBase/$path"
    $local = "upstream/design/$path"
    $usage = if ($path -like 'capture/*.png' -or $path -like 'atlas-explorations/*') {
        'design-evidence-only'
    }
    elseif ($path -like '*.md' -or $path -eq 'meta.json') {
        'design-source'
    }
    else {
        'runtime-reference-only'
    }
    $entries.Add((Copy-SourceFile -Repository $design -SourcePath $sourcePath -LocalPath $local -Usage $usage))
}

$manifest = [ordered]@{
    schemaVersion = 1
    repositories = @(
        [ordered]@{ name = 'idea'; url = $idea.Url; branch = $idea.Branch; commit = $idea.Commit },
        [ordered]@{ name = 'design'; url = $design.Url; branch = $design.Branch; commit = $design.Commit }
    )
    exclusions = @(
        'design candidates/*.png (third-party research captures)',
        'superseded pre-v0.9 captures',
        'idea archive and legacy 2x2/island prototypes',
        'secrets, environment files, cookies, and real user data'
    )
    files = $entries
}

$manifestPath = Join-Path $resourceRoot 'SOURCE-MANIFEST.json'
$manifest | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $manifestPath -Encoding utf8

Write-Output "idea=$($idea.Commit)"
Write-Output "design=$($design.Commit)"
Write-Output "files=$($entries.Count)"
Write-Output "manifest=$manifestPath"

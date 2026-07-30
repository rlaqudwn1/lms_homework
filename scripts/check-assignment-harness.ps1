$ErrorActionPreference = 'Stop'

$days = '02','05','06','07','08','09','10','11','13','14','16','18'
$missing = @()

foreach ($day in $days) {
  $path = Join-Path $PSScriptRoot "..\\assignments\\day-$day"
  foreach ($file in 'PROGRESS.md', 'SUBMISSION.md') {
    if (-not (Test-Path (Join-Path $path $file))) {
      $missing += "day-$day/$file"
    }
  }

  $stepsPath = Join-Path $path 'steps'
  if (Test-Path $stepsPath) {
    $stepFolders = Get-ChildItem -Path $stepsPath -Directory -Filter 'step-*'
    foreach ($step in $stepFolders) {
      foreach ($file in 'SPEC.md', 'PROGRESS.md', 'EVIDENCE.md') {
        if (-not (Test-Path (Join-Path $step.FullName $file))) {
          $missing += "day-$day/steps/$($step.Name)/$file"
        }
      }
    }
  }
}

if ($missing.Count -gt 0) {
  Write-Error ("Assignment harness is incomplete: " + ($missing -join ', '))
}

Write-Output "Assignment harness OK: $($days.Count) day folders and all claimed step packets are complete."

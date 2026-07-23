import type { Metadata } from "next";
import "./landing.css";
import { sans, mono } from "./fonts";
import { TasteAtlas } from "./atlas";
import { atlasHeader } from "./copy";
import { DemoBar } from "./components/DemoBar";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ProfileStrip } from "./components/ProfileStrip";
import { HowItWorks } from "./components/HowItWorks";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

/* 003 · NEXT SAVE landing — v0.5 Taste Atlas pivot. Page spine is split into
   server components (components/*.tsx, no state/events); this file is only the
   composition root. Confirmed Korean copy lives in copy.ts (copy.final.md).
   The signature atlas map is <TasteAtlas/> (atlas.tsx, a client component).
   v0 = interactive DEMO MOCKUP: hardcoded example data, no backend/Steam/login;
   every surface carries a "예시/데모" marker. landing.css is imported here only. */

export const metadata: Metadata = {
  title: "NEXT SAVE — Your game backlog, finally making sense",
  description:
    "A taste atlas of your Steam library, and what to play next — with reasons. Interactive concept demo (example data).",
};

export default function Page() {
  return (
    <div className={`ns ${sans.variable} ${mono.variable}`}>
      <DemoBar />
      <Nav />
      <Hero />
      <ProfileStrip />
      <HowItWorks />

      {/* S5 아틀라스 섹션 헤더(page 소관) + S6 본체 <TasteAtlas/>(atlas.tsx 소관) */}
      <section className="ns-section" id="atlas">
        <div className="ns-shell">
          <p className="ns-eyebrow ns-eyebrow-row">{atlasHeader.eyebrow}</p>
          <h2 className="ns-display ns-section-head">{atlasHeader.head}</h2>
          <p className="ns-section-sub">{atlasHeader.sub}</p>
          <TasteAtlas />
        </div>
      </section>

      <Community />
      <Footer />
    </div>
  );
}

import { PrototypeWorkspace } from "@/components/prototype-workspace";
import localFont from "next/font/local";

const wantedSans = localFont({
  src: "../../node_modules/wanted-sans/fonts/webfonts/variable/complete/woff2/WantedSansVariable.woff2",
  display: "swap",
  variable: "--font-wanted",
});

export default function PrototypePage(){
  return <div className={wantedSans.variable}><PrototypeWorkspace/></div>;
}

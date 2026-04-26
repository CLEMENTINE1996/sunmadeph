import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Link from "next/link";


export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
    </>
  );
}

import PartnersLayout from "@/src/components/Partners/PartnersLayout";
import Link from "next/link";


export const metadata = {
  title: "Partners",
  description: `Learn about our partner organizations.`,
};

export default function About() {
  return (
    <>
      <PartnersLayout />
    </>
  );
}

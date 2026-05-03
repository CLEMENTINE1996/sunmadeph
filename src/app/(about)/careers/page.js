import CareersLayout from "@/src/components/Careers/CareersLayout";
import Link from "next/link";


export const metadata = {
  title: "Careers",
  description: `Explore opportunities at our company.`,
};

export default function About() {
  return (
    <>
      <CareersLayout />
    </>
  );
}

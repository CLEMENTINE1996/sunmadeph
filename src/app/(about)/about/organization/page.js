import OrganizationPage from "@/src/components/OrganizationChart/OrganizationChartLayout";
import Link from "next/link";


export const metadata = {
  title: "Organization Chart",
  description: `Here are some details about our organizational structure.`,
};

export default function About() {
  return (
    <>
      <OrganizationPage />
    </>
  );
}

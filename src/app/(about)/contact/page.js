import ContactForm from "@/src/components/Contact/ContactForm";
import Image from "next/image";
import siteMetadata from "@/src/utils/siteMetaData";
// Import a thematic image (e.g., rice field or your logo)
import ContactImage from "@/public/main-logo.png"; 

export const metadata = {
  title: "Contact SunMade",
  description: `Get in touch with SunMade for bulk orders or inquiries at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh]  flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      {/* Left Side: Visual & Info */}
      <div className="relative w-full sm:w-4/5 md:w-2/5 h-full  flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-[300px] aspect-square relative">
          <Image 
            src={ContactImage} 
            alt="SunMade Rice" 
            className="w-full h-full object-contain"
            priority
          />
        </div>
        
        <div className="mt-12 space-y-4 text-center md:text-left w-full">
            <h3 className="font-bold text-xl underline underline-offset-4">Our Office</h3>
            <p className="font-medium text-sm md:text-base opacity-80">
                #335 Corner 2nd & 5th Sts. Bucana Ecoland Phase 1 Davao City
            </p>
            <div className="pt-4">
                <h4 className="font-bold">Inquiries:</h4>
                <p className="text-accent dark:text-accentDark font-semibold">{siteMetadata.email}</p>
            </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 py-12">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
            Partner With Us
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-75">
            Interested in distribution or bulk orders? Drop us a message below.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
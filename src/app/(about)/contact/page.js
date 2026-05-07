import ContactForm from "@/src/components/Contact/ContactForm";
import siteMetadata from "@/src/utils/siteMetaData";
import contactData from "@/src/data/contact.json";

export const metadata = {
  title: "Contact SunMade",
  description: `Get in touch with SunMade for bulk orders or inquiries at ${contactData.general_inquiries_email}`,
};

export default function Contact() {
  return (
    <main className="w-full bg-[#FDFDFD] dark:bg-dark transition-colors duration-300">
      <div className="relative w-full">
        <ContactForm />
      </div>

      <section className="w-full py-16 px-6 border-t border-dark/5 dark:border-light/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-accent dark:text-accentDark mb-2">
              Main Office
            </h4>
            <p className="text-dark/70 dark:text-light/70 font-medium">
              {contactData.main_office}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-accent dark:text-accentDark mb-2">
              General Inquiries
            </h4>
            <p className="text-xl font-bold text-dark dark:text-light">
              {contactData.general_inquiries_email}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
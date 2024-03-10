import ContactParagraph from "../components/contact-page/contact-paragraph";
import ContactForm from "../components/global-components/contact-form";
import HeroSection from "../components/global-components/hero-section";
import MapPoland from "../components/global-components/map-poland";

export default function Kontakt() {
  return (
    <div>
      <HeroSection
        backgroundImage="/hero-contact.jpg"
        contactIcon="/contact-icon.svg"
      />
      <ContactParagraph img="/contact-poland.svg" />
      <MapPoland />
      <ContactForm />
    </div>
  );
}

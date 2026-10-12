import { site } from "../data/portfolio";

// Nigerian numbers starting with 0 need the 234 country code for WhatsApp links.
const whatsappDigits = (n: string) => {
  const d = n.replace(/\D/g, "");
  return d.startsWith("0") ? "234" + d.slice(1) : d;
};

export default function Contact() {
  const { phone, whatsapp, email } = site.contact;
  return (
    <section id="contact">
      <h2>Book a shoot</h2>
      <p style={{ maxWidth: "50ch", margin: "14px 0 0" }}>
        Tell me the date, the place and what you need. I'll reply with availability and a quote.
      </p>
      <div className="cta">
        {whatsapp && (
          <a className="btn main" href={`https://wa.me/${whatsappDigits(whatsapp)}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        )}
        {phone && (
          <a className="btn" href={`tel:${phone}`}>
            Call {phone}
          </a>
        )}
        {email && (
          <a className="btn" href={`mailto:${email}`}>
            Email me
          </a>
        )}
        <a className={"btn" + (whatsapp ? "" : " main")} href={site.instagram} target="_blank" rel="noopener noreferrer">
          Message on Instagram
        </a>
        <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

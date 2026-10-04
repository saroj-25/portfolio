import Image from "next/image";

const organizations = [
  { name: "Kritim Mind Technologies", logo: "kritim-mind", width: 32, height: 32, href: "#entrepreneurship", role: "Founder & CEO" },
  { name: "Aadim National College", logo: "aadim-college", width: 28, height: 28, href: "#teaching", role: "Teaching" },
  { name: "Texas International College", logo: "texas-college", width: 28, height: 28, href: "#teaching", role: "Teaching" },
  { name: "Pahadi Research LLC", logo: "pahadi-research", width: 200, height: 188, href: "#experience", role: "Software engineering" },
  { name: "Mirai Design and Print", logo: "mirai-design", width: 160, height: 148, href: "#experience", role: "Development team lead" },
];

export default function Organizations() {
  return (
    <section className="organizations container" aria-label="Organizations I work with">
      <p className="eyebrow">BUILDING, RESEARCHING &amp; TEACHING WITH</p>
      <div className="organization-strip">
        {organizations.map((organization, index) => (
          <a key={organization.logo} href={organization.href} className="organization-link" data-reveal data-reveal-delay={index * 60}>
            <span className="organization-logo"><Image src={`/image/organizations/${organization.logo}.png`} alt="" width={organization.width} height={organization.height} sizes="40px" /></span>
            <span><strong>{organization.name}</strong><small>{organization.role}</small></span>
          </a>
        ))}
      </div>
    </section>
  );
}

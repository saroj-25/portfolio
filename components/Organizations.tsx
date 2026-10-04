import Image from "next/image";

const organizations = {
  "kritim-mind": { name: "Kritim Mind Technologies Pvt. Ltd.", width: 32, height: 32 },
  "aadim-college": { name: "Aadim National College", width: 28, height: 28 },
  "texas-college": { name: "Texas International College", width: 28, height: 28 },
  "pahadi-research": { name: "Pahadi Research LLC", width: 200, height: 188 },
  "mirai-design": { name: "Mirai Design and Print LLC", width: 160, height: 148 },
};

export default function Organizations({ names }: { names: readonly (keyof typeof organizations)[] }) {
  return (
    <div className="experience-organizations">
      {names.map((key) => {
        const organization = organizations[key];
        return <div className="experience-organization" key={key}>
          <span className="experience-logo"><Image src={`/image/organizations/${key}.png`} alt="" width={organization.width} height={organization.height} sizes="36px" /></span>
          <span>{organization.name}</span>
        </div>;
      })}
    </div>
  );
}

import ComponentTittle from "../ComponentTittle/ComponentTittle";
import { Card } from "./Card/Card";

const OQueFazemos = () => {
  return (
    <ComponentTittle
      tittle={"O que fazemos"}
      subTittle={
        "Nossa missão é aumentar sua produtividade dos negócios e fortalecer sua marca. Nós desenvolvemos soluções que otimizarão sua visibilidade no mercado te deixando no topo nos motores de buscas, agilizando processos e fortalecendo sua marca."
      }
      id="que"
    >
      <div className="flex justify-center flex-wrap gap-6">
        <Card
          title="Criação de sites"
          text="Somos especializados em sites responsivos com alta performance e desempenho."
          iconAlt="icone"
          iconURL="/assets/icons/criacaodesites.svg"
        />
        <Card
          title="Criação de Apps"
          text="Criamos Apps modernos e que podem ser integrados com sistemas web."
          iconAlt="icone"
          iconURL="/assets/icons/criacaodeapps.svg"
        />
        <Card
          title="SEO"
          text="Aumente seu tráfego orgânico e conquiste mais clientes melhorando seu ranqueamento no google."
          iconAlt="icone"
          iconURL="/assets/icons/seo.svg"
        />
        <Card
          title="Host"
          text="Serviços de hospedagem de sites, cloud computing, servidores dedicados e VPS."
          iconAlt="icone"
          iconURL="/assets/icons/host.svg"
        />
        <Card
          title="Consultoria"
          text="Nós oferecemos consultoria gratuita para você e seu negócio, alinhando suas necessidades com resultados"
          iconAlt="icone"
          iconURL="/assets/icons/consultoria.svg"
        />
      </div>
    </ComponentTittle>
  );
};

export { OQueFazemos };

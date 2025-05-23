import Accordion from "../Accordion/Accordion";

interface FAQItem {
  title: string;
  content: string;
}

const faqList: FAQItem[] = [
  {
    title: "Quais são os serviços que vocês oferecem?",
    content:
      "Oferecemos desenvolvimento de sites personalizados, e-commerce, aplicações móveis e web, além de soluções como otimização de performance e integração de APIs.",
  },
  {
    title:
      "Quanto custa desenvolver um site, app, aplicações web ou e-commerce?",
    content:
      "O custo varia de acordo com a complexidade e as funcionalidades desejadas. Entre em contato para um orçamento personalizado com base nas suas necessidades específicas.",
  },
  {
    title:
      "Quanto tempo leva para desenvolver um site, apps, aplicações variadas? ",
    content:
      "O prazo depende do escopo do projeto. Sites simples podem ser entregues em 2 a 5 semanas, enquanto apps e e-commerces mais complexos podem levar de 1 a 6 meses.",
  },
  {
    title: "Vocês oferecem manutenção após o desenvolvimento?",
    content:
      "Sim, oferecemos planos de manutenção para garantir que seu site ou app esteja sempre atualizado e funcionando perfeitamente.",
  },
  {
    title: "É possível integrar sistemas de pagamento no meu site ou app?",
    content: "Sim, podemos integrar diversas plataformas de pagamento.",
  },
  {
    title: "Vocês desenvolvem sites responsivos?",
    content:
      "Todos os nossos sites são otimizados para funcionar em diferentes dispositivos, incluindo smartphones, tablets e desktops.",
  },
  {
    title: "Vocês oferecem suporte para otimização SEO?",
    content:
      "Sim, oferecemos serviços de SEO para garantir que seu site tenha uma boa performance em mecanismos de busca como o Google.",
  },
  {
    title: "Posso fazer alterações no meu site ou app depois de pronto?",
    content:
      "Sim, podemos incluir um painel administrativo para que você mesmo faça atualizações, ou podemos fazer alterações para você conforme a necessidade.",
  },
  {
    title: "Quais tecnologias vocês utilizam para o desenvolvimento?",
    content:
      "Utilizamos tecnologias modernas como React, React Native, Typscript, PHP, Node.js, WordPress, WooCommerce, entre outras, dependendo da necessidade do projeto.",
  },
  {
    title: "Posso acompanhar o desenvolvimento do meu projeto?",
    content:
      "Sim, mantemos uma comunicação constante e oferecemos atualizações regulares sobre o progresso do seu projeto.",
  },
  {
    title: "Vocês fazem e-commerce com a nuvemshop também?",
    content:
      "Sim, nós temos um amplo catálogo em soluções de software e também desenvolvemos e-commerce para a nuvemshop.",
  },
];

const Lista = () => {
  return (
    <div className="flex justify-center items-start flex-wrap gap-y-2 gap-x-5">
      {faqList.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Lista;

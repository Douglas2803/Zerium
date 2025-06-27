import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer/index";

const PoliticaDePrivacidadePage = () => {
  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="prose prose-invert mx-auto [&_ul]:w-fit text-grey_3">
          <h1>Política de Privacidade</h1>

          <p>
            <strong>Última atualização:</strong> 23 de junho de 2025
          </p>

          <p>
            A sua privacidade é importante para nós. É política da Zerium
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site{" "}
            <a href="https://www.zerium.com.br/">Zerium</a>, e outros sites que
            possuímos e operamos.
          </p>

          <h2>1. Coleta de Dados</h2>
          <p>
            Coletamos informações pessoais que você nos fornece diretamente
            através do nosso formulário de contato. As informações que coletamos
            incluem:
          </p>

          <div className="flex justify-center">
            <ul>
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Mensagens que você nos envia</li>
            </ul>
          </div>

          <h2>2. Uso de Dados</h2>
          <p>Utilizamos as informações que coletamos para os seguintes fins:</p>
          <ul>
            <li>
              <strong>Comunicação:</strong> Para responder às suas perguntas,
              fornecer orçamentos e informações sobre nossos serviços. Usamos o
              serviço do EmailJS para o envio desses e-mails.
            </li>
            <li>
              <strong>Atendimento ao Cliente:</strong> Para fornecer suporte
              através do WhatsApp, utilizamos o `react-floating-whatsapp`.
            </li>
            <li>
              <strong>Melhoria dos Serviços:</strong> Para entender como nossos
              usuários interagem com nosso site e melhorar a experiência do
              usuário.
            </li>
          </ul>

          <h2>3. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Nosso site utiliza cookies para melhorar a funcionalidade e a
            experiência do usuário. Cookies são pequenos arquivos de dados que
            são armazenados no seu dispositivo. Utilizamos cookies para:
          </p>

          <div className="flex justify-center">
            <ul>
              <li>Analisar o tráfego do site e o comportamento do usuário.</li>
              <li>Personalizar o conteúdo e os anúncios.</li>
            </ul>
          </div>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto
            nos seguintes casos:
          </p>

          <ul>
            <li>
              <strong>Provedores de Serviço:</strong> Podemos compartilhar suas
              informações com empresas que nos auxiliam na operação do nosso
              site e na prestação de nossos serviços, como o EmailJS para o
              envio de e-mails.
            </li>
            <li>
              <strong>Obrigações Legais:</strong> Se formos obrigados por lei a
              divulgar suas informações.
            </li>
          </ul>

          <h2>5. Segurança dos Dados</h2>
          <p>
            Empregamos medidas de segurança para proteger suas informações
            pessoais contra acesso não autorizado, alteração, divulgação ou
            destruição. No entanto, nenhum método de transmissão pela Internet
            ou de armazenamento eletrônico é 100% seguro.
          </p>

          <h2>6. Seus Direitos</h2>
          <p>
            Você tem o direito de solicitar acesso, correção ou exclusão de suas
            informações pessoais. Para exercer esses direitos, entre em contato
            conosco.
          </p>

          <h2>7. Alterações a esta Política de Privacidade</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Notificaremos sobre quaisquer alterações, publicando a nova Política
            de Privacidade nesta página.
          </p>

          <h2>8. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato conosco através do e-mail:{" "}
            <a href="mailto:contato@zerium.com.br">contato@zerium.com.br</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaDePrivacidadePage;

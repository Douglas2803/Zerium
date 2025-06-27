// src/app/termos-de-servico/page.tsx

import { Footer } from "@/app/components/Footer";
import Header from "@/app/components/Header";

const TermosDeServicoPage = () => {
  return (
    <>
      <Header />
      <main className="container py-12">
        <div className="prose prose-invert mx-auto [&_ul]:w-fit text-grey_3">
          <h1>Termos de Uso</h1>

          <p>
            <strong>Última atualização:</strong> 23 de junho de 2025
          </p>

          <p>
            Bem-vindo à Zerium! Ao acessar e usar nosso site, você concorda em
            cumprir e estar sujeito aos seguintes termos e condições de uso.
          </p>

          <h2>1. Serviços Oferecidos</h2>
          <p>
            A Zerium oferece uma variedade de serviços de desenvolvimento de
            software, incluindo, mas não se limitando a:
          </p>

          <div className="flex justify-center">
            <ul>
              <li>Criação de sites</li>
              <li>Criação de aplicativos</li>
              <li>Otimização para mecanismos de busca (SEO)</li>
              <li>Serviços de hospedagem</li>
              <li>Consultoria</li>
            </ul>
          </div>

          <h2>2. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, gráficos,
            logos, ícones, imagens e a compilação de todo o conteúdo no site, é
            de propriedade exclusiva da Zerium e protegido pelas leis de
            direitos autorais.
          </p>

          <h2>3. Uso do Site</h2>
          <p>
            Você concorda em usar o site apenas para fins legais e de maneira
            que não infrinja os direitos de, restrinja ou iniba o uso e gozo do
            site por qualquer terceiro.
          </p>

          <h2>4. Isenção de Garantias e Limitação de Responsabilidade</h2>
          <p>
            O site e seu conteúdo são fornecidos &quot;como estão&quot;. A
            Zerium não oferece garantias de qualquer tipo, expressas ou
            implícitas, sobre a operação do site ou as informações, conteúdos,
            materiais ou produtos incluídos neste site. Você concorda
            expressamente que o uso deste site é por sua conta e risco.
          </p>

          <h2>5. Links para Sites de Terceiros</h2>
          <p>
            Nosso site pode conter links para sites de terceiros que não são de
            propriedade ou controlados pela Zerium. Não temos controle e não
            assumimos responsabilidade pelo conteúdo, políticas de privacidade
            ou práticas de quaisquer sites de terceiros.
          </p>

          <h2>6. Alterações nos Termos de Uso</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entrarão em vigor imediatamente após sua
            publicação no site.
          </p>

          <h2>7. Lei Aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Brasil e você se submete irrevogavelmente à jurisdição
            exclusiva dos tribunais nesse estado ou localidade.
          </p>

          <h2>8. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
            contato conosco através do e-mail:{" "}
            <a href="mailto:contato@zerium.com.br">contato@zerium.com.br</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermosDeServicoPage;

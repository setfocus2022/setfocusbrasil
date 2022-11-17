import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Produtos | Sites prontos com dominio e marketing SEO integrado com o Google</title>
        <meta
          name="description"
          content="As melhores marcas. Produtos certificados e qualificados"
        />
        <meta
          name="keywords"
          content="marketing digital, site, contrução de site, página institucional"
        />
        <meta name="author" content=" Marketing Digital - SetFocus Brasil " />
      </Head>

      <div>
        <HeaderPage subtitle="" title="  Sites sob medida para seu negócio" />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/pizzaria.jpg"
            alt="Pizzaria e Lanchonetes - Delivery em Geral"
            width="350"
            height="279"
            left
          />
          <h3> Delivery em Geral </h3>
          <div className={styles.description}>
            <p>
            Site disk entrega para Pizzaria com botão que chama o Whatsapp direto para o pedido.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia por apenas R$ 500,00 já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://lacasapizzabar.vercel.app/">
                  <a target="_blank">
                  Site La Casa Pizza Bar
                  </a>
                </Link>
           
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Materiais Elétricos"
            width="350"
            height="279"
          />
          <h3>Materiais Elétricos</h3>
          <div className={styles.description}>
          <p>
            Site para Loja de Material Elétrico com foco no fortalecmento da marca e aumento da area de atuação de vendas.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia por apenas R$ 2.500,00 já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.eletrosantaclara.com.br">
                  <a target="_blank">
                  Eletro Santa Clara
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Materiais Elétricos"
            width="350"
            height="279"
          />
          <h3>Materiais Elétricos</h3>
          <div className={styles.description}>
          <p>
            Site para Loja de Material Elétrico com foco no fortalecmento da marca e aumento da area de atuação de vendas.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia por apenas R$ 2.500,00 já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.eletrosantaclara.com.br">
                  <a target="_blank">
                  Eletro Santa Clara
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


          <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Materiais Elétricos"
            width="350"
            height="279"
          />
          <h3>Materiais Elétricos</h3>
          <div className={styles.description}>
          <p>
            Site para Loja de Material Elétrico com foco no fortalecmento da marca e aumento da area de atuação de vendas.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia por apenas R$ 2.500,00 já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.eletrosantaclara.com.br">
                  <a target="_blank">
                  Eletro Santa Clara
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


         <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Materiais Elétricos"
            width="350"
            height="279"
          />
          <h3>Materiais Elétricos</h3>
          <div className={styles.description}>
          <p>
            Site para Loja de Material Elétrico com foco no fortalecmento da marca e aumento da area de atuação de vendas.
        
          <p>Desenvolvido em ReactJs de alto desempenho, rapidez e SEO otimizado para o Google, além de estar integrado com o Google Analytcs e Ads para um melhor acompanhamento do desempenho. </p>
           <p>Valor já inclui o registro do domínio por 01 ano. Brinde hospedagem grátis por 01 ano. 
           Não perca tempo e tenha uma site de alta tecnologia por apenas R$ 2.500,00 já com o seu dominio .com.br e alavanque suas Vendas.</p>
           <p>Veja modelo  :</p>   
           <Link href="https://www.eletrosantaclara.com.br">
                  <a target="_blank">
                  Eletro Santa Clara
                  </a>
                </Link>
           
            </p>
           
          </div>
        </div>


  
        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/prod_11.png" alt="Toda linha de plugs e tomadas industriais." width="350" height="279" left />
          <h3>Plugs e tomadas industriais</h3>
          <div className={styles.description}>
            <p>
            Toda linha de plugs e tomadas industriais.
            </p>
          </div>
        </div>
      </main>


     
      <Footer />
    </>
  );
}

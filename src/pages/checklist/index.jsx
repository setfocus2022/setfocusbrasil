import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Clinica() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Checklist Quartos de Hotel | SetFocus Brasil</title>
        <meta
          name="description"
          content="Agência SetFocus - Checklist Eletrônico do quarto de hotel
          "
        />
        <meta
          name="keywords"
          content="Geramos demanda para seu time de vendas, marketing, marketing digital, marketing online, publicidade digital, campanha google, ads "
        />
        <meta name="author" content="SetFocus Brasil Forms & BI" />
      </Head>

      <HeaderPage subtitle="Checklist de Verificação e Conferência" title="Para Hotelaria em Geral." />

      <main className={`${styles.clinic} mainContainer`}>
        <div data-aos="fade-up">
          <MyImage
            src="/images/check_hotel.jpg"
            alt="Frente da Loja"
            width="430"
            height="508"
            left
          />
        </div>

        <div className={styles.clinicDescription} data-aos="fade-up">
          <p>
          Veja as Principais vantagens de se realizar checklist eletrônico 
          </p>
          
          <p>
          O que é? , Checklist e Formulários são uma forma de se avaliar qualquer tipo de coisa. seja pessoas,equipamentos, situações. 
Consiste em formular questões pertinentes ao assunnto ou objetivo abordado e apica-las em campo.
Em base no preenchimento do mesmo é possivel ter um cenário claro e preciso da parte analisada


          </p>
          <p>
          Como Funciona?

          É previamente criada as questões em cima do tema ou situação abordada. Exemplo: Nossa empresa é uma lanchonete com uma pegada jovem, gostariamos de saber a preferência dos consumidores em relação ao tipo de musica ambiente apresentada pela casa. Exemplo na Industria: Nossa empresa trabalha com manutenção e gostariamos de fazer analises e previsões sobre o funcionamento do parque de maquinas da Industria X.

A partir do questionário formulado os profissionais da área realização o preenchimento do checklist e transmitirão os dados para uma base de analise. Lembrando que com os recursos atuais os dados de checklist e formulários podem chegar de inumeras fontes, incluindo equipamento eletrônicos dotados de IA e analise contínua.

          </p>
          <p>
          Qual a Importãncia?


          A mais importante e primordial vantagem é deixar claro o cenário e trazer informações assertivas ao gestor para tomadas de decisões assertivas.

Os Checvklists eletrônicos fornecem uma ventagem gigante na questão de acerto na transmissão de dados em relação ao papel e caneta tradicional, evitando interpretações e re-trabalho.

          </p>

          <p>
          Vantagens?

          Uma empresa que aplica Checklist e Formulários em seus processos e atividades consegue mensurar dados e padrões que outras emopresas não observariam. Além de trazer mais eficiência e transparencia na execução de suas atividades.

Tudo agora e na hora. Rapides na transmissão, execução e apresentação dos resultados.

          </p>
        </div>
      </main>

      <section className={`${styles.photos} mainContainer`}>
        <Title subtitle="Algumas telas do nosso Aplicativo" title="Do celular para a tela do Gestor" />

        <div className={styles.photosSlider}>
          <ul>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/powerbi_hotel.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/checklist setfocus.jpeg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/check_hotel.jpeg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/checklist hotel.jpeg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
           

          </ul>

          {/* <div className={styles.btns}>
            <button className={styles.active}></button>
            <button></button>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}

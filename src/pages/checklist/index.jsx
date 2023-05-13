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
        <title>Checklist | SetFocus Brasil</title>
        <meta
          name="description"
          content="Agência SetFocus - Checklist Eletrônico 
          "
        />
        <meta
          name="keywords"
          content="Geramos demanda para seu time de vendas, marketing, marketing digital, marketing online, publicidade digital, campanha google, ads "
        />
        <meta name="author" content="SetFocus Brasil Forms & BI" />
      </Head>

      <HeaderPage subtitle="Checklist de Verificação e Conferência" title="" />

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
          O que é? , Checklist e Formulários são uma forma de se avaliar qualquer tipo de coisa. Sejam pessoas, equipamentos, situações. 
Consiste em formular questões pertinentes ao assunto ou objetivo abordado e acicalas em campo.
Em base no preenchimento deste é possível ter um cenário claro e preciso da parte analisada


          </p>
          <p>
          Como Funciona?

          É previamente criada as questões em cima do tema ou situação abordada. Exemplo: Nossa empresa é uma lanchonete com uma pegada jovem, gostaríamos de saber a preferência dos consumidores em relação ao tipo de música ambiente apresentada pela casa. Exemplo na Indústria: Nossa empresa trabalha com manutenção e gostaríamos de fazer analises e previsões sobre o funcionamento do parque de máquinas da Indústria X.

A partir do questionário formulado os profissionais da área realização o preenchimento do checklist e transmitirão os dados para uma base de análise. Lembrando que com os recursos atuais os dados de checklist e formulários podem chegar de inumar fontes, incluindo equipamentos eletrônicos dotados de IA e analise contínua.

          </p>
          <p>
          Qual a Importância?


          A mais importante e primordial vantagem é deixar claro o cenário e trazer informações assertivas ao gestor para tomadas de decisões assertivas.

Os Checklists eletrônicos fornecem uma ventagem gigante na questão de acerto na transmissão de dados em relação ao papel e caneta tradicional, evitando interpretações e re-trabalho.

          </p>

          <p>
          Vantagens?

          Uma empresa que aplica Checklist e Formulários em seus processos e atividades consegue mensurar dados e padrões que outras empresas não observariam. Além de trazer mais eficiência e transparência na execução de suas atividades.

Tudo agora e na hora. Rapidez na transmissão, execução e apresentação dos resultados.

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

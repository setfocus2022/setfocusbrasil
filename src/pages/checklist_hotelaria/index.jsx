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
        <title>Sobre a Empresa | Agência SetFocus</title>
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
          Veja as Principais vantagens de se realizar checklist eletrônico na inspeção da limpeza de quartos de hotel
          </p>
          
          <p>
          1 - Coleta de Dados, através de um link que pode ser acessado diretamente ou pelo Qrcode o Checklist é acionado, onde o usuário preenche as respostas apontando os principais itens de verificação, podendo caso haja alguma não conformidade tirar foto da mesma.
          </p>
          <p>
          2- Trasmissão e Armazenamento

Todo processo de preenchimento do checklist conta com um algoritimno de IA que analisa todo o processo a fim de melhorar as questões e evoluir o produto. O usuário pode optar por criar gatilhos de notificação que serao enviados ao e-mail do gestor automaticamente.

A cada checklist realizado é feito a sincronização dos dados.

O gestor rerceber em seu e-mail o checklist para ser avaliado e tambem fica disponivel em nuvem para quaisquer consulta posterior.

          </p>
          <p>
          3  - Dashboards no Power BI

Uma vez sincronizado os dados ficam disponíveis para modelagem de seus paineis de controle em Powerbi. Nesse pacote entregamos o Dashboard padrão de Checvklist de quartos de Hotel e tambem deixamos o acesso para que o gestor e sua equipe possam modelar outros templates de BI conforma a necessidade.
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

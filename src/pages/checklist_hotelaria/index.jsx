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
            src="/images/loja1.jpg"
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
          1
          </p>
          <p>
          2
          </p>
          <p>
          3
          </p>
        </div>
      </main>

      <section className={`${styles.photos} mainContainer`}>
        <Title subtitle="Algumas telas do nosso Aplicativo" title="Do celular para a tela do Gestor" />

        <div className={styles.photosSlider}>
          <ul>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja2.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja3.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja4.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja5.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja6.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja7.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja8.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja9.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja10.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja11.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja12.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja13.jpg"
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

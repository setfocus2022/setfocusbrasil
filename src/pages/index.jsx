/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Button } from "../components/Button";
import { MyImage } from "../components/MyImage";
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { depositions } from "../data/depositions.js";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [currentDepositions, setCurrentDepositions] = useState(depositions[0]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Impulsione seus negócios",
      value: "Orçamento",
    });
  }

  return (
    <>
      <Head>
        <title>Home | AVALIE - TCAD - Tecnologia de Coleta e Analise de Dados</title>
        <meta
          name="description"
          content="Agência SetFocus Brasil - TECAD Labs - Tecnologia de Coleta e Analise de Dados"
        />
        <meta
          name="keywords"
          content=" TCAD - Tecnologia de Coleta e Analise de Dados TCAD Labs - Central de Desenhvolvimento do Produto "
      
        />
        <meta name="author" content="SetFocus Brasil" />
        
      
               
      </Head>

      {/* <div className={styles.schedule}>
        <p>
          Aberto: Seg - Sex: 08:00 - 18:00 | Av. Principal, 999 - Lençóis
          Paulista -SP
        </p>
      </div> */}

      <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.leftContent}>
            <h1 className="title" data-aos="fade-up">
              <p></p>
              Realize <strong> seus projetos com nossa tecnologia TCAD
 </strong>
            </h1>

          
            <p data-aos="fade-up" data-aos-delay="200">
            TCAD - Tecnologia de Coleta e Analise de Dados TCAD Labs - Central de Desenhvolvimento do Produto  TCAD Docs - Gestão de Documentos, TCAD Analytics - Business Inteligence </p>
            <div
              className={styles.btnWrap}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                onClick={agendarConsulta}
                link="https://wa.me/5514997406893"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Impulsione seus negócios
              </Button>
              {/* <span>
                Ou nos ligue: <strong>(14) 3264-9999</strong>
              </span> */}
            </div>
          </section>

          <div
          
            className={styles.imgHero}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MyImage         
              src="/images/hero.png"
              alt="SetFocus Brasil"
              width="440"
              height="510"
            />
          </div>
        </div>
      </main>

      <section className={`${styles.about} mainContainer`}>
       
        {/*<div data-aos="fade-down">
          <Title color="blue" title="junior" subtitle="Conheça nossas Lojas" />
         <p><strong>Conheça nossas Lojas</strong></p>  
        </div> */}

        <div className={styles.aboutContent}>
         
        <div className={styles.imgAbout} data-aos="fade-up">
            <MyImage
              src="/images/fachada.jpg"
              alt="Fachada"
              width="540"
              height="500"
              left
            />
          </div>

          <div className={styles.aboutRightContent} data-aos="fade-up">
            <h3>
              <strong2>Transforme suas ideias em  </strong2> <strong>oportunidades.</strong>
            </h3>
            <p>
            Entenda o quanto sua empresa pode crescer<strong> com nossas ações de Publicidade Digital. </strong>
            </p>
            <Button link="" target="_self">
              Conheça nossas mágicas
            </Button>
          </div>




        </div>
      </section>

   <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.leftContent}>
            <h1 className="title" data-aos="fade-up">
              <p></p>
            Mapa <strong>de Check List! </strong>
            </h1>

          
            <p data-aos="fade-up" data-aos-delay="200">
            Acompanhe todo a dinâmica desde a coleta de dados até o BI             </p>
           
  
            <div
              className={styles.btnWrap}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                onClick={agendarConsulta}
                link="https://wa.me/5514997406893"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Impulsione seus negócios
              </Button>
              {/* <span>
                Ou nos ligue: <strong>(14) 3264-9999</strong>
              </span> */}
            </div>
          </section>

          <div
          
            className={styles.imgHero}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MyImage         
              src="/images/hero.png"
              alt="SetFocus Brasil"
              width="440"
              height="510"
            />
          </div>
        </div>
      </main>

      <section className={`${styles.about} mainContainer`}>
       
       {/*<div data-aos="fade-down">
         <Title color="blue" title="junior" subtitle="Conheça nossas Lojas" />
        <p><strong>Conheça nossas Lojas</strong></p>  
       </div> */}

       <div className={styles.aboutContent}>
        
       <div className={styles.imgAbout} data-aos="fade-up">
           <MyImage
             src="/images/NR12.png"
             alt="Fachada"
             width="540"
             height="500"
             left
           />
         </div>

         <div className={styles.aboutRightContent} data-aos="fade-up">
           <h3>
             <strong2>Ganhe tempo! </strong2> <strong>automatize seus Processos.</strong>
           </h3>
           <p>
           Geração do documento automático<strong> Checklist eletrônico NR12 atualizado, Inventário e Laudo. </strong>
           </p>
           <Button link="" target="_self">
           Saiba mais sobre a NR12 Automatizada
           </Button>
         </div>




       </div>
     </section>



     <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.leftContent}>
            <h1 className="title" data-aos="fade-up">
              <p></p>
            Faça <strong>Acontecer! </strong>
            </h1>

          
            <p data-aos="fade-up" data-aos-delay="200">
            Saiba como a SetFocus Brasil consegue potencializar seus resultados. Saiba o que nossa mágica é capaz de fazer por sua empresa.             </p>
           
  
            <div
              className={styles.btnWrap}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                onClick={agendarConsulta}
                link="https://wa.me/5514997406893"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Impulsione seus negócios
              </Button>
              {/* <span>
                Ou nos ligue: <strong>(14) 3264-9999</strong>
              </span> */}
            </div>
          </section>

          <div
          
            className={styles.imgHero}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MyImage         
              src="/images/hero.png"
              alt="SetFocus Brasil"
              width="440"
              height="510"
            />
          </div>
        </div>
      </main>

      {/*  <section className={styles.treatments}>
        <div data-aos="fade-down">
          <Title title="Tratamentos" subtitle="Principais serviços" />
        </div>

        <div className={`${styles.treatmentsWrap} mainContainer`}>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/clareamento.svg" alt="Clareamento Dental" />
            </div>
            <h3>Clareamento Dental</h3>
            <p>
              Um dos serviços mais procurados por ser considerado um tratamento
              pouco invasivo, muito seguro e com resultados incríveis para os
              dentes.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/profilaxia.svg"
                alt="Profilaxia"
                width={32}
                height={32}
              />
            </div>
            <h3>Profilaxia</h3>
            <p>
              É a famosa limpeza dental, que é feita com ultrassom para remoção
              do tartaro, curetas, jato de bicarbonato e escova de robson.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/facetasResinas.svg"
                alt="Facetas de Resina"
                width={32}
                height={27}
              />
            </div>
            <h3>Facetas de Resina</h3>
            <p>
              É uma película de resina esculpida dente a dente para harmonizar a
              cor, forma e posição dos dentes.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/botulinica.svg" alt="Botulinica" width={15} height={32} />
            </div>
            <h3>Toxina Botulinica</h3>
            <p>
              Paralisa a musculatura temporariamente suavizando linhas de
              expressão e prevenindo rugas.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/preenchimento.svg"
                alt="Preenchimento Labial"
                width={32}
                height={32}
              />
            </div>
            <h3>Preenchimento Labial</h3>
            <p>
              Um procedimento que visa dar volume, contorno e brilho, realçando
              a sensualidade dos lábios. Bastante procurado entre as mulheres.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img
                src="/icons/restauracao.svg"
                alt="Restauração"
                width={32}
                height={32}
              />
            </div>
            <h3>Restauração</h3>
            <p>
              Feita com resina composta com o intuito de paralisar o avanço da
              doença carie.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          {/* <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Bioestimulador de colágeno</h3>
            <p>
              Visa tratar a flacidez da pele rejuvenescendo o rosto dos
              pacientes através do estímulo natural do colágeno, melhorando a
              firmeza e a colocação da pele.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Microagulhamento</h3>
            <p>
              Selecionamos mesclas que penetram na pele com o intuito de
              entregar vitaminas, estimular o colágeno, suavizar rugas, tratar
              manchas e melhorar a qualidade da pele.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Fios de PDO</h3>
            <p>são inseridos na derme com o intuito de estimular o colágeno.</p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Peeling</h3>
            <p>
              Um ativo que ajuda a remover manchas, estimular colágeno, suavizar
              rugas, dar brilho e melhorar o aspecto da pele
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Laserterapia</h3>
            <p>
              Um laser que oferece uma terapia analgésica e antinflamatórias e
              também cicatrizante.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div>
          <div className={styles.treatmentItem} data-aos="zoom-in">
            <div className={styles.icon}>
              <img src="/icons/tratamentos2.svg" alt="Implantodontia" />
            </div>
            <h3>Preenchimento facial com ácido hialurônico</h3>
            <p>
              Intuito de dar volume onde é necessário melhorar o contorno
              deixando a face mais harmoniosa, jovem e atraente.
            </p>
            <Link href="/tratamentos">
              <a>Ler mais</a>
            </Link>
          </div> 
        </div>
        <div className={styles.treatmentsBtnWrap}>
          <Button link="/tratamentos" target="_self">
            Ver todos tratamentos
          </Button>
        </div>
      </section> 
      
 

      <section className={`${styles.doctor} mainContainer`}>
        <div className={styles.doctorContent} data-aos="fade-up">
          <Title
            title="Laís Coneglian Dutra"
            subtitle="Conheça nossa doutora"
          />
          <p className={styles.doctorText}>
            Laís é formada na Faculdade de Odontologia de Bauru - USP (2019) que
            é considerada a melhor faculdade de odontologia do mundo pelo
            ranking CWUR, além de outros rankings. É também especialista em
            Harmonização Facial pelo IEO Bauru. Está sempre se atualizando e
            aperfeiçoando suas técnicas para oferecer os melhores produtos e
            serviços para seus pacientes. É atenciosa e preparada para atender a
            todos, desde crianças até idosos.
          </p>
          <Link href="/doutora">
            <a>Ler mais</a>
          </Link>
        </div>

        <Image
          src="/images/sobreDoutora.png"
          alt="Dra Laís C. Dutra"
          width="527"
          height="539"
          objectFit="contain"
          data-aos="fade-down"
        />
      </section>
   */}

      <section className={styles.patients}>
        <Title
          title=" Depoimentos "
          subtitle=" Alguns pensamentos de nossos Clientes "
        />

        <ul className={`${styles.patientsList} mainContainer`}>
          {depositions.map((item) => (
            <li
              key={item.id}
              className={
                currentDepositions === item
                  ? `${styles.active} animeOpacity`
                  : ""
              }
            >
              <p>&ldquo;{item.description}&rdquo;</p>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className={styles.slideBtn}>
          {depositions.map((item, idx) => (
            <button
              key={item.id}
              className={currentDepositions === item ? styles.active : ""}
              onClick={() => setCurrentDepositions(item)}
              aria-label="mudar depoimento"
            ></button>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

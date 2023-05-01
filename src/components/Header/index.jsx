import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Conheça nossa mágica",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale conosco",
      value: "Fale Conosco",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_transparente.png"
                alt="SetFocus Brasil"
                width="120"
                height="102"
              />
            </a>
          </Link>

          <button
            className={
              showMenu
                ? `${styles.btnMenuMobile} ${styles.menuOpen}`
                : styles.btnMenuMobile
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
            <span className={styles.iconHamburguer}></span>
          </button>

          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/localizacao">
              <a>Forms & BI</a>
              </Link> 
              <Link href="/produtos">
              <a>Como chegar o Topo </a>
            </Link>

            <Link href="/checklist_hotelaria">
              <a>Checklist Hotel</a>
            </Link>

            <Link href="/checklist_hotelaria">
              <a>Checklist NR12</a>
            </Link>

            <Link href="/checklist_hotelaria">
              <a>Checklist Postos de Combustível</a>
            </Link>
         

          </nav>

         

          <div className={styles.btnAgendar}>
            <Button
              dark
              onClick={agendarConsulta}
              link="https://wa.me/5514997406893"
            >
               <img src="/icons/whatsIcon.svg" alt="whatsapp" />
              Impulsione seus negócios
            </Button>
          </div>
        </div>

        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/localizacao">
                <a>Forms & BI</a>
              </Link>
            </li>

            <li onClick={closeMenu}>
              <Link href="/produtos">
                <a>Produtos</a>
              </Link>
            </li>
 
           
            <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/5514997406893">
                <a target="_blank">Fale conosco</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

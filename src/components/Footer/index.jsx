import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/icons/footer.jpg"
                alt="Logo"
                width="250"
                height="180"
              />  
            </a>
          </Link>

          <div>
            <h3>SetFocus Brasil</h3>
            <ul>
              <li>(14) 99740-6893</li>
              <li>agenciasetfocus@gmail.com</li>
              <li></li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/setfocusbrasil/">
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://wwww.facebook.com/setfocusbrasil">
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3></h3>
            <p> </p>
            <p></p>
          </div>

          <div>
            <h3></h3>
            <p></p>
            <p></p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2022 © Agência SetFocus Brasil. Beta RectJs Project.
      </p>
    </>
  );
};

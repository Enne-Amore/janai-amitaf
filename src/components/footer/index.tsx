import Image from "next/image";
import estrelas from "../../assets/estrelas.png";
import styles from "./index.module.css";

export function Footer() {
  return (
    <footer>
      <figure>
        <Image src={estrelas} alt="Estrelas do espaço" width={0} height={0} sizes="100vw" className={styles.img} />
      </figure>
    </footer>
  );
}

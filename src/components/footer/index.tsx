import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <figure>
        <Image
          src={`/assets/estrelas.png`}
          alt="Estrelas do espaço"
          width={1580}
          height={0}
          className={`w-screen h-auto`}
        />
      </figure>
    </footer>
  );
}

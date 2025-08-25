import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <figure>
        <Image
          src={`/assets/rodape.png`}
          alt="Estrelas do espaço"
          width={1580}
          height={100}
          className={`w-screen h-auto`}
        />
      </figure>
    </footer>
  );
}

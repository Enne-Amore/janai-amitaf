import Image from "next/image";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`w-full flex justify-center my-12`}
    >
      <figure
        className={`m-0 opacity-50 animate-[load_0.8s_ease-in-out_alternate_infinite]`}
      >
        <Image
          src={`/favicon/logo.avif`}
          alt="Carregando ..."
          width={80}
          height={80}
        />
      </figure>
    </div>
  );
}

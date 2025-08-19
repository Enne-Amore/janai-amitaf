interface PageTitleInterface {
  label: string;
}

export default function PageTitle(props: PageTitleInterface) {
  return (
    <h2
      className={`bg-gradient-to-r from-[rgb(241,172,242)] to-[#FCFAFF00] text-2xl lg:text-3xl font-medium text-shadow-2xs px-7 lg:px-8 py-3 lg:py-4 rounded-full`}
    >
      {props.label}
    </h2>
  );
}

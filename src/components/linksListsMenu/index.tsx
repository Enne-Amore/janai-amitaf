export interface LinksListsMenuInterface {
  url: string;
  ariaLabel: string;
  label: string;
}

export default function LinksListsMenu(props: LinksListsMenuInterface) {
  return (
    <li className={`py-1 lg:py-2 lg:w-max`}>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.ariaLabel}
        className={`text-[#C522F2] text-lg lg:text-xl text-shadow-2xs px-2 lg:px-4 py-1 lg:py-2 rounded-4xl transition hover:bg-[#C522F2] focus-visible:bg-[#C522F2] hover:text-[#FCFAFF] focus-visible:text-[#FCFAFF] active:bg-[#6C0CF2]`}
      >
        {props.label}
      </a>
    </li>
  );
}

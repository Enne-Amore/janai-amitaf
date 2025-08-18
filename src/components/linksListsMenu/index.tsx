export interface LinksListsMenuInterface {
  url: string;
  ariaLabel: string;
  label: string;
}

export default function LinksListsMenu(props: LinksListsMenuInterface) {
  return (
    <li className={`py-2 w-max`}>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.ariaLabel}
        className={`text-[#C522F2] text-xl text-shadow-2xs px-4 py-2 rounded-4xl transition hover:bg-[#C522F2] hover:text-[#FCFAFF] active:bg-[#6C0CF2]`}
      >
        {props.label}
      </a>
    </li>
  );
}

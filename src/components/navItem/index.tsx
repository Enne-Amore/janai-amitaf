import Link from "next/link";

export interface NavItemInterface {
  url: string;
  label: string;
  ariaLabel: string;
  isActive?: boolean;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li className={`py-3 lg:py-5`}>
      <Link
        href={props.url}
        aria-label={props.ariaLabel}
        className={`${
          props.isActive
            ? "bg-[#F2B705] text-[#252228]"
            : "bg-transparent text-[#FCFAFF] hover:bg-[#C522F2]"
        } text-xl lg:text-2xl font-medium rounded-4xl px-4 lg:px-10 py-3 lg:py-5 transition`}
      >
        {props.label}
      </Link>
    </li>
  );
}

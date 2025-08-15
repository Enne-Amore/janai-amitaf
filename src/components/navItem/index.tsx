import Link from "next/link";

export interface NavItemInterface {
  url: string;
  label: string;
  ariaLabel: string;
  isActive?: boolean;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li className={`px-10 py-5`}>
      <Link
        href={props.url}
        aria-label={props.ariaLabel}
        className={`${props.isActive ? "bg-[#F2B705] text-[#252228]" : "bg-transparent text-[#FCFAFF] hover:bg-[#C522F2]"} text-2xl font-medium rounded-4xl px-10 py-5 transition`}
      >
        {props.label}
      </Link>
    </li>
  );
}

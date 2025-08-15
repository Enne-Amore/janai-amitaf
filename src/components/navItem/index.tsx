import Link from "next/link";

export interface NavItemInterface {
  url: string;
  label: string;
  ariaLabel: string;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <li className={`px-10 py-5`}>
      <Link
        href={props.url}
        aria-label={props.ariaLabel}
        className={`text-2xl text-[#FCFAFF] font-medium rounded-4xl px-10 py-5 hover:bg-[#C522F2]`}
      >
        {props.label}
      </Link>
    </li>
  );
}

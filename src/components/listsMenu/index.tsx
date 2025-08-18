import LinksListsMenu, { LinksListsMenuInterface } from "../linksListsMenu";

export interface ListsMenuInterface {
  title: string;
  links: LinksListsMenuInterface[];
}

export default function ListsMenu(props: ListsMenuInterface) {
  return (
    <article className={`px-6`}>
      <h3 className={`text-2xl text-shadow-2xs font-medium mb-2`}>
        {props.title}
      </h3>

      <ul>
        {props.links.map((link, index) => (
          <LinksListsMenu
            key={index}
            url={link.url}
            ariaLabel={link.ariaLabel}
            label={link.label}
          />
        ))}
      </ul>
    </article>
  );
}

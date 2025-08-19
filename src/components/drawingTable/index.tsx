import ItemDrawingTable from "../itemDrawingTable";

export interface DrawingTableInterface {
  title: string;
  items: string[];
}

export default function DrawingTable(props: DrawingTableInterface) {
  return (
    <article
      className={`overflow-hidden rounded-3xl lg:rounded-4xl border-2 border-[#6C0CF2] w-full h-max shadow`}
    >
      <table className={`border-separate border-spacing-0 text-center w-full`}>
        <thead>
          <tr>
            <th
              className={`bg-[#6C0CF2] text-[#FCFAFF] text-2xl lg:text-3xl text-shadow-2xs py-5 shadow`}
            >
              {props.title}
            </th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((item, index) => (
            <ItemDrawingTable key={index} sentence={item} />
          ))}
        </tbody>
      </table>
    </article>
  );
}

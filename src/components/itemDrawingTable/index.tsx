interface ItemDrawingTableInterface {
  sentence: string;
}

export default function ItemDrawingTable(props: ItemDrawingTableInterface) {
  return (
    <tr className={`odd:bg-[#FCFAFF] even:bg-[#F1ACF2]`}>
      <td className={`text-[#252228] text-2xl text-shadow-2xs py-3 px-4`}>
        {props.sentence}
      </td>
    </tr>
  );
}

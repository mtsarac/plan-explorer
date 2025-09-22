import type { Item } from "@/lib/data/data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { TableCell, TableRow } from "./ui/table";

type HoverCardProps = {
  item: Item;
};

export default function ReusableHover(props: HoverCardProps) {
  const { id, kcal, tags, title, type } = props.item;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <TableRow className="capitalize">
          <TableCell>{id}</TableCell>
          <TableCell>{type}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{kcal}</TableCell>
          <TableCell>{tags.join(", ")}</TableCell>
        </TableRow>
      </HoverCardTrigger>
      <HoverCardContent align="center" side="right">
        {type === "meal" ? (
          <div>
            Meal is {title}. <br /> It has {kcal} calories.
          </div>
        ) : (
          <div>
            Workout duration is <br /> {title} <br /> and burns {kcal} calories.
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

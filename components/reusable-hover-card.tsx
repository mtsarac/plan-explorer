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
          <TableCell className="text-center text-xs sm:text-sm p-1 sm:p-4">
            {id}
          </TableCell>
          <TableCell className="text-xs sm:text-sm p-1 sm:p-4">
            <span className="hidden sm:inline">{type}</span>
            <span className="sm:hidden">
              <span
                className={`w-2 h-2 rounded-full inline-block ${
                  type === "meal" ? "bg-green-500" : "bg-blue-500"
                }`}
              ></span>
            </span>
          </TableCell>
          <TableCell className="text-xs sm:text-sm p-1 sm:p-4 font-medium">
            {title}
          </TableCell>
          <TableCell className="text-center text-xs sm:text-sm p-1 sm:p-4 font-bold">
            {kcal}
          </TableCell>
          <TableCell className="text-xs sm:text-sm p-1 sm:p-4">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-1 py-0.5 sm:px-2 sm:py-2 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TableCell>
        </TableRow>
      </HoverCardTrigger>
      <HoverCardContent align="center" side="bottom" className="w-80">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">#{id}</span>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                type === "meal"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {type}
            </span>
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-2xl font-bold">
            {kcal}{" "}
            <span className="text-sm font-normal text-gray-500">kcal</span>
          </p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-600 mt-3">
            {type === "meal" ? (
              <p>
                This meal provides {kcal} calories and contains{" "}
                {tags.join(", ")} nutrients.
              </p>
            ) : (
              <p>
                This workout burns {kcal} calories and focuses on{" "}
                {tags.join(", ")} training.
              </p>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

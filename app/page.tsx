import CardTable from "@/components/card-table";
import ItemTable from "@/components/item-table";
import { items } from "@/lib/data/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <CardTable>
          <ItemTable rawData={items} />
        </CardTable>
      </div>
    </div>
  );
}

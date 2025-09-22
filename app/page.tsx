import ItemTable from "@/components/item-table";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-fit h-fit p-8 border-2 border-line border-gray-300">
        <ItemTable />
      </div>
    </div>
  );
}

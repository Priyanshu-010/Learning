import { Link } from "lucide-react";


export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}>
          New
        </Link>
      </div>
    </div>
  );
}

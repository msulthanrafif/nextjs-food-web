import Sidebars from "./components/sidebars/page";
import Orders from "./components/orders/page";
import Contents from "./components/contents/page";

export default function Home() {
  return (
    <main className="d-flex justify-content-between text-white">
      <div>
        <Sidebars />
      </div>
      <div className="w-100 p-3">
        <Contents />
      </div>
      <div className="w-50">
        <Orders />
      </div>
    </main>
  );
}

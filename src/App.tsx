import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import Navbar from "./components/modules/navbar/navbar";

export default function App() {
  const router = useRoutes(routes);
  return (
    <div className="md:flex gap-5">
      <div className="">
        <Navbar />
      </div>
      {router}
    </div>
  );
}

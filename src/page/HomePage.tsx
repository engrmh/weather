import { HomeCtxProvider } from "../components/templates/home/context";
import Home from "../components/templates/home/home";

export default function HomePage() {
  return (
    <HomeCtxProvider>
      <Home/>
    </HomeCtxProvider>
  )
}

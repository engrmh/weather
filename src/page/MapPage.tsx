import { HomeCtxProvider } from "../components/templates/home/context";
import Map from "../components/templates/map/map";

function MapPage() {
  return (
    <HomeCtxProvider>
      <Map />
    </HomeCtxProvider>
  );
}

export default MapPage;

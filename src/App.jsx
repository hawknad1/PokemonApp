import PokemondCardList from "./components/pokemon Card List/PokemondCardList";
import SideModal from "./components/side modal/SideModal";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="relative bg-[#F6F6F6] h-[1024px] md:w-full xl:w-[1441px]">
      <Topbar />

      <PokemondCardList />
      <SideModal />
    </div>
  );
}

export default App;

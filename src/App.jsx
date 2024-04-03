import FooterForMob from "./components/FooterForMob";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>
      <Home />
      {isSmallScreen && (
        <div className="block sm:hidden md:hidden fixed-bottom">
          <FooterForMob />
        </div>
      )}
    </>
  );
}

export default App;

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
      </div>
      <Home />
    </>
  );
}

export default App;

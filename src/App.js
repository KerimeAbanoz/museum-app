import "./App.css";
// import Navbar from "./components/Navbar";
// import Main from "./pages/Main";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#23242a" }}>
      <AppRouter/>
      {/* <Navbar /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;

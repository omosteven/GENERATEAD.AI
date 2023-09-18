import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="bg-custom-radial-gradient text-white min-h-screen">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

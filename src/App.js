import Layout from "./components/Layout/Layout";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-custom-radial-gradient text-white min-h-screen">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </Router>
  );
}

export default App;

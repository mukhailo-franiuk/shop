import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./components/pages/home/HomePage";
import { SingUpPage } from "./components/pages/sing-up/SingUpPage";
function App() {
  return (
    <div className="w-full">
        <Router future={{v7_startTransition : true , v7_relativeSplatPath : true}}>
            <Header />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="sing-up" element={<SingUpPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

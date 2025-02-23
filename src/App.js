import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList  from "./components/ProductList/ProductList";
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
            </Routes>
        </Router>
    )
}

export default App;

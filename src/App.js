import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import SharedLayout from "./pages/SharedLayout";
import Product from "./pages/Products";
import Home from "./pages/Home"
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import {useState} from "react"
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:productId" element={<SingleProduct />} />
            <Route path="login" element={<Login setUser={setUser}/>} />
            <Route path="dashboard" element={
                <ProtectedRoute user={user}>
                    <Dashboard/>
                </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

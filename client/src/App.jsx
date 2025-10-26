import { Routes,Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminSidebar from "./pages/admin-view/sidebar"
import AdminHeader from "./pages/admin-view/header"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminOrders from "./pages/admin-view/orders"
import AdminProducts from "./pages/admin-view/product"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/notFound"

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="/auth" element={<AuthLayout/>} >
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="sidebar" element={<AdminSidebar/>}/>
          <Route path="header" element={<AdminHeader/>}/>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>

        <Route path="/shop" element={<ShoppingLayout/>}>
        
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    {/* hello world */}
     

    </div>
  )
}

export default App

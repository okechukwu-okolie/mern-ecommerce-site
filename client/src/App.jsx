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
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingListing from "./pages/shopping-view/listing"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"

function App() {

  const isAuthenticated  = false
  const user = {
    name:'samuel okolie',
    role:'sam'
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        {/* //authentication routes */}
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                                        <AuthLayout/>
                                    </CheckAuth>} >
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>
        </Route>

    {/* admin routes */}
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                                        <AdminLayout/>
                                    </CheckAuth>}>
          <Route path="sidebar" element={<AdminSidebar/>}/>
          <Route path="header" element={<AdminHeader/>}/>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
        </Route>


    {/* shopping routes */}
        <Route path="/shopping" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                                        <ShoppingLayout/>
                                    </CheckAuth>
                                  }>
            <Route path="account" element={<ShoppingAccount/>}/>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
        </Route>


      {/* not found routes */}
        <Route path="*" element={<NotFound/>}/>

        {/* unauth page */}
        <Route path="/unauth-page" element={<UnauthPage/>}/>

      </Routes>
     

    </div>
  )
}

export default App

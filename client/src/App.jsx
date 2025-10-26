import { Routes,Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminSidebar from "./pages/admin-view/sidebar"
import AdminHeader from "./pages/admin-view/header"

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
        </Route>
      </Routes>
    {/* hello world */}
     

    </div>
  )
}

export default App

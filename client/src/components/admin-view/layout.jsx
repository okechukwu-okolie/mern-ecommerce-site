import AdminHeader from '@/pages/admin-view/header'
import AdminSidebar from '@/pages/admin-view/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* admin sidebar */}
        <AdminSidebar/>
        <div className="flex flex-1 flex-col">
            {/* admin header */}
            <AdminHeader/>
            <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>

        </div>
    </div>
  )
}

export default AdminLayout

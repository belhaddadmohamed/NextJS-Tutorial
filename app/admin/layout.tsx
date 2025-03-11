import React from 'react'
import {AdminSidebar} from './AdminSidebar'

interface AdminLayoutProps {
    children: React.ReactNode
}

const AdminLayout = ({children}: AdminLayoutProps) => {
  return (
    <div className="flex">
        <AdminSidebar className="w-1/4 h-full fixed text-white" />
        <div className="w-3/4">
            {children}
        </div>
    </div>
  )
}

export default AdminLayout
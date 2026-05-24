import { Outlet } from "react-router"
import Sidebar from "../modules/sidebar/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="flex h-screen w-screen bg-base text-text-main transition-colors duration-300 overflow-hidden">

            
            <Sidebar />

            
            <main className="flex-1 h-full overflow-y-auto p-8">
        <Outlet /> 
      </main>
        </div>
    )
}

export default DashboardLayout
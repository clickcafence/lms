import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/Sidebar";


const DashboardLayout = ({ children}: {children: React.ReactNode}) => {
  //console.log(getSafeProfile);
  
       return (
        <div className="h-full dark:bg-gray-900">
                 <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 dark:bg-gray-900">
        <Navbar />
      </div>
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 dark:bg-gray-900">
        <Sidebar />
      </div>
<main className="md:pl-56 pt-[80px] h-full">
{children}
</main>
    
</div>
       )
    }

    export default DashboardLayout;
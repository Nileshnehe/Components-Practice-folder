
import SidebarGroup from './SidebarGroup'
import SidebarItems from './SidebarItems'

import homeIcon from '../../assets/icons/home.svg'
import dashBoardIcon from '../../assets/icons/dashboard.svg'
import folderIcon from '../../assets/icons/folder.svg'
import documentIcon from '../../assets/icons/todo.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import downArrowIcon from '../../assets/icons/arrowdown.svg'
import profileIcon from '../../assets/icons/profile.svg'

const Sidebar = () => {
  
  

 
  return (
   
    <div className='m-2  bg-surface w-80 flex flex-col py-4 border-r border-border-line select-none transition-colors duration-300 overflow-hidden'>

      
      
     
      
      <div className='flex-1 overflow-y-auto pr-1 custom-scrollbar'>
        
        <SidebarItems title="Home" icon={homeIcon} />
        <SidebarItems title="Dashboard" icon={dashBoardIcon} />

        
        <SidebarGroup title="Create" icon={folderIcon} righticon={downArrowIcon}>
          <SidebarItems title="Folder" />
          <SidebarItems title="Document" />
          <SidebarItems title="Project" />
        </SidebarGroup>

       
        <SidebarGroup title="Todo-Lists" icon={documentIcon} righticon={downArrowIcon}>
          <SidebarItems title="Work" />
          <SidebarItems title="Private" />
          <SidebarItems title="Coding" />
          <SidebarItems title="School" />
          <SidebarItems title="Work" />
          <SidebarItems title="Private" />
          <SidebarItems title="Coding" />
          <SidebarItems title="School" />
        </SidebarGroup>

      </div>

      
      <div className=''>
        <SidebarItems title="Calendar" icon={calendarIcon} />
        <SidebarItems title="Profile" icon={profileIcon} />
      </div>

    </div>
  )
}

export default Sidebar
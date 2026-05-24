
import SidebarGroup from './SidebarGroup'
import SidebarItems from './SidebarItems'

import homeIcon from '../../assets/icons/home.svg'
import dashBoardIcon from '../../assets/icons/dashboard.svg'
import folderIcon from '../../assets/icons/folder.svg'
import documentIcon from '../../assets/icons/todo.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import downArrowIcon from '../../assets/icons/arrowdown.svg'
import profileIcon from '../../assets/icons/profile.svg'
import moonIcon from '../../assets/icons/dark.svg'
import sunIcon from '../../assets/icons/light.svg'
import { useEffect, useState } from 'react'

const Sidebar = () => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
useEffect(() => {
  if (theme === 'dark'){
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }else{
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

const toggleTheme = () => {
  console.log("btn clicked")
  setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
}



  return (

    <div className='m-2  bg-surface w-80 flex flex-col py-4 border-r border-border-line select-none transition-colors duration-300 overflow-hidden'>


      <div className='px-6 mb-6 flex items-center justify-between h-12 flex-shrink-0 rounded-2xl bg-surface-hover m-2'>
        <h1 className=' font-bold text-xl tracking-wider text-text-main'>SideBar</h1>
        <button
        onClick={toggleTheme}
        className='p-2 rounded-md bg-surface-hoverhover  hover:bg-border-line/100   text-text-main transition-all duration-200 flex items-center justify-center cursor-pointer'
        >
          {theme === 'dark' ? (
            <img src={sunIcon} alt="Light Mode" className='w-5 h-5 dark:invert object-contain'  />
          ): (
            <img src={moonIcon} alt="Dark Mode" className="w-5 h-5 object-contain" />
          )}
        </button>
      </div>




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
import React from 'react'

const SidebarGroup = ({ title, icon, righticon, children }) => {
  return (
    <div className='flex flex-col w-full my-1'>
      
      
      <div className='flex items-center justify-between h-12 px-4 mx-2 text-text-muted hover:bg-surface-hover hover:text-text-main rounded-md cursor-pointer group transition-all duration-200'>
        
        
        <div className='flex items-center gap-4'>
          {icon && (
            <img 
              src={icon} 
              alt={title} 
              className='w-5 h-5 opacity-80 group-hover:opacity-100 dark:invert dark:brightness-200 transition-all duration-200 object-contain'
            />
          )}
          
          <span className='text-[16px] font-medium tracking-wide'>{title}</span>
        </div>

        
        {righticon && (
          <img 
            src={righticon} 
            alt="arrow" 
            className='w-4 h-4 opacity-70 group-hover:opacity-100 invert brightness-200 transition-all duration-200 object-contain'
          />
        )}
      </div>    

      {/* Sub-items list wrapper */}
      <div className='flex flex-col gap-0.5 my-1'>
        {children}
      </div>
    </div>
  )
}

export default SidebarGroup
import React from 'react'

const SidebarItems = ({ title, icon }) => {
  return (
    <div className='flex items-center gap-4 h-12 px-4 mx-2 my-0.5 rounded-md text-text-muted hover:bg-surface-hover hover:text-text-main cursor-pointer transition-all duration-200 group'>
      
      
      {icon && (
        <img 
          src={icon} 
          alt={title} 
          className='w-5 h-5 opacity-80 group-hover:opacity-100 invert brightness-200 transition-all duration-200 object-contain'
        />
      )}

      
      <span className='text-[16px] font-medium tracking-wide hover:bg-surface-hover'>{title}</span>
    </div>
  )
}

export default SidebarItems
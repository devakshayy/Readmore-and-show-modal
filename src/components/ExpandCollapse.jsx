import React, { useState } from 'react'

const ExpandCollapse = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-800  w-1/2  p-4">
        <div class="border border-white bg-gray-800 p-4 rounded-lg">
            <button 
               onClick={() => setIsOpen(!isOpen)}
                className="border-2
                        rounded-lg
                        border-blue-500
                        bg-slate-500
                        font-bold
                        px-2
                        mb-4
                        " 
                    >{isOpen?'Expand':'Collapse'}</button>
          {isOpen?(
              <img 
              className='rounded-lg'
              src="https://images.squarespace-cdn.com/content/v1/52ba08abe4b0d9c93d4ed316/1394280131601-TH62KEERDU6CCY2AT1XM/kala-senja-menjelang.jpg" alt="image" 
              />      
          ):null}
        </div>
    </div>
  )
}

export default ExpandCollapse

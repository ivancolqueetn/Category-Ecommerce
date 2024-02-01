import React from 'react'
import data from './data'

function Buttons ({menuItems,filterItems, setItems}) {
  return (

    <>
    <div className="flex justify-center flex-wrap">
        {
            menuItems.map(val=>(
                <button key={val} className='px-10 py-2 m-4 bg-amber-400 rounded text-white font-bold' onClick={()=>filterItems(val)}>{val}
                </button>
            ))

        }
        <button  className='px-10 py-2 bg-amber-400 rounded text-white font-bold' onClick={()=>setItems(data)}>ALL
        </button>
    
    </div>
    </>
  )
}

export default Buttons
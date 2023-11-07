import React from 'react'

export default function Tile({color, title, text}) {
  return (
    <div style={{background: color}} className='p-[20px] flex flex-col justify-between text-white text-lg w-[230px] h-[160px]'>
       <p>{title}</p>
       <p>{text}</p> 
    </div>
  )
}

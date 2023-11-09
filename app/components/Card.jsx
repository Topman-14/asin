import React from 'react'

export default function Card({color, shape, number, title, text, children}) {
  return (
    <div className='p-[20px] bg-white rounded-lg w-[95%] max-w-[380px]'>
        {shape && <img src={`/images/${shape}.svg`} className="pb-[16px] h-[45px] w-[45px]" alt=''/>}
        {number && <div style={{background: color}} className='w-[60px] h-[60px] flex items-center justify-center rounded-full text-white text-xl'>
        <p>{number}</p></div>}
        {title && <h5 className='text-xl pb-[12px] pt-[24px]'>{title}</h5>}
        <div className='text-[#4E4E4E]'>
        {children}
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './css/cvPages.css'
import { Content } from './components/Content'
import { About } from './components/About'

export const CVpages = () => {

    const [info, setinfo] = useState(false)
    
    return (
        <>
            
            <div className='container' >
               <Content setinfo={setinfo}/>

               <div className={` ${info ? "animate__animated animate__bounceInUp":"hiden"}`}>
               <About  />
               </div>
            </div>
            
        </>
    )
}

import React, { useState } from 'react'
import '../css/content.css'

export const Content = ({setinfo}) => {

        const [hiden, sethiden] = useState(false)

        const actived = () => {
            sethiden(!hiden)
            if (!hiden) {
                
                setTimeout(() => {
                    setinfo(true)
                },2000)
            }else {
                setinfo(false)
            }

            
        }
   
    return (
        <div className={`content-home ${hiden && "min"}`}>

            <div id='home' className={` content-home-min `} >
                <h1>Jeyson Camilo Guzman Rico</h1>
                <h2>Frontend developer</h2>
                <h3>(REACT JS)</h3>
                
            </div>  

            <div className='boton' onClick={actived}>
                {
                   ( hiden)?
                    <p> Click <i className="fas fa-sort-amount-down-alt"></i> <i className="fas fa-mouse-pointer"></i></p>
                    :
                    <p> Click <i className="fas fa-sort-amount-up-alt"></i> <i className="fas fa-mouse-pointer"></i></p> 
                }
            </div>
           
        </div>
    )
}

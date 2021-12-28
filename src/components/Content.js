import React, { useState } from 'react'
import '../css/content.css'

export const Content = ({setinfo}) => {

        const [hiden, sethiden] = useState(false)

        const actived = () => {
            sethiden(!hiden)
            if (!hiden) {
                
                setTimeout(() => {
                    setinfo(true)
                },5)
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
            
            <svg preserveAspectRatio='none' className='waze' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fillOpacity="1" d="M0,288L24,272C48,256,96,224,144,186.7C192,149,240,107,288,101.3C336,96,384,128,432,138.7C480,149,528,139,576,133.3C624,128,672,128,720,144C768,160,816,192,864,181.3C912,171,960,117,1008,122.7C1056,128,1104,192,1152,202.7C1200,213,1248,171,1296,160C1344,149,1392,171,1416,181.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
            </svg>
        </div>
    )
}

import React from 'react'
import cv from '../documents/Jeyson_Camilo_Guzman_Rico.pdf'
import aboutSGV from '../img/aboutMe.svg'
import '../css/about.css'

export const About = () => {

    

    
    return (
        <>
        
        
        <div className='about' >

            <img src={aboutSGV} alt='about me images' className='aboutMe'/>

            
            <div className='ancho text'>
                <h3>About</h3>
                <p>I am frontend developer with knowleged in React JS,Git, Redux, I learned from 2019 to program and since 2019 to current I made different course of programming and I am autodidact </p>
                <a href={cv} download="JeysonGuzman" className='CV'>Dowload CV  <i class="fas fa-file-pdf"></i></a>
            </div>
            
        </div>
        
        <div className='skill_hobbies'>
            <div>
                <h3>Skill</h3>
                <hr/>
                <div className='content'>
                    <div>
                        <h4>Frontend</h4>
                        <ul>
                            <li>React JS - Redux</li>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Sass</li>
                            <li>Boostrap</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Backend</h4>
                         <ul>
                            <li>Node JS - express</li>
                            <li>Python - flask</li>
                            <li>Php</li>
                            <li>MySQL</li>
                            <li>Mongo DB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div >
                <h3>Hobbies</h3>
                <hr/>
                <div className='hobbies'>
                    <ul>
                        <li>Video game</li>
                        <li>Read</li>
                        <li>Listen to music</li>
                        <li> to travel</li>
                        <li>watch a movie</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='project'>
            <h3>Projects</h3>
            <hr/>
            <div className='conten-project'>
            <div>
                <h4>Calendar with React and Node JS</h4>
                <p>That application was created for solve a problem that is schedule appointment citas of a person, this way is more easy more organized than of way writing in a paper or notebook because a paper or notebook getting can lose</p>
                <div className='abajo'>

                    <a href='https://github.com/camiloguz23/calendarReact' className='enlaces'>Code <i className="fab fa-github"></i></a>
                    <a href='https://calendariobackend.herokuapp.com/' className='enlaces'>Pages </a>
                </div>
            </div>

            <div>
                <h4>Pig Games</h4>
                <p>This is a game created with Javascript where the rules are simple, it is played with some dice and whoever reaches the maximum score wins</p>
                <div className='abajo'>

                    <a href='https://github.com/camiloguz23/juego-de-pig-game' className='enlaces' >Code <i className="fab fa-github"></i></a>
                    <a href='https://camiloguz23.github.io/juego-de-pig-game/' className='enlaces'>Pages </a>
                </div>
            </div>

            </div>

        </div>
        <footer>
            <svg preserveAspectRatio='none' className='waze' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,0L12,32C24,64,48,128,72,138.7C96,149,120,107,144,101.3C168,96,192,128,216,149.3C240,171,264,181,288,165.3C312,149,336,107,360,74.7C384,43,408,21,432,26.7C456,32,480,64,504,112C528,160,552,224,576,224C600,224,624,160,648,122.7C672,85,696,75,720,85.3C744,96,768,128,792,144C816,160,840,160,864,138.7C888,117,912,75,936,85.3C960,96,984,160,1008,192C1032,224,1056,224,1080,202.7C1104,181,1128,139,1152,122.7C1176,107,1200,117,1224,138.7C1248,160,1272,192,1296,192C1320,192,1344,160,1368,160C1392,160,1416,192,1428,208L1440,224L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path>
            </svg>
            <div>
                <a href='https://github.com/camiloguz23'><i className="fab fa-github"></i></a> 
                <a href='https://github.com/camiloguz23'><i className="fab fa-linkedin"></i></a> 
            </div>
        </footer>
        </>
    )
}

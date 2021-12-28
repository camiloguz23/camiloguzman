import React from 'react'
import logoReact from '../img/Reactsmall.png'
import cv from '../documents/Jeyson_Camilo_Guzman_Rico.pdf'
import '../css/about.css'

export const About = () => {

    

    
    return (
        <>
        
        <div className='about' >
            
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
                <p>That application was created for solve a problem that is agendar citas of a person, this way is more easy more organized than of way writing in a paper or notebook because a paper or notebook getting can lose</p>
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

        <a href='https://github.com/camiloguz23'><i className="fab fa-github"></i></a> 
        <a href='https://github.com/camiloguz23'><i className="fab fa-linkedin"></i></a> 
        </footer>
        </>
    )
}

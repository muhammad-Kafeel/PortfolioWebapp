import React from "react";
import './styles.scss'
import ParticlesComponent from "../../components/particles";
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate'
const Home = () => {
    const navigate =useNavigate();
    const handleNavigateToContactMePage=()=>{
        navigate('/contact')
    }
    return (
        <section id="home" className="home">

            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Muhammad <br />
                    Front end developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:'translateY(190px)'
                }}
                end={{
                    transform:'translatex(0px)'
                }}>

            <div className="home__contact__me">
                <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
            </Animate>
            <div>
                {/* Other content */}
                <ParticlesComponent id="particles" shouldRender={true} />
            </div>
        </section>

    )
}
export default Home;
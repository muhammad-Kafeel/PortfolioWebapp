import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircle} from 'react-icons/bs'
import { skillsData } from "./Utils";
import { Animate , AnimateKeyframes } from "react-simple-animate";
import {Line} from 'rc-progress'
import './styles.scss'
const Skill =()=>{
    return (
        <div>
           <section id="skills" className="skills">
                <PageHeaderContent  
                headerText="My Skills"
                icon={<BsInfoCircle size={30} />}
                />
                <div className="skills__content-wrapper">
                   { skillsData.map((item,i)=>(
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform:'translateX(-200px)'
                            }}
                            end={{
                                transform:'translateX(-0px)'
                            }}
                            >
                                <h3 className="skills__content-wrapper__inner-content__Category-text">{item.label}</h3>
                                <div>
                                    {
                                        item.data.map((skillItem,j)=>(
                                            <AnimateKeyframes 
                                            play
                                            duration={1}
                                            keyframes={["opacity:1" , "opacity:0"]}
                                            iterationCount="1"
                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>{skillItem.skillsName}</p>
                                                    <Line 
                                                    percent={skillItem.percentage}
                                                    strokeWidth="2"
                                                    strokeColor="var(--yellow-theme-main-color)"
                                                    trailWidth="2"
                                                    strokeLinecap="square"
                                                    />

                                                </div>

                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
                </div>

            </section>
        </div>
    )
}
export default Skill;
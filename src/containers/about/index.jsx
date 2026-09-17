import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircle } from 'react-icons/bs'
// import { Value } from "sass";
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';


import './styles.scss';
const personalDetails = [
    {
        label: "Name",
        Value: "Muhammad Kafeel"
    },
    {
        label: "Age",
        Value: "23"
    },
    {
        label: "Adress",
        Value: "Pakistan"
    },
    {
        label: "Email",
        Value: "kafeelkafridi@gmail.com"
    },
    {
        label: "Contact",
        Value: "+923020777892"
    },
];
const jobSumary = "Currently pusruing Bachelor Of Science in Computer Science. I am eager to leverage my skills and knowledge to make a meaningful impact in the field. With a focus on Wev Development. I have gained proficiency in programming language such as Introduction to Front-End Development , Programming with JavaScript, Version Control, HTML and CSS in depth and React basic enrolled in Meta Front-End Development proffessional Ceftificate On Coursera offered by Meta containing 9 Courses. I have completed the development of a website for a Car engine oil and lubricant manufacturing Company,Portfolio website,Barbar website"
const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <PageHeaderContent
                    headerText="About Me"
                    icon={<BsInfoCircle size={30} />}
                />
                <div className="about__content">
                    <div className="about__content__personalWrapper">
                        <Animate
                            play
                            duration={1.5}
                            delay={1}
                            start={{
                                transform: 'translateX(-990px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}>
                            <h3 className="persnolinformationHeaderText">Front End Developer</h3>
                            <p>{jobSumary}</p>
                        </Animate>
                        <Animate
                            play
                            duration={1.5}
                            delay={1}
                            start={{
                                transform: 'translateX(1350px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}>
                            <h3>Personal Information</h3>
                            <ul>
                                {
                                    personalDetails.map((item, i) => (
                                        <li key={i}>
                                            <span className="title">{item.label}</span>
                                            <span className="value">{item.Value}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Animate>
                    </div>
                    <div className="about__content__servicesWrapper">
                        <Animate
                            play
                            duration={1.5}
                            delay={1}
                            start={{
                                transform: 'translateX(1350px)'
                            }}
                            end={{
                                transform: 'translatex(0px)'
                            }}>


                            <div className="about__content__servicesWrapper__innerContent">

                                <div><FaDev color="var(--yellow-theme-main-color)" size={50} /></div>
                                <div><DiAndroid color="var(--yellow-theme-main-color)" size={50} /></div>
                                <div><FaDatabase color="var(--yellow-theme-main-color)" size={50} /></div>
                                <div><DiApple color="var(--yellow-theme-main-color)" size={50} /></div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default About;
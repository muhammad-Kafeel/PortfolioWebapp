import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircle, BsTranslate } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import './styles.scss'
const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact">
                <PageHeaderContent
                    headerText="Contact Me"
                    icon={<BsInfoCircle size={30} />}
                />
                <div className="contact__content">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(-200px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3 className="contact__content__header-text">Let's Talk</h3>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(200px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <div className="contact__content__form">
                            <div className="contact__content__form__controlswrapper"> 
                            <div>
                                <input required type={"text"} name="name" className="inputName" />
                                <label htmlFor="name" className="nameLable">Name</label>
                            </div>
                            <div>
                            <input required type={"text"} name="Email" className="inputEmail" />
                                <label htmlFor="Email" className="EmailLable">Email</label>
                            </div>
                            <div>
                            <textarea rows={5} required type={"text"} name="desciption" className="inputdescription" />
                                <label htmlFor="desciption" className="descriptionLable">Desciption</label>
                            </div>



                            </div>
                            <button>Submit</button>
                        </div>

                    </Animate>
                </div>
            </section>
        </div>
    )
}
export default Contact;
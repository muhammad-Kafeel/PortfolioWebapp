import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircle } from 'react-icons/bs'
import one from '../../images/one.jpg'
import two from '../../images/two.webp'
import three from '../../images/three.jpeg'
import './styles.scss'
const portfolioDate = [
    {
        id: 2,
        name: "Barbar",
        link: '',
        image: one
    },
    {
        id: 3,
        name: "Lubrizoiluae",
        link: '',
        image: two
    },
    {
        id: 2,
        name: "Restorent",
        link: '',
        image: three
    },
]
const filterData = [
    {
        filterId: 1,
        lable: "All",

    },
    {
        filterId: 2,
        lable: "Development",

    },
    {
        filterId: 3,
        lable: "Design",

    },
]

const Portfolio = () => {
    const [filteredValue, setfilteredValue] = useState(1);
    const [hoveredValue,setHoveredValue]=useState(null)
    function handleFilter(currentId) {
        setfilteredValue(currentId)
    };
    function handleHover(index){
setHoveredValue(index)
    }
    console.log(filteredValue)
    const filteredItems = filteredValue === 1 ? portfolioDate : portfolioDate.filter(item => item.id === filteredValue)

    return (
        <div>

            <section id="portfolio" className="portfolio">
                <PageHeaderContent
                    headerText="My Portfolio"
                    icon={<BsInfoCircle size={30} />}
                />
                <div className="portfolio__content">
                    <ul className="portfolio__content__filter">
                        {
                            filterData.map(item => (
                                <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                    {
                                        item.lable
                                    }
                                </li>

                            ))
                        }
                    </ul>
                    <div className="portfolio__content__cards">
                        {
                            filteredItems.map((item, index) => (
                                <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}
                                >
                                    <div className="portfolio__content__cards__item__img-wrapper">
                                        <a>
                                            <img src={item.image} alt="dumy data" />
                                        </a>
                                    </div>
                                    <div className="overlay">
                                {
                                    index===hoveredValue &&(
                                        <div>
                                            <p>{item.name}</p>
                                            <button>Visit</button>
                                        </div>
                                    )
                                }
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </div>
    )
}
export default Portfolio;
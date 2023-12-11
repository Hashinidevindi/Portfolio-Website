import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';



const Intro = () => {
  return (
    <section id ="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Hashini</span><br/>website Designer</span>
            <p className="introPara">I am a skilled web Designer with experience in creating in creating <br/>visually appealing and use fiendly websites</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire me</button></Link>

        </div>
        <img src ={bg} alt="profile" className="bg" />

    </section>

  )
}

export default Intro;

import React from 'react';
import photo from '../assets/images/photo.png'
import SocialLinks from './SocialLinks';

function About() {
    return (
        <section className="about section-style" id="about">
            <div className="about-me content-head" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2 className="top-heading">About Me</h2>
                <p className="line black-line">who am I</p>
            </div>
            <div className="para-div">
                <div className="image-div" data-aos="zoom-out-right">
                    <img src={photo} id="my-photo" alt="Image" />
                    <SocialLinks />
                </div>
                <div className="para flex-item" data-aos="zoom-out-left">
                    <h3>I'm Mohamed, and I'm a Front-end Developer</h3>
                    <p className="para-ex">
                        I am a dedicated front-end developer currently enhancing my skills in HTML, CSS, and JavaScript through the Freshworks Software Academy.
                        I am passionate about translating design concepts into interactive digital experiences and continuously improving my expertise to stay
                        updated with the latest industry trends. My portfolio showcases a variety of projects that demonstrate my growing ability to deliver responsive
                        and dynamic web applications.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About

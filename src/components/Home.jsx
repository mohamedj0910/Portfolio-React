import intro from '../assets/images/intro.gif'



function Home() {
        return (
            <section id="home">
                <div className="home-name">
                    <h2 className="hello">
                        Hello 👋 I'm
                    </h2>
                    <h1 className="my-name">Mohamed J</h1>
                    <div className="typing">
                        <span className="i-am">I am <span className="animated-text">Frontend Developer</span></span>
                    </div>
                    <div className="buttons-home">
                        <a href="#contact" className="btn-home">
                            I need a website <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a href="https://in.linkedin.com/in/mohamedj0910" target="_blank" rel="noopener noreferrer" className="btn-home">
                            If you are looking to hire <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="avatar">
                    <img src={intro} alt="Avatar" />
                </div>
            </section>
        );
}
export default Home;
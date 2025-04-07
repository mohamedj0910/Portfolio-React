import SocialLinks from "./SocialLinks";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-head content-head" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2 className="top-heading">Contact me</h2>
                <p className="line white-line">get in touch</p>
            </div>
            <div className="para-div">
                <div className="contact-details flex-item" data-aos="zoom-out-right">
                    <h3>Reach Out to me!</h3>
                    <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
                    <div className="address-container">
                        <div className="address-icons">
                            <i className="fa-solid fa-user icon"></i>
                        </div>
                        <div className="address-content">
                            <span className="address-title">Name</span>
                            <span className="address-value">Mohamed J</span>
                        </div>
                    </div>
                    <div className="address-container">
                        <div className="address-icons">
                            <i className="fa-solid fa-location-dot icon"></i>
                        </div>
                        <div className="address-content">
                            <span className="address-title">Address</span>
                            <span className="address-value">Tamilnadu, India</span>
                        </div>
                    </div>
                    <div className="address-container">
                        <div className="address-icons">
                            <i className="fa-solid fa-envelope icon"></i>
                        </div>
                        <div className="address-content">
                            <span className="address-title">Email</span>
                            <span className="address-value">
                                <a
                                    href="mailto:mohamedj0910@gmail.com?subject=Discussion%20Regarding%20Your%20Work.&body=Hi%20Mohamed%2C%0A%0AI%20recently%20visited%20your%20portfolio%20website.%20I%20need%20to%20talk%20with%20you.%20Can%20you%20tell%20me%20when%20you%20are%20available%3F%0A%0AI%E2%80%99m%20looking%20forward%20to%20hearing%20from%20you.%20%0A">
                                    mohamedj0910@gmail.com
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Stay Connected</h2>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
                <div className="form-div flex-item" data-aos="zoom-out-left">
                    <form className="form" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="redirect" value="https://mommu09.github.io/Mohamed-portfolio-form/" />
                        <div className="form-label">
                            <p>Message me</p>
                        </div>
                        <input type="hidden" name="access_key" value="14445eed-f364-4964-a98f-bcdbf7e3cb30" />
                        <div className="name-email input-div">
                            <input type="text" name="Name" className="na-em" placeholder="Name" required />
                            <input type="email" name="Email" className="na-em" placeholder="Email" required />
                        </div>
                        <div className="subject input-div">
                            <input type="text" placeholder="Subject" required name="subject" />
                        </div>
                        <div className="description input-div">
                            <textarea rows="5" cols="60" placeholder="Describe a project" name="Body"></textarea>
                        </div>
                        <div className="button input-div">
                            <button type="submit" className="snd-btn">
                                Send Message <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
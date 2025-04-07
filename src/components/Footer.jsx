function Footer(){

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="footer">
            <span className="footer-text">
                Created By <a href="https://in.linkedin.com/in/mohamedj0910" className="linkedin" target="_blank" rel="noopener noreferrer">Mohamed</a> &copy; | {currentYear} All rights reserved
            </span>
        </footer>
    )
}

export default Footer
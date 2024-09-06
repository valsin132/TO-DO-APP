const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <p className="footer">
            &copy; {currentYear} Valdemaras Sinkevicius. All rights reserved.
        </p>
     );
}
 
export default Footer;
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/manish69/" target="_blank">
          Manish Kumar
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food <span> Corner </span>
        </strong>
      </div>
    );
  };
  
  export default Footer;
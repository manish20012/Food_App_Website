import food from "../image/food1.jpg"

const About =() =>{
     return(
      <div className="about-container-main">
      <div className="about-container">
      <div className="about-left">
        <h1>
          <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Corner</span> healthy
          meal"
        </h4>
      </div>
      <div className="about-right">
      <img src={food} alt="Food Image" />
      </div>
    </div>
  </div>
     );
}

export default About;
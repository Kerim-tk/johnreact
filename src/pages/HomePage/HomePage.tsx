import "./HomePage.scss";
import ellipse from "./Ellipse 1.png"
import ellipse2 from "./Ellipse 2.png"


export const HomePage = () => {
  return (
    <div className="hero-block">
      <div className="narrow-container">
        <h1 className="hero-h1">
          Hi, I&nbsp;am John,
          <br />
          Creative Technologist
        </h1>
        <p className="hero-p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do&nbsp;amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="hero-button">
          <p className="hero-button-p">Download Resume</p>
        </button>
      </div>
      <div className="container">
        <img
          className="hero-img-shadow"
          src={ellipse2} alt="shadow"
        />
        <img className="hero-img" src={ellipse} alt="avatar" />
      </div>
    </div>
  );
};

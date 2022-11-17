import "./HomePage.scss";


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
          src="./Ellipse 2.png"
          alt="shadow"
        />
        <img className="hero-img" src="./Ellipse 1.png" alt="avatar" />
      </div>
    </div>
  );
};

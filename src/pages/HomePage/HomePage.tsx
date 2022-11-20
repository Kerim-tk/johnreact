import "./HomePage.scss";
import ellipse from "./Ellipse 1.png"
import ellipse2 from "./Ellipse 2.png"


export const HomePage = () => {
  return (
    <>
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
    <div className="second-container">
    <div className="first-post">
      <div className="h2-a">
        <h2>Recent posts</h2>
      </div>
      <div className="p-first">
        <h1>Making a design system from scratch</h1>
        <div className="firs-p">
          <p className="post-paragraph">12 Feb 2020</p>
          <p className="post-paragraph2">Design, Pattern</p>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do&nbsp;amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
    <div className="second-post">
      <div className="h2-a desktop-only">
        <a className="a-post" href="#">View all</a>
      </div>
      <div className="p-first">
        <h1>Creating pixel perfect icons in Figma</h1>
        <div className="firs-p">
          <p className="post-paragraph">12 Feb 2020</p>
          <p className="post-paragraph2">Figma, Icon Design</p>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

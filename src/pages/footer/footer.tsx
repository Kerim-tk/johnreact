import './footer.scss';
import fb from "./fb.svg"
import insta from "./insta.svg"
import linkedin from "./Linkedin.svg"
import twitter from "./Twitter.svg"


export const Footer = () => {
    return (
        <div>
        <footer className="footer">
    <div className="footer_wrapper">
      <div>
        <a className="link_img_footer" href="#"><img src={fb} alt="facebook" /></a>
        <a className="link_img_footer" href="#"><img src={insta} alt="insta" /></a>
        <a className="link_img_footer" href="#"><img src={linkedin} alt="Linkedin" /></a>
        <a className="link_img_footer" href="#"><img src={twitter} alt="Twitter" /></a>
      </div>
      <div>
        <p>Copyright &copy;2020 All rights reserved</p>
      </div>
    </div>
  </footer>
      </div>
    );
}
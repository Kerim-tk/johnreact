import './Header.scss';
import '../../App2'


export const Header = () => {
    return (
        <div>
        <header className="header desktop-only">
          <a href="app2.tsx">Works</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </header>
      </div>
    );
}
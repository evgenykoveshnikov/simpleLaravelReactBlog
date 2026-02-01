import {Link} from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
      <header className={styles['header']}>
        <nav>
          <ul className={styles['nav__list']}>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/articles/create">Create Article</Link></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
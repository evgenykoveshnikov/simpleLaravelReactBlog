import styles from "./MainPage.module.css";
import ArticlesWrapper from "../../components/ArticlesWrapper/ArticlesWrapper.jsx";

function MainPage() {
  return (
      <div className={styles['main-container']}>
        <ArticlesWrapper />
      </div>
  );
}

export default MainPage;
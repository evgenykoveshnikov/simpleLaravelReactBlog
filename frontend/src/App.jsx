
import './App.css'
import { Route, Routes} from "react-router-dom";
import ArticlePage from "./Pages/ArticlePage/ArticlePage.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import Layout from "./Layout/Layout.jsx";
import ArticleForm from './Pages/ArticleForm//ArticleForm.jsx';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/articles' element={<MainPage />} />
          <Route path='/articles/:id' element={<ArticlePage />}/>
          <Route path='/articles/create' element={<ArticleForm />}/>
        </Route>
      </Routes>
  )
}

export default App;

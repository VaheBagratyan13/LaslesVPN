import Navbar from './components/Navbar';
import FirstPage from './components/homePage/FirstPage';
import NotebookPage from './components/homePage/notebookPage';
import PlanPage from './components/homePage/PlanPage';
import MapPage from './components/homePage/mapPage';
import CommentPage from './components/homePage/commentPage';
import SubscribePage from './components/homePage/subscribePage';
import FooterPage from './components/homePage/footerPage';
import './App.css';

function App() {
  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50">     
        <Navbar />
      </div>
      <div className="pt-16">
        <FirstPage />
        <NotebookPage />
        <PlanPage />
        <MapPage />
        <CommentPage />
        <SubscribePage />  
        <FooterPage />
      </div>
    </>
  );
}

export default App;

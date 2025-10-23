import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import NotebookPage from './components/notebookPage';
import PlanPage from './components/PlanPage';
import MapPage from './components/mapPage';
import CommentPage from './components/commentPage';
import SubscribePage from './components/subscribePage';
import FooterPage from './components/footerPage';
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

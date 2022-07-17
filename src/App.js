import './css/App.css';
import './css/Stable.css';
import Mform from './components/Mform';
import Mtable from './components/Mtable';
import ScrollToTop from "react-scroll-to-top";

function App() {
  
  return (
    <>
    <ScrollToTop/>
    <Mform/>
    <Mtable/>
    </>
  );
}

export default App;

import './App.css';
import Accordion from './components/Accordion/Accordion';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Activities></Activities>
      <Accordion></Accordion>
    </div>
  );
}

export default App;

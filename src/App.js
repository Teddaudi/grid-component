import './App.css';
import Join from './components/Join';
import Monthy from './components/Monthy';
import Why from './components/Why';

function App() {
  return (
    <div className="card">
      <Join/>
      <div className="lower-section">
        <Monthy/>
        <Why/>
      </div>
    
    </div>
    
  );
}

export default App;

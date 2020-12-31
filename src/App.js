import logo from './logo.svg';
import './App.css';
import Terminal from './Terminal';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-gray-700 to-gray-800">
      <div className="max-w-3xl mx-auto px-6 md:px-24 py-12">
        <h2 className="font-bold text-5xl sm:text-6xl md:text-7xl"> React <br/> Deployment on <br/> 
          <span className="flex"> Surge <img src={logo} className="logo h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt="logo" /> </span>  
        </h2>
        <Terminal />
      </div>
    </div>
  );
}

export default App;

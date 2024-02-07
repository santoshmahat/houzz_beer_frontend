import './App.css';
import Tabs from './components/Tabs';
import BeerContextProvider from './contexts/BeerContext';

function App() {
  return (
    <BeerContextProvider>
      <Tabs />
    </BeerContextProvider>
  );
}

export default App;

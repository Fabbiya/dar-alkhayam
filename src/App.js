import './App.css';
import SectionCapabilities from './components/SectionCapabilities/SectionCapabilities';
import SectionContact from './components/SectionContact/SectionContact';
import SectionDifference from './components/SectionDifference/SectionDifference';
import SectionMain from './components/SectionMain/SectionMain';
import SectionServices from './components/SectionServices/SectionServices';

function App() {
  return (
    <div  className="bg-light">
      
      
      <SectionMain/>
      <SectionCapabilities/>
      <SectionDifference/>
      <SectionServices/>
      <SectionContact/>
    </div>
  );
}

export default App;

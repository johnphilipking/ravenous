import mockData from './mockData.json';
import './App.css';
import BusinessList from './Business';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList dataSet={mockData} />
    </div>
  );
}

export default App;

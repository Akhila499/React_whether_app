import logo from './logo.svg';
import './App.css';
import useDataFromApi from './api/useDataFromApi';
import DataFromApiCall from './components/DataFromApiCall';

function App() {
  const { appState } = useDataFromApi();
  console.log('GetDataFromApi', appState)
  return (
    <>
      <DataFromApiCall appState={appState}/>
    </>
  );
}

export default App;

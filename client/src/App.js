import logo from './logo.svg';
import './App.css';
import useDataFromApi from './api/useDataFromApi';

function App() {
  const { appState } = useDataFromApi();
  console.log('GetDataFromApi', appState)
  return (
    <>
      hello
    </>
  );
}

export default App;

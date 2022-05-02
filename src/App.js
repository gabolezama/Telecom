import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header/Header';
import moment from 'moment';
import Welcome from './Containers/Welcome';
import InfoContainer from './Containers/ShowInfo/InfoContainer';
import { AppContextProvider } from './AppContext';

function App() {
  moment().format('dddd MMMM Do YYYY')
  return (
    <AppContextProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/Telecom/" element={<Welcome/>} />
          <Route path="/:lat/:long/:index" element={<InfoContainer/>} />
      </Routes>
    </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

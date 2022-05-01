import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header/Header';
import moment from 'moment';
import Welcome from './Containers/Welcome';
import InfoContainer from './Containers/ShowInfo/InfoContainer';

function App() {
  moment().format('dddd MMMM Do YYYY')
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/:lat/:long/:index" element={<InfoContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

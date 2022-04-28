import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundError from './Pages/NotFoundError/NotFoundError';
import Header from './Pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='*' element={<NotFoundError></NotFoundError>}></Route>
      </Routes>
    </div>
  );
}

export default App;

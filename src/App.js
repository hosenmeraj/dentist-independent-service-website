import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/BLog/Blog';
import Login from './Components/Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

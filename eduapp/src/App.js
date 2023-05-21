import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    {/* <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route/>
      <Route/>
    </Routes> */}
     <Header/>
     <Home/>
    </div>
  );
}

export default App;

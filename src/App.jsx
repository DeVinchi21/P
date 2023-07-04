import { Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard';
import Staff from './components/Staff';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
import Sales from './components/Sales'
import Stations from './components/Stations'
import ProfilePage from './components/Profile';


const App = () => {
  return (
    <><Header />
    <div className="container-fluid">

      <div className="row">

        <Sidebar />

        <Routes>
          <Route index element={<Dashboard />}></Route>
          <Route path='/staff' element={<Staff />}></Route>
          <Route path='/sales' element={<Sales />}></Route>
          <Route path='/stations' element={<Stations />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </div></>
  )
}


export default App;




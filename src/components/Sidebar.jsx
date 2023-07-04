import {Link} from 'react-router-dom'

const Sidebar = () => {
  return(
    <>
      <div className="col-lg-2 side--nav ">
        <div className="d-flex flex-lg-column flex-lg-row flex-sm-row align-content-center justify-content-center">
            <div className="p-2 nav-item p-2">
                <Link to='/' className="nav-link">🖥 <span className="nav-text">Dashboard</span></Link>
            </div>
            <div className="p-2 nav-item">
                <Link to='/staff' className="nav-link">👮‍♂️ <span className="nav-text">Staff</span></Link>
            </div>
            <div className="p-2 nav-item">
                <Link to='/sales' className="nav-link">📈 <span className="nav-text">Sales </span></Link>
            </div>
            <div className="p-2 nav-item">
              <Link to='/stations' className="nav-link">⛽  <span className="nav-text">Stations </span></Link>
            </div>
            <div className="p-2 nav-item">
              <Link to='/profile' className="nav-link">🧑 <span className="nav-text">Profile </span></Link>
            </div>
            <hr/>
            <div className="p-2 nav-item">
              <Link to='/profile' className="nav-link">🔑 <span className="nav-text">Sign Out </span></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar;
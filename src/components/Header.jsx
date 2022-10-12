const Header = () => {
  return (
    <nav className='navbar bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>SoloMira</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='offcanvas offcanvas-end' tabIndex={-1} id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>SoloMira</h5>
            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' />
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Populares</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Categoría
                </a>
                <ul className='dropdown-menu'>
                  <li><a className='dropdown-item' href='#'>Acción</a></li>
                  <li><a className='dropdown-item' href='#'>Romance</a></li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li><a className='dropdown-item' href='#'>Drama</a></li>
                </ul>
              </li>
            </ul>
            <form className='d-flex mt-3' role='search'>
              <input className='form-control me-2' type='search' placeholder='Buscar serie' aria-label='Search' />
              <button className='btn btn-outline-success' type='submit'>Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

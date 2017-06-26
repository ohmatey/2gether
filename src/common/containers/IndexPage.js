import React from 'react'

const IndexPage = props => {

  return (
    <div>
      <nav className='nav'>
        <div className="nav-left">
          <a className="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" height={30} alt="Bulma logo" />
          </a>
        </div>

        <div className="nav-center">
          <div className='nav-item'>
            <input type="search" />
          </div>
        </div>



        <div className="nav-right nav-menu">
          <button type='button'>Login</button>
          <button type='button'>Sign Up</button>
        </div>
      </nav>

      <section className='main-content'>
        <main>
          <video className='video-player' src='' />
        </main>
      </section>
    </div>
  )
}

export default IndexPage

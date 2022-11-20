import React from 'react'

function Home() {
  return (
    <section id='home '>
      <div className='container '>
        <div className='home-text'>
          <div className='section-text__subtitle'>Welcome to xyz DAO</div>
          <div className='section-text__title-big'>
            Take control of your content
          </div>
          <div className='section-text__body'>
            <h2>
              {' '}
              This application allows you to support the content you enjoy and
              earn money for it.
            </h2>
          </div>
          <a href='#download' className='download-btn '>
            Register as a Member
          </a>
        </div>

        {/* <div className="section-image"></div> */}
      </div>
    </section>
  )
}

export default Home

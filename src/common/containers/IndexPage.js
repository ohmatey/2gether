import React from 'react'

const IndexPage = props => {

  return (
    <div>
      <nav className='nav'>
        <div className="nav-left">
          <a className="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" height="30" alt="Bulma logo" />
          </a>
        </div>

        <div className="nav-center">
          <div className='nav-item'>
            <input type="search" />
          </div>
        </div>



        <div className="nav-right nav-menu">
          <button type='button'>Login</button>
          <button type='button'>Get Started</button>
        </div>
      </nav>

      <section className='main-content'>
        <main>
          <video className='video-player' src='https://r6---sn-ntq7yn76.googlevideo.com/videoplayback?expire=1495122172&id=o-AAZFcJYiYaY7yLZ9FDS45CK6QpoNj3UBRazuIyvx_lx7&source=youtube&pl=16&requiressl=yes&mime=video%2Fmp4&ip=110.23.28.244&ei=m2wdWca1OoiIWIexjvgN&sparams=dur,ei,expire,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,ratebypass,requiressl,source,upn&lmt=1473243325196639&dur=280.636&signature=427A2A86FF69F0685D6F2AA654D303D7B6925458.1EB714A522AAA6D8AD51E8C5518E3A06E2C3A815&itag=22&ratebypass=yes&ipbits=0&upn=AwhpMXaageM&key=cms1&redirect_counter=1&cm2rm=sn-v2u0n-ntql7r&req_id=6a143256b1c8a3ee&cms_redirect=yes&mm=30&mn=sn-ntq7yn76&ms=nxu&mt=1495100437&mv=m' />
        </main>
      </section>
    </div>
  )
}

export default IndexPage

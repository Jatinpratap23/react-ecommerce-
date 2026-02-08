
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../hero/hero.css';
import { Link } from 'react-router-dom';




export default function Hero() {

  

  return (
    <>




      {/* HERO SECTION */}
      <div id="hero" style={{ width: '100%', height: '40vh', overflow: 'hidden' }}>
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/hero-section/home-page.mp4" type="video/mp4" />
        </video>

        <div className="bg-text">
          <h4>Nike Book 2</h4>
          <h1>LICENSED FOR SKILL</h1>
          <p style={{ fontFamily: 'Handlee', color: '#F36B21' }}>
            Locked down and loaded for hoopers to handle any assignment with elite execution.
          </p>
          <button className="Shop-btn">Shop</button>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div id="products" className="section-p1">
        <h1 style={{ fontFamily: 'Handlee', fontSize: '50px', padding: '10px 12px' }}>
          Product
        </h1>

        <div className="prod-row">
<Link to="/producdetails/1">
 <div className="prod-box" >
            <img src="/images/luka.png/shoes1.jpg" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
</Link>
 <div className="prod-box" >
            <img src="/images/pacific-s.png/pacific1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/airjorden/jorden1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/m-shorts/m-shorts1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/w-tshirt/imgi_2_AS+W+NSW+OS+CREW+CNY.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/pacific-s.png/pacific1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/pacific-s.png/pacific1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 <div className="prod-box" >
            <img src="/images/pacific-s.png/pacific1.png" style={{ borderRadius: '20px',height:'300px' }} />
            <div className="des">
              <span style={{ fontFamily: 'Handlee', fontSize: '15px' }}>
                Luka 5 <br /> 'Lunar New Year' PF
              </span>
            </div>
          </div>
 
         

        </div>
      </div>


{/* products2 section  */}

<section id="products2" className="section-p1">
  <h1 style={{ fontFamily: 'Handlee', fontSize: '50px', padding: '10px 12px' }}>
    Shop by Sport
  </h1>

  <div className="prod-row2">

    <div className="prod-box2">
      <img
        src="/images/luka.png/shoes1.jpg"
        alt="Golf"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Golf</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/shopBySports/yoga.png"
        alt="Yoga"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Yoga</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/airjorden/jorden1.png"
        alt="Gym"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Gym</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/shopBySports/running.png"
        alt="Running"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Running</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/shopBySports/basketball.png"
        alt="Basketball"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Basketball</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/shopBySports/football.png"
        alt="Football"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Football</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/luka.png/shoes1.jpg"
        alt="Tennis"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Tennis</h4>
    </div>

    <div className="prod-box2">
      <img
        src="/images/shopBySports/skateboard.png"
        alt="Skateboarding"
        style={{ borderRadius: '20px', height: '300px' }}
      />
      <h4 >Skateboarding</h4>
    </div>

  </div>
</section>





{/* spotlight section */}
<section id="Spotlight">

  <div
    className="Big-head"
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 0
    }}
  >
    <h2 style={{ marginBottom: '5px' }}>Spotlight</h2>
    <p>
      Classic silhouettes and cutting-edge innovation to build your games from
      ground up.
    </p>
  </div>

  {/* FIRST ROW */}
  <div className="continer">
    <div className="mini-prod">
      <img src="/images/spotlight/air-jordan1.png" alt="Air Jordan 1" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/airforce1.png" alt="Air Force 1" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/graphic-tees.png" alt="Graphic Tees" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/pegasus41.png" alt="Pegasus 41" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/tights.png" alt="Tights" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/metcon.png" alt="Metcon" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/jackets.png" alt="Jackets" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/quest.png" alt="Quest" style={{ borderRadius: '20px' }} />
    </div>
  </div>

  {/* SECOND ROW */}
  <div className="continer2">
    <div className="mini-prod">
      <img src="/images/spotlight/dunk.png" alt="Dunk" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/bottoms.png" alt="Bottoms" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/p-6000.png" alt="P-6000" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/caps.png" alt="Caps" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/airmax.png" alt="Air Max" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/sportsbra.png" alt="Sports Bra" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/court-vision.png" alt="Court Vision" style={{ borderRadius: '20px' }} />
    </div>

    <div className="mini-prod">
      <img src="/images/spotlight/shorts.png" alt="Shorts" style={{ borderRadius: '20px' }} />
    </div>
  </div>

</section>


      


<div>
    <Footer />
</div>

    </>
  );
}


import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";

function ProductDetails() {
     const images = [
    "/images/luka.png/luka2.png",
    "/images/luka.png/luka3.png",
    "/images/luka.png/luka4.png",
    "/images/luka.png/luka5.png",
    "/images/luka.png/luka6.png",
  ];
  const [mainImg, setMainImg] = useState("/images/luka.png/luka1.png");
  return (
        <>
  {/* LUKA 5 DETAIL SECTION */}
  <section
          id="luka5-detail"
      style={{
        display: "flex",
        marginTop: "40px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", width: "90%" }}>

        <div className="packet">
          <div className="luka-img">

            {/* SMALL IMAGES */}
            <div className="small-img-lu">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="smallimg"
                  alt="thumbnail"
                  onClick={() => setMainImg(img)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>

            {/* MAIN IMAGE */}
            <img
              src={mainImg}
              className="big-img-lu"
              alt="Main product"
            />

          </div>
        </div>


      <div className="packet2">
        <div className="luka-detail">

          <div className="luka-text" style={{ marginBottom: '30px' }}>
            <h1 style={{ marginBottom: '6px' }}>
              Air Jordan Jordan Luka 5 'Year of The Horse'
            </h1>
            <li>₹17,199</li>
            <li>
              Get it for just INR 5,733 with HypeFly PayLater
            </li>
          </div>

          <div className="new-feature "style={{display:'flex' , marginBottom:'20px'}}>
            <img src="/images/airjorden/jorden1.png" alt="" />
            <img src="/images/pacific-s.png/imgi_10_NIKE+PACIFIC.jpg" alt="" />
            <img src="/images/m-shorts/m-sports2.png" alt="" />
          </div>

          <div className="luka-size">
            <h3>SELECT SIZE</h3>

            <div
              className="box-holder"
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <div className="size-chart" style={{ gap: '7px' }}>
                <button className="size-btn disabled">UK 5</button>
                <button className="size-btn">UK 6</button>
                <button className="size-btn">UK 7</button>
                <button className="size-btn">UK 8</button>
              </div>

              <div className="size-chart" style={{ gap: '7px' }}>
                <button className="size-btn">UK 9</button>
                <button className="size-btn disabled">UK 10</button>
                <button className="size-btn">UK 11</button>
                <button className="size-btn">UK 12</button>
              </div>
            </div>
          </div>

          <div
            className="Add-Buy"
            style={{ marginTop: '40px', justifyContent: 'center' }}
          >
            <Link to="/carts" style={{ color: 'black', textDecoration: 'none' , }}>
              <button className="Add-to-cart">Add to Cart</button>
            </Link>
        <span>
              <button className="Buy-now" style={{ marginTop: '5px',  }}>
              Buy Now
            </button>
          </span>
          </div>

          <div className="about-luka" style={{ marginTop: '40px' }}>
            <h1 style={{ fontSize: '40px', marginBottom: '5px' }}>About</h1>
            <p
              style={{
                width: '50ch',
                lineHeight: 1.2,
                fontSize: '18px'
              }}
            >
              The Nike Jordan Luka 5 is Luka Dončić's fifth signature shoe,
              focusing on stability and propulsion, featuring Zoom Strobel,
              Cushlon 3.0 foam, and an ISOband system for elite court control and
              explosive movement.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* SHOP BY SPORT SECTION */}
  <section
    id="products2"
    className="section-p1"
    style={{ marginBottom: '60px' }}
  >
    <h1
      style={{
        fontFamily: 'Handlee',
        fontSize: '50px',
        padding: '10px 12px'
      }}
    >
      Shop by Sport
    </h1>

    <div className="prod-row2">
      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/structure26.jpeg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Structure 26</h4>
      </div>

      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/imgi_110_5324c8eNike-FD2722-016_1.jpg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Pegasus 41</h4>
      </div>

      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/imgi_109_5324c8eNike-HJ1102-700_1.jpg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Pegasus 41</h4>
      </div>

      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/imgi_108_5324c8eNike-FD2722-118_1.jpg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Structure 26</h4>
      </div>

      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/imgi_105_5324c8eNike-HJ1102-106_1.jpg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Structure 26</h4>
      </div>

      <div className="prod-box2">
        <img
          src="/images/lukadetailimg/imgi_100_5324c8eNike-HJ1102-001_6.jpeg"
          style={{ borderRadius: '20px', height: '350px' }}
          alt=""
        />
        <h4>Nike Structure 26</h4>
      </div>
    </div>
  </section>
</>
  )
}

export default ProductDetails
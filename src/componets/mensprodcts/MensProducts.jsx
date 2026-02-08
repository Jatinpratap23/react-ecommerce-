import Footer from '../footer/Footer'



function MensProducts() {

  const products = [
  {
    id: 1,
    img: "/images/pacific-s.png/pacific1.png",
    title: "Luka 5",
    subtitle: "Lunar New Year PF",
  },
  {
    id: 2,
    img: "/images/m-shorts/m-shorts1.png",
    title: "Luka 5",
    subtitle: "Lunar New Year PF",
  },
  {
    id: 3,
    img: "/images/airjorden/jorden1.png",
    title: "Luka 5",
    subtitle: "Lunar New Year PF",
  },
  {
    id: 4,
     img: "/images/spotlight/airmax.png",
    title: "Luka 5",
    subtitle: "Lunar New Year PF",
  },
];
const sports = [
  {
    id: 1,
    name: "Running",
    img: "/images/Mens-sct-only/running.jpeg",
  },
  {
    id: 2,
    name: "Basketball",
    img: "/images/Mens-sct-only/baskateball.jpeg",
  },
  {
    id: 3,
    name: "Gym",
    img: "/images/Mens-sct-only/sportswear.jpeg",
  },
  {
    id: 4,
    name: "Training",
    img: "/images/Mens-sct-only/training.jpeg",
  },
];


  return (
    <>
      <section
        id="header"
        style={{ marginTop: '40px', height: '50px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <li style={{ listStyle: 'none' }}>
            <a href="/">
              <i className="fa-solid fa-caret-left"></i>
            </a>
          </li>

          <h1
            style={{
              fontFamily: 'Handlee',
              fontSize: '30px',
              marginTop: 0
            }}
          >
            Men
          </h1>
        </div>

        <div>
          <ul id="navbar">
            <li><a href="/men">Shoes</a></li>
            <li><a href="/blog">Clothing</a></li>
            <li><a href="/about">Accessories</a></li>
            <li><a href="/shop">Shop All</a></li>
          </ul>
        </div>
      </section>


      <section
        id="hero"
        style={{ padding: 0, marginTop: '40px' }}
      >
        <div className="Mens-img" style={{ width: '100%' }}>
          <img
            src="/images/hero-section/Mens-hero.jpeg"
            alt="Men Hero"
            style={{ width: '100%' }}
          />
        </div>
      </section>






      {/* products section */}
 <div id="products" className="section-p1">
  <h1
    style={{
      fontFamily: "Handlee",
      fontSize: "50px",
      padding: "10px 12px",
    }}
  >
    Product
  </h1>

  <div className="prod-row">
    {products.map((product) => (
      <div className="prod-box" key={product.id}>
        <img
          src={product.img}
          alt={product.title}
          style={{ borderRadius: "20px" }}
        />

        <div className="des">
          <span
            style={{
              fontFamily: "Handlee",
              fontSize: "15px",
            }}
          >
            {product.title} <br /> '{product.subtitle}'
          </span>
        </div>
      </div>
    ))}
  </div>
</div>




       

      {/* products2 section  */}

     <section id="products2" className="section-p1">
  <h1
    style={{
      fontFamily: "Handlee",
      fontSize: "50px",
      padding: "10px 12px",
    }}
  >
    Shop by Sport
  </h1>

  <div className="prod-row2">
    {sports.map((sport) => (
      <div className="prod-box2" key={sport.id}>
        <img
          src={sport.img}
          alt={sport.name}
          style={{ borderRadius: "20px" }}
        />
        <h4>{sport.name}</h4>
      </div>
    ))}
  </div>
</section>






      <div>
        <Footer />
      </div>
    </>







  )
}

export default MensProducts
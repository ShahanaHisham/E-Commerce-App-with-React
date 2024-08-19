import banner from './bannerimage1.jpeg'
import banner1 from './bannerimage2.jpeg'
import banner2 from './bannerimage3.jpeg'


function Banner() {
    return ( 
        <div className='my-5' >
            <div id="carouselExampleCaptions" className="carousel slide mt-5 pt-5">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100" alt={"banner1"} height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>ELEANOR</h5>
        <p>Grab your Products Now.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner1} className="d-block w-100" alt={"banner2"} height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Super Summer Sale</h5>
        <p>Summer Sale For Your Most Favourite Products</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt={"banner3"} height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-danger'>Jackets for such an affordable price!!!</h5>
        <p className='text-danger'>Shop At ELEANOR for affordable Products.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
     );
}

export default Banner;
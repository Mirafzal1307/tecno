import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import imgs from "./images/logo.png"
import brandImg from "./images/brand.png"
import one from "./images/top.png"
import two from "./images/bottom.png"
import Form from './Form';
import Slider from './Slider'



function App() {
  return (
    <div className="App">
      <header>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-1 p-0 col-md-2 col-sm-2">
              <div className="brandImage">
                <img className="two" src={two} alt="rasm"></img>
                <img className="one" src={one} alt="rasm"></img>
              </div>
            </div>
            <div className="top col-lg-5  col-md-10 col-sm-10">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-around justify-content-sm-between ">
                  <div className="img">
                    <img src={brandImg} alt="salom"></img>
                  </div>
                  <div className="nav">
                    <a href="#"> Xizmatlar </a>
                    <a href="#"> Loyihalar </a>
                    <a href="#"> Biz haqimizda</a>
                    <i class="fas fa-play-circle"></i>
                   
                  </div>
                  <i class="bars fas fa-bars d-none"></i>
                </div>
              </div>
              <div className="col-lg-10">
                <p className="firstP">Biz biznesingizni internet orqali rivojlantirishga yordam beramiz.</p>
                <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid debitis vitae
                </p>

              </div>
              <div className="col-lg-12">
                <Form />
                <p className="boshsahifa">Elektron tijoratning samarali yechimlari</p>

              </div>
            </div>

            <div className="half  col-md-12">
              <div className="row m-0">
                <div className="headTop col-lg-10 col-md-12">
                  <div className="rightTop">
                    <a className="callNumber" href="#">+998 (71) 299-86-88</a>
                    <i class="fas fa-search"></i>
                    <button className="rightButton">Savol berish</button>
                  </div>
                </div>
                <div className="carousel col-lg-6 col-md-12">
                  <Slider />
                  <div className="mainP">
                    <p>Web Dasturlash <br /> <span>xizmati</span></p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </header>

    </div>
  );
}

export default App;

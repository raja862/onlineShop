
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {

    const [initialValue,setValue]=useState(0);

    const handleIncrement=()=>{
      if(initialValue +1<=20) setValue(initialValue+1)
    }

const handleDecrement=()=>{
    if(initialValue -1 >=0) setValue(initialValue -1)
}
  return(
    <div className='input'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <span className="navbar-brand" >Start Online Shop</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
      <li className="nav-item"><span className="nav-link active" aria-current="page" >Home</span></li>
  <li className="nav-item"><span className="nav-link" >About</span></li>
   <li className="nav-item dropdown">
 <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</span>
 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
 <li><span className="dropdown-item" >All Products</span></li>
                             <li><hr className="dropdown-divider" /></li>
                                <li><span className="dropdown-item" >Popular Items</span></li>
                                <li><span className="dropdown-item" >New Arrivals</span></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{initialValue}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
       
        <header className="hed">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage </p>
                </div>
            </div>
        </header>
       
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://bd.gaadicdn.com/processedimages/ather-energy/ather-450/494X300/ather-4505f88170da0a85.jpg?imwidth=880" alt="..." />
                      
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Ather Electric</h5>
                                  <span>All Credit Card 10% offer</span><br></br>
                                    Rs91,120.00 - Rs99,243.00<br></br>
                                    <a href='https://www.atherenergy.com/' >More Info</a>
                                </div>
                            </div>
                          
                            <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                            
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://imgd.aeplcdn.com/0x0/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg" alt="..." />
                  
                            <div className="card-body p-4">
                                <div className="text-center">
                       
                                    <h5 className="fw-bolder">TATA NEXON EV</h5>
                  <span>Low Down Payment</span><br></br>
                                    Rs14,60,000.00 - Rs19,39,999.00<br></br>
                                    <a href='https://nexonev.tatamotors.com/' >More Info</a>
                                </div>
                            </div>
   
                            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center" onClick={()=>handleIncrement()}><a className="btn btn-outline-dark mt-auto" >Add to Card</a></div>
                            </div> */}
                             <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                     
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                       
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/61QVRzoQtWL._SX679_.jpg" alt="..." />
               
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">DJI Mini 3 Pro</h5>
                                    <span>Axis Bank offer 10%</span><br></br>
                  
                                    <span className="text-muted text-decoration-line-through">Rs120000.00</span>
                                    Rs1,01,999.00<br></br>
                                    <a href='https://www.dji.com/mini-3-pro' >More Info</a>
                                </div>
                            </div>
   

                            <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>



                    <div className="col mb-5">
                        <div className="card h-100">
                        
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://images.carandbike.com/bike-images/colors/ola-electric/s1-pro/ola-electric-s1-pro-millenial-pink.png?v=1653659519" alt="..." />
                  
                            <div className="card-body p-4">
                                <div className="text-center">
                               
                                    <h5 className="fw-bolder">Ola S1Pro</h5>
                                    <span>Discount Price</span>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                      
                                    <span className="text-muted text-decoration-line-through">Rs150000.00 </span>
                            
                                    Rs1,40,000.00  <br></br>

                                    <a href='https://olaelectric.com/' >More Info</a>
                                </div>
                            </div>
               
                            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div> */}
                             <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                     
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                       
                            <img className="card-img-top" src="https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_250-duke-noled-bl-21-90re_%23SALL_%23AEPI_%23V2.png" alt="..." />
               
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">KTM DUKE 250cc</h5>
                                    <span>Best Offer</span><br></br>
                  
                                    <span className="text-muted text-decoration-line-through">Rs290000.00</span>
                                    Rs2,85,000.00<br></br>
                                    <a href='https://www.ktmindia.com/' >More Info</a>
                                </div>
                            </div>
   

                            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div> */}
                             <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>


                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://www.91-cdn.com/hub/wp-content/uploads/2022/01/OnePlus-10-Pro-3-1.jpg" alt="..." />
                  
                            <div className="card-body p-4">
                                <div className="text-center">
                       
                                    <h5 className="fw-bolder">OnePlus</h5>
                  <span>Credit card Offers 10%</span> <br></br>
                                    Rs60,000.00 - Rs39,999.00<br></br>
                                    <a href='https://www.oneplus.in/event/9-year-anniversary' >More Info</a>
                                </div>
                            </div>
   
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="https://www.oneplus.in/store/phone">View options</a></div>
                            </div>
                        </div>
                    </div>


                    <div className="col mb-5">
                        <div className="card h-100">
                      
                            <img className="card-img-top" src="https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-172437,msid-74101424/bajaj-auto-has-scaled-up-the-range-of-bs-vi-compliant-vehicles-and-it-will-be-expanded-over-the-next-few-weeks-.jpg?from=mdr" alt="..." />
                       
                            <div className="card-body p-4">
                                <div className="text-center">
                             
                                    <h5 className="fw-bolder">Pulsar 150cc</h5>
                               
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                           <span>Down payment Rs10,000 </span><br></br>
                                    Rs98,000.00<br></br>
                                    <a href='https://www.bajajauto.com/bikes/pulsar' >More Info</a>
                                </div>
                            </div>
                 
                            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div> */}
                             <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                  
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                 
                            <img className="card-img-top" src="https://i.ytimg.com/vi/rr2XfL_df3o/maxresdefault.jpg" alt="..." />
              
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">MacBook Pro</h5>
                                    <span>cash back offer 10%</span><br></br>
                                    <span className="text-muted text-decoration-line-through">Rs1,92,000.00</span>
                                    RS1,82,999.00<br></br>
                                    <a href='https://www.apple.com/in/mac/?afid=p238%7CsFI0S4wlg-dc_mtid_187079nc38483_pcrid_630569938550_pgrid_109263622213_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-mac--slid---product-'>More Info</a>
                                </div>
                            </div>
                            <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>    <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-5.jpg" alt="..." />
                  
                            <div className="card-body p-4">
                                <div className="text-center">
                       
                                    <h5 className="fw-bolder">Iphone 14Pro</h5>
                  <span>SBI card 10%</span> <br></br>
                                    Rs1,10,000.00 - Rs1,39,999.00<br></br>
                                    <a href='https://www.apple.com/in/iphone/' >More Info</a>
                                </div>
                            </div>
   
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="https://www.apple.com/in/iphone/">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
               
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div>
                      
                            <img className="card-img-top" src="https://economictimes.indiatimes.com/thumb/msid-93369079,width-640,height-480,resizemode-7/sony-bravia-65-4k-ultra-hd-smart-oled-google-tv.jpg?from=mdr" alt="..." />

                            <div className="card-body p-4">
                                <div className="text-center">
                               
                                    <h5 className="fw-bolder">Sony 4k TV</h5>
                                   <span>HDFC CARD 10%</span><br></br>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                              
                                    <span className="text-muted text-decoration-line-through">Rs12100.00</span>
                                    Rs1,07,000.00<br></br>
                                    <a href="https://www.sony.co.in/electronics/bravia-xr-tv?cid=sem-in-25063&gclid=Cj0KCQiAtICdBhCLARIsALUBFcGPXbVwbwv8AeUDGiG8HF2-VYAc35n10Imfwfuog6Z-xkBqebaGCVEaAgsSEALw_wcB" >More Info</a>
                                </div>
                            </div>
    
                            <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                     
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right:" 0.5rem"}}>Sale</div>
                       
                            <img className="card-img-top" src="https://cdn.dxomark.com/wp-content/uploads/medias/post-106688/Samsung-Galaxy-S22-Ultra-featured-image-packshot-review-Recovered.jpg" alt="..." />
               
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">Samsung Galaxy S22 Ultra </h5>
                                    <span>ICICI BANK 10%</span><br></br>
                  
                                    <span className="text-muted text-decoration-line-through">Rs120000.00</span>
                                    Rs1,05,000.00<br></br>
                                    <a href='https://www.samsung.com/in/smartphones/?product1=sm-f936bzkhinu&product2=sm-f721blbainu&cid=in_paid_ppc_google_allproducts_none_allproducts-eshop-bau-dsa_text_20200105_17924215676-140077037736---614139100219-dsa-546668199249-1ur-501336l-2022&gclid=Cj0KCQiAtICdBhCLARIsALUBFcEVTRSA8Dljd1lGbXX5jlYuaZd_cyAHBXGI55BEbk2w-OhxNpAWMsIaAojIEALw_wcB' >More Info</a>
                                </div>
                            </div>
   
                            <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
       
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/71n4098WUPL._AC_SS450_.jpg" alt="..." />
                         
                            <div className="card-body p-4">
                                <div className="text-center">
               
                                    <h5 className="fw-bolder">BOSCH Washing Machine</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                   
                                    Rs31,240.00<br></br>
                                    <a href='https://www.bosch-home.in/productlist/washer-dryer/front-loading-washing-machines' >More Info</a>

                                </div>
                            </div>

                            {/* <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>

                            </div> */}
                             <div>
                            <Button onClick={handleIncrement} variant="success">Add To Card</Button>     <Button onClick={handleDecrement} variant="warning">Remove to Card</Button>

                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </div>
  )
}
  export default App;

import React, {Component} from 'react';

export function MainCarousel (){
  
    const videoStyle={
      position: "absolute",
      zIndex: "-1",
      inset: "0",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
       backgroundImage: "none"
    };
    
    return(
      <div>
        <section id="hero1-2" className="hero bg-video video-play">
          <div style={{position: 'absolute', zIndex: '-1', inset: '0px', overflow: 'hidden', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%', backgroundImage: 'none'}}>
            <video autoplay="1" loop="" muted="" style={{margin: 'auto', position: 'absolute', zIndex: '-1', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', visibility: 'visible', width: '1351px', height: 'auto'}}>
                <source src="images/video/video.mp4" type="video/mp4" />
                <source src="images/video/video.webm" type="video/webm" />
                <source src="images/video/video.ogv" type="video/ogg" />
            </video>
          </div>
          <div className="overlay"></div>            
      
          <div className="container vertical-center-rel">
              <div className="row">
                  <div className="col-md-7">
                      <h1 className="text-white p-t-md">Let's make something extraordinary together</h1>
                      <p className="lead text-white m-b-md ">We have been collaborating with brands and agencies to build meaningful digital interactions since 2007</p>
                      <a href="#portfolio1-1" className="btn btn-shadow btn-blue text-uppercase btn-md smooth-scroll">Featured Work</a>
                  </div>
              </div>
          </div>
    </section>
    </div>
    );
  }


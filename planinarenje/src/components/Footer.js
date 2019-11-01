import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';










function Footer()
{
    return (

        <div>
            <footer className="page-footer font-small  pt-4 bg-dark" style={{color:'white'}}>
            <div className="container">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 mx-auto mt-3">
                      <div className="row">
                        <div className="col-4">
                          <h5 className="text-uppercase font-weight-bold">ЗА НАС</h5>
                          <hr style={{borderTop:'1px solid #ffffff'}}/>
                          <img src={require('../SLIKI/logo50white.png')} style={{margin:'0 auto', display:'block', maxWidth:'600px', width:'100%'}}/>
                        </div>
                        <div className="col-8">
                          <p style={{fontSize:'14px', marginTop:'15%'}} className="ml-3">Ние сме тројца студенти кои имаа замисла и цел да направат страна за сите љубители на 
                              планинарењето,да бидат информирани за сите настани,друштва и новости на забавен начин. Ние сме тројца студенти кои имаа замисла и цел да направат страна за сите љубители на 
                              планинарењето,да бидат информирани за сите настани,друштва и новости на забавен начин.
                          </p>
                        </div>
                      </div>

                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 offset-1 mt-3">
                      <h5 className="text-uppercase font-weight-bold">Контакт</h5>
                      <hr style={{borderTop:'1px solid #ffffff'}}/>
                      <div style={{fontSize:'12px'}}>
                        <p><PhoneIcon />&nbsp;+389 2 246 1765</p>
                        <p><MailOutlineIcon />&nbsp;contact@planinarenje.com</p>
                        <p><MailOutlineIcon />&nbsp;contact1@planinarenje.com</p>
                        <p><MailOutlineIcon />&nbsp;support@planinarenje.com</p>
                      </div>
                    </div>
                </div>
              <hr style={{borderTop:'1px solid #ffffff'}}/>
              {/*AVTORSKI PRAVA SECTIOn*/}
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8">
                  <p className="text-center text-md-left">Авторски Права 2019
                      <a href="https://mdbootstrap.com/education/bootstrap/">
                      <span style={{color:'white'}}> © ПЛАНИНАРЕЊЕ</span>
                      </a>
                  </p>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0">               
                  <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1" href>
                          <FacebookIcon />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <TwitterIcon />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <YouTubeIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
    </footer> 
  </div>
    )

}

export default Footer;
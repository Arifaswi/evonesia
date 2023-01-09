import React from 'react'
import "./Logout.css";
import {Link} from "react-router-dom";
import Segi5 from '../../images/EVONESIA putih no bg 3.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';
import Progressbar from './Progress_bar.js';
import bingkaikirilog from '../../images/Clone X 11.png';
import bingkaikananlog from '../../images/Clone X 18.png';
function logout() {
  return (
    <>
    
      <div className="main-logout">
        <div className='bglogout'></div>
      <img className='logo2' src={logo2} alt=""/>
    <img className='Segi5' src={Segi5} alt=""/>
      
        <div className="logout-contain">
        <div className='katalogout'>Thank you for carrying out direct, free, honest and 
        fair elections in accordance with the 1945 Constitution article 22E of the 
        Unitary State of the Republic of Indonesia. </div>
        <Link to='/Home'><button type="submit" className="btn ">Back To Home</button></Link>
           <div id="menu">
        <div id="topmenu">
</div>
<div className='bar'>
<Progressbar bgcolor1="#4c2952" progress1='35'  bgcolor="grey" progress='65' height={36}/>
<img className='iconkananlog' src={bingkaikananlog} alt="" />
<img className='iconkirilog' src={bingkaikirilog} alt="" />
</div>
</div><div className="icon3log">
            <div className="iconig"></div>
            <div className="iconlink"></div>
            <div className="icongit"></div>
            </div> 
        </div>
      </div>
   </> 
 )
}

export default logout

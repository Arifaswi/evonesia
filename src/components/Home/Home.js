import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import smallspline from '../../images/Spline 2.png';
import iconbulat from '../../images/Mystery Item B.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';
import iconhome1 from '../../images/Polygon 1.png';
import iconhome2 from '../../images/BAYC 1.png';
import iconhome3 from '../../images/Clone X 5.png';
import iconhome4 from '../../images/Camera.svg';
import iconhome5 from '../../images/Clone X 11.png';
const home = () => {
  return (
    <>
    
      <div className="main-home">
        <div className='bghome'></div>
        <img className='logo2' src={logo2} alt="" />
    <img className='iconbulat' src={iconbulat} alt="" />
        <div className='katahome '><img className='smallspline' src={smallspline} alt="" /></div>
        <div className='katahome'>
          <div id='katahome1'>Our environmental impact matters to us.</div>
          <div id='katahome2'>In order to enable our community to spend as little as possible in gas fees when minting,
             we opted for a contract made by Azuki called ERC721A,
            which allows minting multiple NFTs for essentially the same cost as minting a single one</div>
        </div>
        <div className='tittlehome'>About Candidate</div>
        <div className='bingkai1 '></div>
        <img className='iconhome1' src={iconhome1} alt="" />
        <div className='bingkai2 '></div>
        <img className='iconhome2' src={iconhome2} alt="" />
        <div className='bingkai3 '></div>
        <img className='iconhome3' src={iconhome3} alt="" />
        <div className='bingkai4 '></div>
        <img className='iconhome4' src={iconhome4} alt="" />
        <div className='bingkai5 '></div>
        <img className='iconhome5 ' src={iconhome5 } alt="" />
        <div className="home-contain">
       
<div id="menu">
    <div id="topmenu">
      <ul>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Token'>Token</Link></li>
      <li><Link to='/Survey'>Survey</Link></li>
      <li><Link to='/Polling'>Polling</Link></li>
      <li><Link to='/Logout'>Log Out</Link></li>
      </ul>
    </div>
</div>

<div id="menu1">
    <div id="mainmenu">
      <ul>
        <button><li><Link to='/#'>Photo</Link></li></button>
        <button><li><Link to='/#'>Phorto</Link></li></button>
        <button><li><Link to='/#'>Video</Link></li></button>
        <button><li><Link to='/#'>Description</Link></li></button>
      </ul>
    </div>
</div>
        </div>
      </div>

   </> 
  )
}

export default home
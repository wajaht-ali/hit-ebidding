import React from 'react'
import "../styles/Footer.scss";
import { Link } from 'react-router-dom';
import logo from "../assets/hit_logo.png";
import {CiLocationOn} from "react-icons/ci";
import {PiPhone} from "react-icons/pi";
import {MdOutlineFax} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";



const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="box box-1">
          <div className="head">
            <img src={logo} alt="hit-logo" />
            <h3>Heavy <span>Industries</span> Taxila</h3>
            <div className="bdr"></div>
          </div>
          <div className="bottom">
            <p>The Heavy Industries Taxila is one of the largest defence products manufacturer and has grown into a military industrial complex since its foundation 1971.The HIT promotes, markets, engineers, develops, and undertakes heavy engineering works for Pakistan's military and for the civilian law enforcement agencies.</p>
          </div>
        </div>
        <div className="box box-2">
          <div className="head">
            <h3>Related Links</h3>
            <div className="bdr"></div>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <Link className='link' to={"https://mod.gov.pk/"}>Ministry of Defence</Link>
              </li>
              <li>
                <Link to={"https://www.pof.gov.pk/"}>Pakistan Ordinance Factory</Link>
              </li>
              <li>
                <Link to={"https://www.pac.org.pk/"}>Pakistan Aeronautical Complex</Link>
              </li>
              <li>
                <Link to={"https://modp.gov.pk/"}>Ministry of Defence Production</Link>
              </li>
              <li>
                <Link to={"https://hitec-ims.edu.pk/"}>HITEC</Link>
              </li>
              <li>
                <Link to={"https://hitec-ims.edu.pk/"}>HITEC Institute of Medical Sciences</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="head">
            <h3>OTHERS</h3>
            <div className="bdr"></div>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <Link to={"https://hit.gov.pk/mti.php"}>Margalla Training Institute</Link>
              </li>
              <li>
                <Link to={"https://hit.gov.pk/tender/tender.php"}>Tender Enquiry</Link>
              </li>
              <li>
                <Link to={"https://hit.gov.pk/quality.php"}>Quality Assurance</Link>
              </li>
              <li>
                <Link to={"https://swo.gov.pk/"}>Staff Welfare Organization (SWO)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box box-4">
          <div className="head">
            <h3>FIND US</h3>
            <div className="bdr"></div>
          </div>
          <div className="center">
            <address>Heavy Industries Taxila, Taxila Cantt, District Rawalpindi.</address>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <CiLocationOn />
                <p>Taxila Cantt, District Rawalpindi</p>
              </li>
              <li>
                <PiPhone />
                <p>+92-51-9315333</p>
              </li>
              <li>
                <MdOutlineFax />
                <p>+92-51-9315029</p>
              </li>
              <li>
                <AiOutlineMail />
                <p>dircommdte@hit.gov.pk</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright &copy; 2018. HEAVY INDUSTRIES TAXILA, PAKISTAN</p>
      </div>
    </div>
  )
}

export default Footer
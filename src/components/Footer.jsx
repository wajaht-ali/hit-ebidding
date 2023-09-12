import React from 'react'
import "../styles/Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="box">
          <div className="head">
            <h3>Others</h3>
          </div>
          <div className="bottom">
            <ul>
              <li>
                <Link>MTI</Link>
              </li>
              <li>
                <li>
                  <Link>SWO</Link>
                </li>
                <Link>Tenders Enquiry</Link>
              </li>
              <li>
                <Link>Quality Assurance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
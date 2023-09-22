import React from 'react'
import "../styles/StepOne.scss";

const FirstStep = () => {
  return (
    <div className='step-one'>
      <div className="main">
        <form action="" method="post">

          <div className="data">
            <label htmlFor="name">Name of Firm:</label>
            <input type="text" id='name' />
          </div>

          <div className="data">
            <label htmlFor="address">Address (office): </label>
            <input type="text" id='address' />
          </div>

          <div className="data">
            <label htmlFor="add-detail">Address Factory/Godown/Stocks: </label>
            <input type="text" id='add-detail' />
          </div>

          <div className="data">
            <label htmlFor="telephone">Telephone: </label>
            <input type="number" id='telephone' />
          </div>

          <div className="data">
            <label htmlFor="fax">Fax: </label>
            <input type="number" id='fax' />
          </div>


          <div className="data">
            <label htmlFor="email">Email: </label>
            <input type="email" id='email' />
          </div>

          <div className='data'>
            <label htmlFor="tax-no">National Tax No: </label>
            <input type="number" id='tax-no' />
          </div>

          <div className="data">
            <label htmlFor="sales-no">Sales Tax No: </label>
            <input type="number" id='sales-no' />
          </div>

          <div className="data">
            <h3>Type of Firm</h3>
            <label htmlFor="firm-type">Type of Firm: </label>
            <select name="firm-type" id="firm-type">
              <option value="">Choose Firm Type</option>
              <option value="">Sole Proprietary concern</option>
              <option value="">Partnership concern</option>
              <option value="">Company</option>
              <option value="">Limited Liability Partnership</option>
            </select>
          </div>

          <div className="data">
            <h3>Detail of employees numbers</h3>
            <div className="meta-data">
              <label htmlFor="">Sales Executive</label>
              <input type="number" name="" id="" />
            </div>
            <div className="meta-data">
              <label htmlFor="">Staff</label>
              <input type="number" name="" id="" />
            </div>
          </div>

          <div className="data">
            <h3>Firm's Management Record: </h3>
            <textarea name="management-record" cols="60" rows="5" placeholder="Enter firm's Management details..."></textarea>
          </div>


        </form>
      </div >
    </div >
  )
}

export default FirstStep
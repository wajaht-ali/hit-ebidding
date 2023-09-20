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


          <label htmlFor="email">Email: </label>
          <input type="email" id='email' />

      <div className='data'>
        <label htmlFor="tax-no">National Tax No: </label>
        <input type="number" id='tax-no' />
      </div>

      <div className="data">
        <label htmlFor="sales-no">Sales Tax No: </label>
        <input type="number" id='sales-no' />
      </div>

    </form>
      </div >
    </div >
  )
}

export default FirstStep
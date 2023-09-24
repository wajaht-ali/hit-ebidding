import React from 'react'
import "../styles/StepThree.scss";

const StepThree = () => {
  return (
    <div className='step-three'>
      <form action="">
        <div className="data">
          <label htmlFor="partnership">. Are you registered with any Government or Semi-Government set-up (other than
            theDefence Establishment)? If so, please indicate: -
          </label>
          <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter org name, registration number, date of registration, category."></textarea>
        </div>

        <div className="data">
          <label htmlFor="partnership">Was your firm previously registered with any Defence Establishment including MoDP
            under any other name and defaulted in any Defence Contract? If so, please furnish
            details below(or attach a list of contracts separately):
          </label>
          <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter details here..."></textarea>
        </div>

        <div className="data">
          <label htmlFor="partnership">Has your firm ever been blacklisted / debarred by any of the Defence Establishment
            or Government / Semi-Government entities? If yes, please indicate the type of legal /
            administrativeaction taken against the firm and duration of such action:
          </label>
          <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter details here..."></textarea>
        </div>

        <div className="data">
          <label htmlFor="partnership">Is there any case against firm in court of law and any other
          </label>
          <input type="text" placeholder='Yes/No' />
        </div>

        <div className="data">
          <label htmlFor="partnership">Indicate past performance of your firm with all types of Govt, semi-Govt, Civil and
            Military Organizations (attach list if required): -
          </label>
          <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter Contracts, Organization, Contract Value, Completed/In-Progress, Remarks..."></textarea>
        </div>
      </form>
    </div>
  )
}

export default StepThree
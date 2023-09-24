import React from 'react'
import "../styles/StepTwo.scss";

const SecondStep = () => {
    return (
        <div className='step-two'>
            <form action="">
                <div className="data">
                    <label htmlFor="partnership">Indicate partnership with any other firm as JV, consortium or association etc:
                    </label>
                    <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter the partnership details of your firm with any other firm or association and it's details..."></textarea>
                </div>

                <div className="data">
                    <div className="meta-data">
                        <h3>Firm's Bank Accounts</h3>
                        <ul>
                            <li>
                                <label htmlFor="local-acc">Local Accounts: Indicate in 'Remarks' whether account is in local or foreign-currency</label>
                                <textarea name="local-account" id="" cols="100" rows="10" placeholder="Add the details of Firm's local accounts e.g, account title, number and balance etc..."></textarea>
                            </li>
                            <li>
                                <label htmlFor="Foreign-accoutn">Foreign Accounts: </label>
                                <textarea name="foreign-account" id="" cols="100" rows="10" placeholder="Add the details of Firm's foreign accounts e.g, account title, number and balance etc..."></textarea>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="data">
                    <p htmlFor="reg-agency">
                        Indicate lead registration agency to which the firm is submitting its documents for registration (please indicate by)
                    </p>

                    <div className="agency-options">
                        <div className="box">
                            <label htmlFor="">DGDP </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">DGMP </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">DG RD&E </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">NRTC </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">LEAD Agency</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">PAC</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Karachi Shipyar</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                    </div>
                </div>

                <div className="data">
                    <p htmlFor="reg-agency">
                        Indicate any other organizations of the MoDP to register with (please indicate by)
                    </p>

                    <div className="agency-options">
                        <div className="box">
                            <label htmlFor="">DGDP </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">DGMP </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">DG RD&E </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">NRTC </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">LEAD Agency</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">PAC</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Karachi Shipyar</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                    </div>
                </div>

                <div className="data">
                    <p htmlFor="reg-agency">
                        Indicate the category of registration for which being applied (please indicate by)
                    </p>

                    <div className="agency-options">
                        <div className="box">
                            <label htmlFor="">Manufacturer </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Stockist </label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Agent</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Freight Forwarder</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">R&D Consultant</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Distributor</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Trading House</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Dealer</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Auctioner</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>

                        <div className="box">
                            <label htmlFor="">Engineering/Design House</label>
                            <input type="checkbox" name="agency" id="" />
                        </div>
                    </div>

                    <div className="data">
                        <label htmlFor="partnership">Indicate the category of registration if other than above:
                        </label>
                        <textarea name="partnership" id="partnership" cols="100" rows="5" placeholder="Enter registration details..."></textarea>
                    </div>

                    <div className="data">
                        <label htmlFor="partnership"> Detail of stores for which indexation is applied for (list attached as per Annexure “F”):
                        </label>
                        <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter details here..."></textarea>
                    </div>

                    <div className="data">
                        <label htmlFor="partnership"> If applying as an Agent or a Distributor, mention Principals and their stores to be indexed:-
                        </label>
                        <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter details here..."></textarea>
                    </div>

                    <div className="data">
                        <label htmlFor="partnership">Are you registered with any Defence Establishment other than the LEAD AGENCY
                            e.g. DGDP DGMP, POF Wah, GHQ and its Formations/Ordnance/EME
                            Establishments FWO and NLC etc? If so, please indicate: -
                        </label>
                        <textarea name="partnership" id="partnership" cols="100" rows="10" placeholder="Enter org name, reg number, date of registration, date of validity, category."></textarea>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default SecondStep;
import React from 'react';
import { FaAngleRight, FaBuilding, FaRegClock, FaRegCopy, FaShip } from "react-icons/fa6";
import { GiMapleLeaf } from 'react-icons/gi';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className='navbar-content'>
                <div className="logo-section">
                    <img src="/10.jpg" width="48" height="48" alt="Image" />
                    <p className='logo-text'>Maersk</p>
                </div>

                <div className='status-icons'>
                    <p className='status-expired'>Expired</p>
                    <div className='status-item group'>
                        <FaShip className='status-icon' />
                        <p className='status-text'>20'ST</p>
                    </div>
                    <div className='status-item group'>
                        <FaRegClock className='status-icon' />
                        <p className='status-text'>66 days</p>
                    </div>
                    <div className='icon-wrapper group'>
                        <GiMapleLeaf className='status-icon' />
                    </div>
                </div>

                <div className='action-icons'>
                    <div className='action-item'>
                        <FaRegCopy className='action-icon' />
                    </div>
                    <div className='action-item'>
                        <FaAngleRight className='action-icon' />
                    </div>
                </div>
            </div>

            <div className='location-pricing'>
                <div className='location-item'>
                    <FaBuilding />
                    <p className='location-text'>Hamburg, DE</p>
                </div>
                <div className='location-item'>
                    <FaBuilding />
                    <p className='location-text'>Paradip, IN</p>
                </div>
                <div className='price-section'>
                    <p className='price-text'>USD 3 897</p>
                </div>
            </div>

            <div className='request-button-wrapper'>
                <button className='request-button'>Request</button>
            </div>

            <div className="terms-container">
                <h2>Terms / Additional charges</h2>
                <div className="terms-content">
                    <strong>Door-To-Door rate</strong>
                    <p><strong>Subject to:</strong></p>
                    <ul>
                        <li>OWS surcharge where applicable</li>
                        <li>IMO/ADR surcharge where applicable</li>
                        <li>Space availability</li>
                        <li>Equipment availability</li>
                        <li>Trucks/trailers availability</li>
                        <li>Any other unforeseen or additional charges</li>
                    </ul>
                    <p>
                        Standard freetime in origin and destination on storage/demurrage/detention and electricity plugging (for reefers).<br />
                        Standard truck downtime according to local trucking company terms.
                    </p>
                    <p>
                        All rates are subject to general <a href="#">Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../menuContent.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/patient-registration">
        Registration
        <hr />
      </a>

      <a className="menu-item" href="/physical-health">
        Physical Health Record
        <hr />
      </a>

    
      <a className="menu-item" href="/insurance">
        Insurance
        <hr />
      </a>

      <a className="menu-item" href="/emergency-contact">
        Emergency Contact
        <hr />
      </a>

      <a className="menu-item" href="/payment-details">
        Payment Details
        <hr />
      </a>
    </Menu>
  );
};
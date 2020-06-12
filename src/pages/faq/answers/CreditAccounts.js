import React, { Fragment } from 'react';
import Text from '../../../components/text';

const CreditAccounts = () => (
  <Fragment>
    <Text
      text="Clients’ accounts are credited with their purchases of grains at the following times (purchases received by MyAngu after the cut-off times will be completed at the next window):"
      classNames="default-text mb-5"
    />
    <Text
      text="Working Days (Harare/Johannesburg time)"
      classNames="default-text"
    />
    <ul>
      <li>
        <p>8.30am</p>
        <p>PayPal cut-off: 7.30am</p>
        <p>UK Bank transfer cut-off: 8am</p>
      </li>
      <li>
        <p>1.00pm</p>
        <p>PayPal cut-off: 12pm</p>
        <p>UK Bank transfer cut-off: 12.30pm</p>
      </li>
      <li>
        <p>5.30pm</p>
        <p>PayPal cut-off: 4.30pm</p>
        <p>UK Bank transfer cut-off: 5.00pm</p>
      </li>
    </ul>
    <Text text="Saturdays" classNames="default-text" />
    <ul>
      <li>
        <p>8.30am (Harare/Johannesburg time)</p>
        <p>PayPal cut-off: 7.30am</p>
        <p>UK Bank transfer cut-off: 8am</p>
      </li>
      <li>
        <p>4.00pm</p>
        <p>PayPal cut-off: 3pm</p>
        <p>UK Bank transfer cut-off: 3.30pm</p>
      </li>
    </ul>
    <Text text="Sundays & Public Holidays" classNames="default-text" />
    <ul>
      <li>
        <p>1.00pm</p>
        <p>PayPal cut-off: 12pm</p>
        <p>UK Bank transfer cut-off: 12.30pm</p>
      </li>
    </ul>
  </Fragment>
);
export default CreditAccounts;

import React, { Fragment } from 'react';
import Text from '../../../components/text';

const NoReflect = () => (
  <Fragment>
    <Text
      text="If purchasing via PayPal, credit or debit card"
      classNames="default-text mb-5 bold"
    />
    <Text
      text="If, after paying for new grain vouchers, your account doesn't update within 24 hours then it is probably because the name of the purchaser is different to the My Angu account holder. If this is not the case then please send an email to support@myangu.com. Otherwise:"
      classNames="default-text mb-5"
    />
    <ul>
      <li>
        <Text
          text="Ask the person who owns the payment card to open an Angu account in their name."
          classNames="default-text"
        />
      </li>
      <li>
        <Text
          text="Then that person (who made the original payment), in the morning of a working day, needs to purchase another £5 worth of grain vouchers precisely."
          classNames="default-text"
        />
      </li>
      <li>
        <Text
          text="They then need to call Angu shortly afterwards and explain when they sent the original payment and what account number reference it had."
          classNames="default-text"
        />
      </li>
      <li>
        <Text
          text="Angu will identify both the new £5 purchase and the original unknown one and then credit the new account with both amounts"
          classNames="default-text mb-4"
        />
      </li>
    </ul>
    <Text
      text="If purchasing via UK Bank Transfer"
      classNames="default-text mb-5 bold"
    />
    <Text
      text="There are three likely causes of a UK Bank Transfer purchase failing to reflect in the account. If it is none of these three then please email support@myangu.com"
      classNames="default-text mb-5"
    />
    <Text classNames="default-text mb-5">
      <u>Incorrect bank details used for Angu Client Services</u>
    </Text>
    <Text
      text="Call your bank first to see if they can retrieve the funds. If they cannot  (and particularly if you entered the right sort code) please contact Angu Client Service’s bank “CashPlus” directly on 0330 024 0924 (from UK) or +44 207 153 8940 (from elsewhere). They’re available by phone Monday to Friday, from 8am to 8pm, and Saturday from 8am to 4pm."
      classNames="default-text mb-5"
    />
    <Text
      text="Unfortunately there is nothing that Angu can directly do in this situation"
      classNames="default-text mb-5"
    />
    <Text classNames="default-text mb-5">
      <u>Incorrect ANGU Account number as a reference</u>
    </Text>
    <ul>
      <li>
        <Text
          text="Make another purchase in the morning of a working day of precisely £5 but this time entering the correct account number as a reference"
          classNames="default-text"
        />
      </li>
      <li>
        <Text
          text="Approximately an hour after making the payment call Angu and explain when you sent the original payment and what (incorrect) account number reference it had."
          classNames="default-text"
        />
      </li>
      <li>
        <Text
          text="Angu will then identify both the new £5 purchase and the original unknown one and then credit the new account with both amounts"
          classNames="default-text"
        />
      </li>
    </ul>
    <Text classNames="default-text mb-5">
      <u>
        The bank account used to send the deposit was not in the same name as
        the ANGU account
      </u>
    </Text>
    <Text
      text="Ask the person whose bank account it was to open an Angu account themselves (i.e. in their own name) and then to follow the procedure above as for sending money in with the wrong Angu account number as a reference"
      classNames="default-text"
    />
  </Fragment>
);
export default NoReflect;

import React, { Fragment } from 'react';
import Text from '../../../components/text';

import NoReflect from './NoReflect';
import CreditAccounts from './CreditAccounts';

const Answers = ({ id }) => {
  const computeAnswer = () => {
    switch (id) {
      case 4:
        return (
          <Fragment>
            <Text
              text="The MyAngu App is mostly free"
              classNames="default-text"
            />
            <ul>
              <li>
                <Text
                  text="Free to download (from the Google Play store and the Apple App Store"
                  classNames="default-text"
                />
              </li>
              <li>
                <Text
                  text="Free to open an account (both individuals and merchants"
                  classNames="default-text"
                />
              </li>
              <li>
                <Text
                  text="Free to send grains (i.e. MyAngu’s vouchers) to friends, family and merchants (in-store & otherwise)."
                  classNames="default-text"
                />
              </li>
            </ul>
            <Text
              text="MyAngu charges 1.5% when grains are bought and 1% when they are redeemed. Unfortunately we also need to add on PayPal’s transaction charges when using PayPal/Credit/debit cards etc. These are:"
              classNames="default-text"
            />
            <ul>
              <li>
                <Text text="UK cards: 3% + 20p" classNames="default-text" />
              </li>
              <li>
                <Text
                  text="International Cards: 3% + 2% + £0.20"
                  classNames="default-text"
                />
              </li>
            </ul>
          </Fragment>
        );
      case 5:
        return (
          <Fragment>
            <Text
              text="MyAngu benefits from continuous world-class encryption put together by a South African software company that has done similar systems there (including for Pick N Pay, Vodacom and their own system uKheshe). "
              classNames="default-text mb-5"
            />
            <Text
              text="For added comfort, it should be noted that no money is actually being moved by the app itself and we have mechanisms in place to ensure that no one can access your Angu account. Great care is taken whenever a client wishes to redeem grains, ensuring their identity and legitimacy."
              classNames="default-text mb-5"
            />
            <Text
              text="Always remember never to share your username or password with anyone, even if you know them very well."
              classNames="default-text mb-5"
            />
          </Fragment>
        );

      case 6:
        return (
          <Fragment>
            <Text
              text="MyAngu grains are vouchers and not currency. Furthermore they can only be bought using remittances from offshore (that are “free funds”). Consequently there are no legal restrictions to using them, buying imports with them etc. Indeed merchants can price goods in grains as they see fit!"
              classNames="default-text mb-5"
            />
            <Text
              text="The legality of the MyAngu platform has been confirmed by top lawyers in both London and Harare. However, please feel free to talk to your own legal counsel."
              classNames="default-text mb-5"
            />
            <Text
              text="You will be expected to pay your taxes in the normal way. The MyAngu app is not to be used, in any way, to evade taxes."
              classNames="default-text mb-5"
            />
          </Fragment>
        );
      case 7:
        return <NoReflect />;
      case 8:
        return (
          <Fragment>
            <Text
              text="Each grain voucher is 100% backed by 1 grain of gold bullion (this is not a coincidence!) held securely in Zurich, Switzerland. MyAngu uses Bullionvault.com to buy, sell and manage the storage of the gold. Bullionvault.com, a UK company that is partially owned by the World Gold Council, is a significant and highly respected player in the private gold market."
              classNames="default-text mb-5"
            />
            <Text
              text="Please note that crypto-currencies (that use blockchain) are normally not 'backed' at all, by anything. Those that are have only limited backing (e.g. 20% gold). It cannot be overstated how serious this point is. Permanent 100% gold backing is critical for the system to be honest and sustainable. Please do not be scammed by people suggesting you buy or 'invest' in anything else."
              classNames="default-text mb-5"
            />
          </Fragment>
        );
      case 9:
        return (
          <Fragment>
            <Text
              text="MyAngu does not use blockchain, which is a distributed ledger that does not have an accountable central authority. Instead MyAngu uses a secure centralised ledger and is accountable to its clients for maintaining it - professionally and securely."
              classNames="default-text mb-5"
            />
            <Text text="Why?" classNames="default-text mb-5" />
            <Text
              text="MyAngu ensures that all grain vouchers are backed 100% by gold at all times, otherwise it becomes fraudulent. Grain vouchers are created when people buy them and cancelled when they’re redeemed. It’s that simple."
              classNames="default-text mb-5"
            />
            <Text
              text="In a blockchain-based platform however the volume of crypto-currency ‘coins’ (i.e. the equivalent of MyAngu’s grain vouchers) is based on a pre-determined algorithm and the amount of ‘mining’ that takes place, that means it is totally different and therefore not suitable for MyAngu. After all, if clients redeem their grain vouchers we must be able to cancel them totally from the system."
              classNames="default-text mb-5"
            />
          </Fragment>
        );
      case 10:
        return (
          <Fragment>
            <Text
              text="Each grain voucher is 100% backed by 1 grain of gold bullion (this is not a coincidence!) held securely in Zurich, Switzerland. MyAngu uses Bullionvault.com to buy, sell and manage the storage of the gold. Bullionvault.com, a UK company that is partially owned by the World Gold Council, is a significant and highly respected player in the private gold market."
              classNames="default-text mb-5"
            />
            <Text text="Why?" classNames="default-text mb-5" />
            <Text
              text="Please note that crypto-currencies (that use blockchain) are normally not 'backed' at all, by anything. Those that are have only limited backing (e.g. 20% gold). It cannot be overstated how serious this point is. Permanent 100% gold backing is critical for the system to be honest and sustainable. Please do not be scammed by people suggesting you buy or 'invest' in anything else."
              classNames="default-text mb-5"
            />
          </Fragment>
        );
      case 11:
        return (
          <Fragment>
            <Text
              text="MyAngu does not use blockchain, which is a distributed ledger that does not have an accountable central authority. Instead MyAngu uses a secure centralised ledger and is accountable to its clients for maintaining it - professionally and securely."
              classNames="default-text mb-5"
            />
            <Text text="Why?" classNames="default-text mb-5" />
            <Text
              text="MyAngu ensures that all grain vouchers are backed 100% by gold at all times, otherwise it becomes fraudulent. Grain vouchers are created when people buy them and cancelled when they’re redeemed. It’s that simple."
              classNames="default-text mb-5"
            />
            <Text
              text="In a blockchain-based platform however the volume of crypto-currency ‘coins’ (i.e. the equivalent of MyAngu’s grain vouchers) is based on a pre-determined algorithm and the amount of ‘mining’ that takes place, that means it is totally different and therefore not suitable for MyAngu. After all, if clients redeem their grain vouchers we must be able to cancel them totally from the system."
              classNames="default-text mb-5"
            />
          </Fragment>
        );
      case 12:
        return <CreditAccounts />;
      default:
        return <p>An error occured. Contact Admin!</p>;
    }
  };
  return computeAnswer();
};

export default Answers;

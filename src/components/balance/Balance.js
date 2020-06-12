import React from 'react';

import Text from '../text';

import './balance.css';

const Balance = ({ classNames }) => (
  <div className={`border d-flex align-items-center w-100 ${classNames}`}>
    <div className="inner p-3 w-100">
      <div className="d-flex flex-column">
        <div className="d-flex header">
          <div className="icon mr-4">
            <i class="fa fa-scissors" aria-hidden="true"></i>
          </div>
          <div className="flex-grow-1 align-self-center">
            <Text classNames="tiny mb-0" text="Charles Sibande" />
          </div>
        </div>
        <div className="d-flex content">
          <div className="icon mr-4">
            <i class="fa fa-scissors" aria-hidden="true"></i>
          </div>
          <div className="flex-grow-1">
            <div className="w-100 d-flex">
              <div className="grain mr-5">
                <Text text="My Grain Balance" classNames="smaller mb-2" />
                <Text text="G 15,000.00" classNames="small font-weight-bold" />
              </div>
              <div className="usd border-left border-light">
                <Text text="My USD Balance" classNames="smaller mb-2" />
                <Text text="$ 15,000.00" classNames="small font-weight-bold" />
              </div>
            </div>
            {/* <Text
              classNames="tiny mb-0"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut molestias quam velit eveniet aspernatur adipisci autem eum enim aliquid soluta, quibusdam perferendis atque ipsam quia voluptatibus aliquam, nam, a maiores."
            /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Balance;

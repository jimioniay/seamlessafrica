import React from 'react';

import SVG from '../../../components/svg';

const Suppliers = () => (
  <div className="suppliers w-100 py-4 px-4 mb-5 mb-md-5">
    <div className="row">
      <div className="col-12 mb-3 col-md-3 align-self-center text-center">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591919379/pay_dljwle.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="col-12 mb-3 col-md-3">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591653711/Lloyds_f2wwdx.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="col-12 mb-3 col-md-3">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591655065/jini_jxid0e.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="col-12 mb-3 col-md-3">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591655245/paypal_fyvc9d.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="col-12 mb-3 mt-md-3 d-flex justify-content-center">
        <SVG name="norton" />
      </div>
    </div>
  </div>
);

export default Suppliers;

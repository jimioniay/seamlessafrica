module.exports = function(req, res) {
  var baseurl = require('../../../../../../config/app').gpxbase_url;
  var needed_params = _.pick(req.body, [
    'x_message',
    'x_timestamp',
    'x_result',
    'x_gateway_reference',
    'x_amount',
    'x_test',
    'x_currency',
    'x_reference',
    'x_transaction_type',
    'x_account_id',
  ]);
  needed_params.x_gateway_reference = Date.now() + '---' + Math.random();
  mlite.info([req.body, needed_params], 'SHOPIFY-COMPLETE-PAYLOAD');
  var hash_string_for_signature = '';
  models.getpaidxkey
    .findOne({
      where: {
        publickey: req.body.x_account_id,
      },
      raw: true,
    })
    .then(getpaidkey => {
      var param_keys = Object.keys(needed_params);
      param_keys.sort().forEach(function(k) {
        hash_string_for_signature += k + '' + needed_params[k];
      });
      const hash = crypto
        .createHmac('sha256', getpaidkey.secretkey)
        .update(hash_string_for_signature)
        .digest('hex');
      needed_params.x_signature = hash;
      request.post(req.body.x_url_callback, { form: needed_params }, function(
        e,
        r,
        b,
      ) {
        throw e;
        mlite.info([e, b], 'SHOPIFY-CALLBACK-RESPONSE');
      });
      var red_url = req.body.x_url_complete + '?' + qs.stringify(needed_params);
      res.json({
        red_to: red_url,
        params: needed_params,
        hashstr: hash_string_for_signature,
      });
    })
    .catch(e => {
      mlite.error([e], 'SHOPIFY-CALLBACK-ERROR');
      let respData = e;
      if (respData !== undefined && respData !== null) {
        if (
          Object.keys(respData).length === 0 &&
          JSON.stringify(respData) === JSON.stringify({})
        ) {
          respData = respData.toString();
        }
      }
      res.json(respData);
    });
};

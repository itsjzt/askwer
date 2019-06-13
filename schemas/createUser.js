let yup = require('yup');

module.exports = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});
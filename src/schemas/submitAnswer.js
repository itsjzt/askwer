let yup = require('yup');

module.exports = yup.object().shape({
  text: yup.string().required(),
  question: yup.number().required()
});
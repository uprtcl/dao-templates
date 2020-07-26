const deployTemplate = require('./deploy-template')

const TEMPLATE_NAME = 'membership-template-raiser'
const CONTRACT_NAME = 'MembershipTemplateRaiser'

module.exports = (callback) => {
  console.log('[DEPLOYING]', { TEMPLATE_NAME, CONTRACT_NAME })
  deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
    .then((template) => {
      console.log(template.address)
      callback()
    })
    .catch(callback)
}

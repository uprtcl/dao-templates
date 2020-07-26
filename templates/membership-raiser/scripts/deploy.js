const deployTemplate = require('@aragon/templates-shared/scripts/deploy-template')

const TEMPLATE_NAME = 'membership-template-raiser'
const CONTRACT_NAME = 'MembershipTemplateRaiser'

module.exports = (callback) => {
  deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
    .then((template) => {
      console.log(template.address)
      callback()
    })
    .catch(callback)
}

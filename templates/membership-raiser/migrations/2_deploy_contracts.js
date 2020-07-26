const MiniMeTokenRaiserFactory = artifacts.require('MiniMeTokenRaiserFactory')

module.exports = async (deployer, network, accounts) => {
  deployer.deploy(MiniMeTokenRaiserFactory, { from: accounts[0] })
}

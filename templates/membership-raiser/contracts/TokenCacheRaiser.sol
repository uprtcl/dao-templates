pragma solidity 0.4.24;

import "./MiniMeTokenRaiser.sol";

contract TokenCacheRaiser {
    string constant private ERROR_MISSING_TOKEN_CACHE = "TEMPLATE_MISSING_TOKEN_CACHE";

    mapping (address => address) internal tokenCache;

    function _cacheToken(MiniMeTokenRaiser _token, address _owner) internal {
        tokenCache[_owner] = _token;
    }

    function _popTokenCache(address _owner) internal returns (MiniMeTokenRaiser) {
        require(tokenCache[_owner] != address(0), ERROR_MISSING_TOKEN_CACHE);

        MiniMeTokenRaiser token = MiniMeTokenRaiser(tokenCache[_owner]);
        delete tokenCache[_owner];
        return token;
    }
}

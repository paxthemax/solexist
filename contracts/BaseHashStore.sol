pragma solidity ^0.4.24;

import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract BaseHashStore is Ownable {
    string public hashString;

    event HashStringSet(string newHashString);

    function setHashString(string _hashString) 
        external
        onlyOwner
    {
        hashString = _hashString;
        emit HashStringSet(_hashString);
    }
}
pragma solidity ^0.4.24;

import "./WithDescription.sol";

import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract WithEditableDescription is Ownable, WithDescription {
    
    constructor(string _description)
        public
        WithDescription(_description)
    {

    }

    function changeDescription(string _description)
        external
        onlyOwner
    {
        description = _description;
    }
}
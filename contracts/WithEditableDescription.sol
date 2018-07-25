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
        emitDescritionChanged(_description);
    }

    // Ignore internal and argument warning.
    function emitDescritionChanged(string _description)
        internal
    {
        // Contracts are free to override to emitEvent
    }
}
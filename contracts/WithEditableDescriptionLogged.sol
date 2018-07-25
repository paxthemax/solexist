pragma solidity ^0.4.24;

import "./WithEditableDescription.sol";

contract WithEditableDescriptionLogged is
    WithEditableDescription
{
    event DescriptionChanged(string newDescription);

    constructor(string _description)
        public
        WithEditableDescription(_description)
    {

    }

    // @ovveride
    function emitDescritionChanged(string _description)
        internal
    {
        emit DescriptionChanged(_description);
    }
}
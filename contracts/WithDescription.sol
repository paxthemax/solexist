pragma solidity ^0.4.24;

contract WithDescription {
    string public description;

    constructor(string _description)
        public
    {
        description = _description;
    }
}
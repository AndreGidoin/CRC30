pragma solidity ^0.5.0;

contract Ownable {
    address payable owner;

    constructor () public {
        owner = msg.sender;
    }

    modifier Owned {
        require (msg.sender == owner );
        _;
    }
}

contract Mortal is Ownable {
    function kill () public Owned {
        selfdestruct(owner);
    }
}


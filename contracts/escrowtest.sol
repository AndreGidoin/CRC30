pragma solidity ^0.5.0;

import "./Ownable.sol";

contract escrowtest is Mortal {
    
    //
    // Escrow info
    // 
    address public WalletAddress = address(this);
    uint public theBalance;
    address Admin;
    
    //
    // Creator info
    //         
    constructor () public payable {
        Admin = msg.sender;
    } 
    
    function () payable external {
    }
    
    //
    // Contract balance updates
    // 
    function checkContractBalance() public Owned returns(uint) {
        updateBalance();
        return address(this).balance;
    }
    
    function updateBalance() private {
        theBalance = address(this).balance;
    }    
    
    //
    // transfer funds
    // 
    function transferFunds(address payable _WalletAddress) public Owned returns(string memory) {
        _WalletAddress.transfer(theBalance);
        return "funds transferred";
    }
    
    
}
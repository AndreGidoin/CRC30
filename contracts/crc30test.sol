pragma solidity ^0.5.0;

import "./Ownable.sol";

contract CRC30Test is Mortal {
    
    //
    // Image - convention info
    //    
    string public ipfsImageHash = "Qmd2Sz24byVJy9xXkvmzDPvMMvQ36EoimFJuynBuwMLL61";
    string public conventionName = "Right to beauty";
    uint public owners;
    address public Admin;
     
     
    //
    // Owner history DBs
    //
    string public currentOwner;
    address public currentAddress;
    
    struct addressDB {
        string ownerName;
        address ownerAddress;
        uint ownerPayed;
        uint ownerNumber;
    }
    mapping(address => addressDB) ownerDBaddr;
    address[] public ownerArrayAddress;
    
    /* NOT SURE WE NEED THIS
    struct ownerDBorder {
        string ownerName;
        address ownerAddress;
        uint ownerPayed;
        uint ownerNumber;
    }
    mapping(uint => ownerDBorder) ownerDBordernumber;
    uint[] public ownerArrayOrder;
    */
    
    //
    // Creator info
    //         
    constructor () public payable {
        Admin = msg.sender;
        owners = 0;
    } 
    
    //
    // Escrow info
    // 
    address payable public EscrowContract = 0x90cD7Bc0798e897140069bc5B2343dbde41FB278;
    address payable WINNER;
    uint public currentWorth;
    uint public allTimeWorth;
    uint public donationPool;
    
    //
    // Listen to events
    //
    event newOwner(string currentOwner, address currentAddress, uint currentWorth, uint allTimeWorth);
    
    //
    // Buy - donate to own image
    // 
    function buyCRC(string memory _name) public payable {
        require(msg.value > currentWorth);
        allTimeWorth = allTimeWorth + msg.value;
        donationPool = donationPool + msg.value;
        currentWorth = msg.value;
        ownerDBaddr[msg.sender] = addressDB(_name, msg.sender, msg.value, owners +1);
        ownerArrayAddress.push(msg.sender);
        
        // ownerDBordernumber[owners + 1] = ownerDBorder(_name, msg.sender, msg.value, owners +1);
        // ownerArrayOrder.push(owners +1);
        
        currentOwner = _name;
        currentAddress = msg.sender;
        owners ++;
        emit newOwner(currentOwner, currentAddress, currentWorth, allTimeWorth);
    }
        
    //
    // Transfer money to escrow (only admin)
    //     
    function checkContractBalance() public Owned view returns(uint) {
        return address(this).balance;
    }
    
    // This function needs to be replaced by the one below when fixed.
    function transferSum(address payable _address2, uint _amount) public Owned payable returns(string memory) {
        _address2.transfer(_amount);
        return "funds transferred to escrow";
    }
    
    // This function is to be updated to use for both escrow movement and in escrow contract to withdraw funds.
    function withdraw(address transferTo) Owned external {
        // Prevent https://consensys.github.io/smart-contract-best-practices/known_attacks/#transaction-ordering-dependence-tod-front-running
        require(transferTo == owner);

        uint256 currentBalance = address(this).balance;
        owner.transfer(currentBalance);
    }
}





//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import {MarketAPI} from "./v0.8/MarketAPI.sol";

contract XYZ is Ownable{

    //Struct defining the specifications of each user
    struct User{
        address userAddress;
        bool isMember;
    }

    //Fields required to create a proposal
    struct Proposal{
        uint proposalId;
        string proposalName;
        string description;
        string thumbnailUrl;
        uint time;
        address createdBy;
        uint funds;
        uint votes;
        bool isUploaded;
        string videoUrl;
        bool isApproved;
        string cid;
        address[] voters;
    }

    MarketAPI public marketapiInstance;

    //Array containing all of the proposals
    Proposal[] public proposals;

    // Total proposals created
    uint public totalProposals;

    //mapping defining if a user is a DAO member or not
    mapping(address => bool) isMember;

    //Price to create or Vote on a proposal
    //Only DAO member can create or vote on proposals 
    uint public proposalOrVotePrice = 20 ether;

    constructor(address _marketAPI){
        marketapiInstance = MarketAPI(_marketAPI);
    }

    modifier isAMember(){
    require(isMember[msg.sender] == true, "You are not a member");

    _;
    }

    function isUserAMember() external view returns(bool){
        return isMember[msg.sender];
    }

    function becomeMember() external payable{
        require(isMember[msg.sender] == false, "You are already a member");
        require(msg.value >= 100 ether, "Amount is not enough");

        isMember[msg.sender] = true;
    }
    
    //Allow the members of DAO to create a proposal
    function createProposal(string memory _proposalName, string memory _description, string memory _thumbnail, string memory _videoUrl) external payable isAMember{
        require(msg.value >= proposalOrVotePrice, "Sent amount is lesser than required");
        
        totalProposals++;
        address[] memory newVoters;
        newVoters[0] = msg.sender;

        Proposal memory newProposal = Proposal({proposalId: totalProposals, proposalName: _proposalName, description: _description, thumbnailUrl: _thumbnail, time: 3 days, createdBy: msg.sender, funds: msg.value, votes: 1, isUploaded: false, videoUrl: _videoUrl, isApproved: false, cid: '', voters: newVoters});

        proposals.push(newProposal);
    }

    //Returns all the proposals that are still active
    function getProposals() external view returns(Proposal[] memory){

        Proposal[] memory activeProposals = new Proposal[](proposals.length);
        uint j =0;

        for(uint i =0; i<proposals.length; i++){
            if(proposals[i].time <= block.timestamp){
                activeProposals[j] = proposals[i];
                j++;
            }
        }

        return activeProposals;
    }

    //Get all of the proposals 
    function getAllProposals() external view returns(Proposal[] memory){
        return proposals;
    }

    function Vote(uint _id) external payable isAMember{
        require(msg.value >= proposalOrVotePrice, "Sent amount is lesser than required");
        require(_id <= proposals.length, "No such proposal exist");
        require(proposals[_id-1].time >= block.timestamp, "This proposal is expired");

        proposals[_id - 1].funds += msg.value;
        proposals[_id - 1].votes += 1;
        proposals[_id - 1].voters.push(msg.sender);
    }

    // This function is not yet included in the sector by filecoin
    /*
    function executeProposals() external payable onlyOwner{
        marketapiInstance.publish_storage_deals(raw_auth_params, callee);
    }
    */

   //Alternative of publish storage as of now
    function executeProposals() external onlyOwner{
        
        for(uint i =0; i<proposals.length; i++){
            if(proposals[i].time <= block.timestamp + 1 days && proposals[i].time >= block.timestamp){
                if(proposals[i].isApproved == false){
                    proposals[i].isApproved = true;
                }
            }
        }
    }


    function setUpload(uint _id, string memory _cid) external {
        require(msg.sender == proposals[_id - 1].createdBy, "You did not create this proposal");
        proposals[_id - 1].isApproved = true;
        proposals[_id - 1].cid = _cid;
    }

    function getBalance() external onlyOwner view returns(uint256){
        return address(this).balance;
    }

    receive() external payable{}
    fallback() external payable{}
}
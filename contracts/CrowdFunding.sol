// SPDX-License-Identifier: MIT

pragma solidity ^ 0.8.9;

contract CrowdFunding {
struct  Campaign {
    address owner;
    string title;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 amountCollected;
    address [] donators;
    uint256[] donations;
    
}



mapping (uint256 => Campaign) public campaigns;
uint256 public numberOfCampaigns = 0;

//Events
event CampaignEvent(address indexed _from, uint256 _value);
event DonateEvent(address indexed _from, uint256 _value);



    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline) public returns (uint256) {
        Campaign storage campaign =   campaigns[numberOfCampaigns];   
        require(campaign.deadline < block.timestamp, "Deadline should be a date in the future");  
        // Campaign campaign = Campaign(_owner, _title, _description, _target,_deadline, amountCollected, [], []);
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.amountCollected = 0;
        campaign.deadline= _deadline;

        numberOfCampaigns++;
        emit CampaignEvent(_owner, _target);
        return numberOfCampaigns - 1;

    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent){
             campaign.amountCollected = campaign.amountCollected + amount;
             emit DonateEvent(msg.sender, amount);

        }
    }

    function getDonators(uint256 _id) view public returns (address []  memory, uint256[] memory){
        return (campaigns[_id].donators, campaigns[_id].donations);

    }

    function getCampaigns() public view returns (Campaign[] memory){
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);
        for (uint i=0; i < numberOfCampaigns; i++){
            Campaign storage item = campaigns[i];
            allCampaigns[i]= item;

        }
        return allCampaigns;


    }
}
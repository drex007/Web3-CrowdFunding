import React, { useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';


import { CrowdFundingABI, CrowdFundingAddress } from './constants';
export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");
    const [createCampaignLoadingState, setCreateCampaignLoadingState] = useState(false)
    
    
    const fetchContract = (signerOrProvider) => new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

    const createCampaign = async (campaign) => {
        setCreateCampaignLoadingState(true)
        const { title, description, amount, deadline } = campaign;

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        try {
            const transaction = await contract.createCampaign(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount, 18),
                new Date(deadline).getTime()
            );

            await transaction.wait();
            setCreateCampaignLoadingState(false)

            return transaction;

        } catch (error) {
            setCreateCampaignLoadingState(false)


        }
    }

    const getCampaigns = async () => {
        console.log("Called ");
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();


        const parsedCampaigns = campaigns.map((x, i) => ({
            owner: x.owner,
            title: x.title,
            description: x.description,
            target: ethers.utils.formatEther(x.target.toString()),
            deadline: x.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(x.amountCollected.toString()),
            pId: i
        }));

        return parsedCampaigns;
    }

    const getUserCampaign = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = fetchContract(provider);
        const allCampaigns = await contract.getCampaigns();
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const currentUser = accounts[0];
        const filteredCampaigns = allCampaigns.filter((x) => x.owner === "0x213b8b96F839f233D6eBBeaB59A72FB6c61C548A");

        const userData = filteredCampaigns.map((x, i) => ({
            owner: x.owner,
            title: x.title,
            description: x.description,
            target: ethers.utils.formatEther(x.target.toString()),
            deadline: x.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(x.amountCollected.toString()),
            pId: i,
        }));

        return userData;

    }

    const donate = async (pId, amount) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);


        const campaignData = await contract.donateToCampaign(pId, {
            value: ethers.utils.parseEther(amount),
        });
        await campaignData.wait();

        // location.reload();

        return campaignData;
    }
    const getDonations = async (pId) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = fetchContract(provider);

        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;
        const parsedDonations = [];
        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({ donator: donations[0][i], donation: ethers.utils.formatEther(donations[1][i].toString()) });
        }

        return parsedDonations

    }

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return setOpenError(true), setError("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No Account Found");
            }

        } catch (error) {
            console.log("Something went wrong when connecting wallet");

        }

    }


    useEffect(() => {
        checkIfWalletConnected();

    }, [])

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install MetaMask");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log('accounts', accounts[0]);
            setCurrentAccount(accounts[0]);


        } catch (error) {
            console.log("error while connecting wallet");

        }
    };

    return (
        <>
            <CrowdFundingContext.Provider
                value={{
                    titleData,
                    currentAccount,
                    createCampaign,
                    getCampaigns,
                    getUserCampaign,
                    donate,
                    getDonations,
                    connectWallet,
                    setCreateCampaignLoadingState,
                    createCampaignLoadingState,
                    fetchContract
                }} >
                {children}
            </CrowdFundingContext.Provider>
        </>
    );


}



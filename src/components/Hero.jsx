import React, { useState, useContext } from 'react'
import TextInput from './widgets/TextInput'
import { ToastContainer, toast } from 'react-toastify';
import ButtonLoader from './button/buttonLoader';
import { ethers } from "ethers";
// import Web3Modal from "web3modal";
import { CrowdFundingContext } from '../../Context/CrowdFunding';


const Hero = ({ titleData, createCampaign }) => {
    const { createCampaignLoadingState, setCreateCampaignLoadingState, fetchContract } = useContext(CrowdFundingContext)

    const [formData, setformData] = useState({
        title: "",
        description: "",
        deadline: "",
        amount: ""
    })

    const createNewCampaign = async (e) => {
        e.preventDefault();
        // const web3Modal = new Web3Modal();
        // const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        try {
            const response = await createCampaign(formData);
            contract.on("CampaignEvent", (_from, _value) => {
                toast.success("Campaign created successfully");
                setCreateCampaignLoadingState(false)

            })
            window.location.reload()



        } catch (error) {
            toast.warning("Campaign was not created");


        }

    }
    return (
        <div className='overflow-x-hidden bg-gradient-to-r from-black to-pink-700 grid lg:grid-col-2 md:grid-col-1  w-full h-1/2  py-2 lg:flex justify-between  pt-20 pb-20 rounded-b-l-[20px]'>
            <div className='mr-2  mt-20 pl-2 '>
                <p className='text-[40px] font-spacegrotesk font-bold text-white'>Web3-CrowdFunding</p>
                <p className='text-[20px] font-spacegrotesk font-bold text-white my-2'>Create campaign and raise fund in seconds</p>

                <p className='text-white font-poppins text-[14px] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                </p>
            </div>
            <div className='lg:mx-4 justify-center  md:w-full mt-4 px-2 '>
                <form action="" className='flex-col bg-gradient-to-l rounded-lg shadow-lg px-4 py-4'>
                    <p className='font-bold font-spacegrotesk my-2 flex justify-center text-white' >Create a campaign</p>
                    <p className='text-[12px] text-white'>Title</p>
                    <TextInput placeholder={"Enter project title"} name={"title"} formData={formData} setformData={setformData} />
                    <p className='text-[12px]  mt-2 text-white'>Description</p>
                    <TextInput placeholder={"Enter project description "} name={"description"} formData={formData} setformData={setformData} />
                    <p className='text-[12px] mt-2 text-white'>Amount</p>
                    <TextInput placeholder={"Enter project amount"} name={"amount"} formData={formData} setformData={setformData} />
                    <p className='text-[12px] mt-2 text-white'>Deadline</p>
                    <TextInput placeholder={"Enter project deadline"} name={"deadline"} formData={formData} setformData={setformData} type={"date"} />

                    {!createCampaignLoadingState ? <button
                        type="submit"
                        onClick={(e) => createNewCampaign(e)}


                        className='w-full bg-gradient-to-l border-2 rounded-md border-white border-solid  px-2 py-3 text-[13px] mt-2  text-white font-spacegrotesk shadow-2xl focus:shadow-outline'>
                        Create Campaign

                    </button> : <ButtonLoader />}

                </form>
            </div>
        </div>
    )
}

export default Hero
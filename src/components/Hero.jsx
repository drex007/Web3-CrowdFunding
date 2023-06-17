import React, { useState, useContext } from 'react'
import TextInput from './widgets/TextInput'
import { ToastContainer, toast } from 'react-toastify';

const Hero = ({ titleData, createCampaign }) => {

    const [formData, setformData] = useState({
        title: "",
        description: "",
        deadline: "",
        amount: ""
    })

    const createNewCampaign = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await createCampaign(formData);
            console.log(response.data);
            if (response.data != undefined) {
                await toast.success("Campaign created successfully");

            }
        } catch (error) {
            toast.warning("Campaign was not created");
            console.log(error, ":Campaign error");

        }

    }
    return (
        <div className='grid lg:grid-col-2 md:grid-col-1 w-full h-1/2  px-4 py-2 lg:flex justify-between bg-black pt-20 pb-20 '>
            <div className='mr-2  mt-20'>
                <p className='text-[50px] font-spacegrotesk font-bold text-white'>Web3-CrowdFunding</p>
                <p className='text-[20px] font-spacegrotesk font-bold text-white my-2'>Create campaign and raise fund in seconds</p>

                <p className='text-white font-poppins text-[14px] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                </p>
            </div>
            <div className='lg:mx-4 justify-center  md:w-full mt-4'>
                <form action="" className='flex-col bg-white rounded-lg shadow-lg px-4 py-4'>
                    <p className='font-bold font-spacegrotesk my-2 flex justify-center' >Create a campaign</p>
                    <p className='text-[12px]'>Title</p>
                    <TextInput placeholder={"Enter project title"} name={"title"} formData={formData} setformData={setformData} />
                    <p className='text-[12px]  mt-2 '>Description</p>
                    <TextInput placeholder={"Enter project description "} name={"description"} formData={formData} setformData={setformData} />
                    <p className='text-[12px] mt-2'>Amount</p>
                    <TextInput placeholder={"Enter project amount"} name={"amount"} formData={formData} setformData={setformData} />
                    <p className='text-[12px] mt-2'>Deadline</p>
                    <TextInput placeholder={"Enter project deadline"} name={"deadline"} formData={formData} setformData={setformData} type={"date"} />

                    <button
                        type="submit"
                        onClick={(e) => createNewCampaign(e)}


                        className='w-full bg-indigo-500 rounded-sm px-2 py-3 text-[13px] mt-2  text-white font-spacegrotesk shadow-2xl focus:shadow-outline'>Create Campaign</button>

                </form>
            </div>
        </div>
    )
}

export default Hero
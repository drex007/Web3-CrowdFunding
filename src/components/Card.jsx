import React, { useState, useEffect, useContext } from 'react'
import { CrowdFundingContext } from '../../Context/CrowdFunding';
import { toast } from 'react-toastify'
const Card = ({ setOpenModel, setDonate, title }) => {


    const {
        titleData,
        getCampaigns,
        createCampaign,
        donate,
        getUserCampaign,
        getDonations
    } = useContext(CrowdFundingContext);

    const daysLeft = (deadline) => {
        const difference = new Date(deadline).getTime() - Date.now();
        const remainDays = difference / (1000 * 3600 * 24)
        return remainDays.toFixed(0)
    }

    const [allcampaigns, setAllCampaigns] = useState()
    const [usercampaign, setUsercampaign] = useState()

    useEffect(() => {
        const getCampaignData = getCampaigns();
        const userCampaignData = getUserCampaign();
        return async () => {
            const allData = await getCampaignData;
            const userData = userCampaignData;
            setAllCampaigns(allData);
            setUsercampaign(userData);
        }


    }, [])
    return (
        <div className='bg-gradient-to-r from-black to-pink-700 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg: max-w-screen-sxl md:px-24 lg:px-8 lg:py-10'>
            <p className='py-4 text-2xl font-bold leading-5 text-white'>
                {title}
            </p>
            <div className='grid gap-2 lg:grid-cols-5 sm:max-w-sm sm:mx-auto lg:max-w-full'>

                {allcampaigns?.map((campaign, i) => (
                    <div
                        className='cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded '
                        key={i}
                        onClick={() => {
                            if (campaign.target == campaign.amountCollected) {
                                toast.warning("You can't donate to this campaign ")
                            } else {

                                setDonate(campaign)
                                setOpenModel(true)
                            }
                        }}
                    >
                        <img src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2019/09/iStock-1150384596-2.jpg" alt="" className='w-full' />
                        <div className='py-5 pl-2'>
                            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
                                Days Left: {daysLeft(campaign.deadline)}
                            </p>
                            <a href="/" aria-label='Article' className='inline-block mb-1 text-black transition-colors duration-200 hover:text-purple-500'>
                                <p className='mb-2 text-black font-bold'>{campaign.title}</p>
                            </a>
                            <p className='text-[12px] font-bold'>Description</p>
                            <p className="mb-4 text-gray-700 text-[12px] px-2 ">{campaign.description}</p>

                            <div className='flex space-x-4'>
                                <p className='font-semibold text-[10px]'>Target: {campaign.target} ETH</p>
                                <p className='font-semibold text-[10px]'>Raised: {campaign.amountCollected} ETH</p>

                            </div>


                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Card
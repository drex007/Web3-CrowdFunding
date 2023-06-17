import React from 'react'

const Card = ({ allcampaigns, setOpenModel, setDonate, title, setDonateCampaign }) => {
    console.log(allcampaigns);
    const daysLeft = (deadline) => {
        const difference = new Date(deadline).getTime - Date.now();
        const remainDays = difference / (1000 * 3600 * 24)
        return remainDays.toFixed(0)
    }
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lgmax-w-screen-sxl md:px-24 lg:px-8 lg:py-20'>
            <p className='py-16 text-2xl font-bold leading-5'>
                {title}
            </p>
            <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>

                {allcampaigns?.map((campaign, i) => (
                    <div
                        className='cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded '
                        key={i + 1}
                        onClick={() => {
                            setDonate(campaign)
                            setOpenModel(true)
                        }}
                    >
                        <img src="https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2019/09/iStock-1150384596-2.jpg" alt="" className='w-[100px] h-[100px]' />
                        <div className='py-5 pl-2'>
                            <p className='mb-2 text-xs font-semibold text-gray-600 uppercase'>
                                Days Left: {daysLeft(campaign.deadline)}
                            </p>
                            <a href="/" aria-label='Article' className='inline-block mb-3 text-black transition-colors duration-200 hover:text-purple-500'>
                                <p className='mb-4 text-gray-700'>{campaign.title}</p>
                            </a>
                            <p className="mb-4 text-gray-700">{campaign.description}</p>

                            <div className='flex space-x-4'>
                                <p className='font-semibold'>Target: {campaign.target} ETH</p>
                                <p className='font-semibold'>Raised: {campaign.amountCollected} ETH</p>

                            </div>


                        </div>

                    </div>
 
                ))}
            </div>
        </div>
    )
}

export default Card
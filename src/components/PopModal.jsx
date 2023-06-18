import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'

const PopModal = ({ setOpenModel, donate, donateFunction, getDonations }) => {
    const [amount, setamount] = useState("")
    const [allDonation, setAllDonation] = useState()
    const createDonation = async () => {
        try {
            const data = await donateFunction(donate.pId, amount)
            if (data.data != undefined) {
                toast.success("Donation was successful")
                setOpenModel(false)
                window.location.reload()
            }


        } catch (error) {

        }

    }
    useEffect(() => {
        const donationListData = getDonations(donate.pId)
        return async () => {
            const donationData = await donationListData;
            setAllDonation(donationData)

        }

    }, [])

    return (
        <>
            <div
                className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            >
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                            <h3>{donate.title}</h3>
                            <button
                                onClick={() => setOpenModel(false)}
                                className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl font-semibold '>
                                <span className='text-white  opacity-4 h-8 w-10 rounded-lg text-2xl block outline-none focus:outline-none bg-red-600'> x </span>
                            </button>
                        </div>
                        <div className='relative px-10 py-2 flex-auto'>
                            <p className='mt-1 text-slate-600 text-[10px] leading-relaxed'>{donate.description}</p>
                            <input type="text"
                                onChange={(e) => setamount(e.target.value)}
                                placeholder='amount'
                                required
                                name='amount'
                                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 shadow-sm appearance-none focus:border-deep-purple-accent-400'
                            />
                            {allDonation?.map((e, i) => ((
                                <p className='my-2 text-[12px] text-slate leading-relaxed' key={i}>
                                    {i + 1}: {e.donator} donated <span className='font-bold'>{e.donation} ETH</span>


                                </p>
                            )))}

                        </div>

                        <div className='flex justify-end p-6 border-t border-solid border-slate-200 rounded-b space-x-3'>
                            <button type="button" className='text-[12px] px-4 py-1 bg-orange-400 text-white ' onClick={() => setOpenModel(false)}>Close</button>
                            <button type="button" className='text-[12px] px-4 py-1 bg-indigo-400 text-white' onClick={() => createDonation()}>Donate </button>

                        </div>
                    </div>

                </div>

            </div>
            <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
        </>
    )
}

export default PopModal
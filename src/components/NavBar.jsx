import React, { useState, useContext } from 'react'
import { CrowdFundingContext } from '../../Context/CrowdFunding'

const NavBar = () => {
    const navBarLinks = ["Home", "About", "Donations"]
    const { currentAccount, connectWallet } = useContext(CrowdFundingContext)
    const [showMenuIcon, setshowMenuIcon] = useState(false)
    return (
        <div className='w-full'>
            <div className='relative bg-black h-[60px] w-full flex items-center px-4 justify-between'>
                <div>
                    <p className='text-white text-2xl font-bold  font-spacegrotesk hover:cursor-pointer'>Aoura</p>
                </div>
                {!showMenuIcon && <div className='hidden md:flex mr-8'>
                    <ul className='flex'>
                        {navBarLinks.map((e, i) => (
                            <li className='text-white mx-2 font-spacegrotesk font-semibold hover:cursor-pointer' key={i}>{e}</li>
                        ))}

                    </ul>
                    {currentAccount == "" ? <button
                        onClick={() => {

                            connectWallet()
                        }}
                        className='bg-indigo-300 rounded-sm px-2 py-1 text-[10px] ' type="button">ConnectWallet</button> : <p className=' ml-2 px-2 py-1 w-[100px] text-[10px] bg-orange-500 rounded-sm text-white hover:cursor-pointer'>
                        Disconnect Wallet
                    </p>

                    }
                </div>}
                {!showMenuIcon && <div className='md:hidden mr-4 text-white text-[12px] bg-indigo-500 px-2 py-1 rounded-sm hover:cursor-pointer'>
                    <p onClick={() => { setshowMenuIcon(!showMenuIcon) }}>Menu</p>

                </div>}
                {showMenuIcon && <div className='md:hddeen mr-4 text-white text-[12px] bg-orange-400 px-6 py-1 rounded-sm hover:cursor-pointer'>
                    <p onClick={() => { setshowMenuIcon(false) }}>x</p>
                </div>}
            </div>
            {showMenuIcon && <div className='md:flex-col  bg-black'>
                <ul className='flex flex-col'>
                    {navBarLinks.map((e, i) => (
                        <li className='text-white mx-2 font-spacegrotesk font-semibold hover:cursor-pointer' key={i}>{e}</li>
                    ))}

                </ul>
                {currentAccount == "" ? <button
                    onClick={() => {

                        connectWallet()
                    }}
                    className='bg-indigo-300 rounded-sm px-2 py-1 text-[10px]  ml-2' type="button">ConnectWallet</button> : <p className='ml-2 px-2 py-1 w-[100px] text-[10px] bg-orange-500 rounded-sm text-white hover:cursor-pointer'>
                    Disconnect Wallet
                </p>

                }
            </div>}

        </div>
    )
}

export default NavBar
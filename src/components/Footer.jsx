import React from 'react'

const Footer = () => {
    return (
        <footer
            className='grid-1 grid gap-8 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 bg-black px-4 py-8'
        >
            <div className=''>
                <p className='text-white font-poppins font-semibold my-2'>Products</p>
                <p className='text-white my-2 text-[13px]'>Markets</p>
                <p className='text-white my-2 text-[13px]'>ERC-20</p>
                <p className='text-white my-2 text-[13px]'>ERC-21</p>
                <p className='text-white my-2 text-[13px]'>NFT marketplace</p>

            </div>
            <div className=''>
                <p className='text-white font-poppins font-semibold my-2 '>Support</p>
                <p className='text-white my-2 text-[13px]'>Apollok@gmail.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@twitter.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@instagram.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@facebook.com</p>

            </div>
            <div className=''>
                <p className='text-white font-poppins font-semibold my-2'>Useful Links</p>
                <p className='text-white my-2 text-[13px]'>Home</p>
                <p className='text-white my-2 text-[13px]'>About</p>
                <p className='text-white my-2 text-[13px]'>Donations</p>
                <p className='text-white my-2 text-[13px]'>Company Bio</p>

            </div>
            <div className=''>
                <p className='text-white font-poppins font-semibold my-2'>Contact</p>
                <p className='text-white my-2 text-[13px]'>Apollok@gmail.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@twitter.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@instagram.com</p>
                <p className='text-white my-2 text-[13px]'>Apollok@facebook.com</p>

            </div>


        </footer>

    )
}

export default Footer
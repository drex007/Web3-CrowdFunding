import React from 'react'

const TextInput = ({ placeholder, name, formData, setformData, type }) => {

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name] : e.target.value })
    }
    return (
        <input type={type? type : "text"} className=' w-full rounded-md bg-white text-[12px] px-2 py-2  mt-2 border-rounded h-12 transition-duration-200 appearance-none border border-gray-200' placeholder={placeholder} name={name}

            onChange={(e) => handleChange(e, e.target.name)}

        />
    )
}

export default TextInput
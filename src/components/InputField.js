import React from 'react'

function InputField({type,isWidthFull, placeholder, id,required, value, onChange,errorMsg, label}) {
  return (
 <div className={isWidthFull && "w-full"}>
    <label htmlFor={label} className="text-gray-600 mt-3 mb-2 block">
                  {label }{required && <span className="text-red-500">*</span>} 
                </label>
                <input
                  id={id}
                  type={type}
                  value={value}
                  onChange={onChange}
                  className={isWidthFull ? "input-box" : "w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"}
                  placeholder={placeholder}
                />
                 {errorMsg !== undefined ? (
        <div>
          <p className='text-red-500'>{errorMsg}</p>
        </div>
      ) : null}
              </div>
  )
}

export default InputField
import React from 'react'

function TextArea({type,value,required, onChange,errorMsg, label}) {
  return (
    <div>
    <label htmlFor="" className="text-gray-600 mt-3 mb-2 block">
      {label}{ required && <span className="text-red-500">*</span>}
    </label>
    <textarea type={type} value={value} onChange={onChange} className="input-box" />
 
    {errorMsg !== undefined ? (
        <div>
          <p className='text-red-500'>{errorMsg}</p>
        </div>
      ) : null}
  </div>
  )
}

export default TextArea
//Complete the custom Input component based on the props that it expects to receive

import "./Input.css"

export const Input = ({type, size, variant, value, handleChange}) => {
  return <input value={value} onChange={(e)=>handleChange(e)} type={type || "text"} className={`input ${variant || "outline"} ${size || "md"} `}/>;
};

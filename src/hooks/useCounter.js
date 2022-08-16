/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/

import { useState } from "react";


export const useCounter = ({initialValue,minValue,maxValue}) => {
  const [countValue, setountValue]= useState(initialValue)
  const incCount = (payload) => {
   if (countValue<maxValue)
   {
    if (!payload)
    {
      setountValue((prev)=>prev+1)
    }
    else{
        
      setountValue((prev)=>prev+payload)
    }
   }
  };
  // console.log(countValue)
  const decCount = (payload) => {
    if (countValue>=minValue)
   {
    if (!payload)
    {
      setountValue((prev)=>prev-1)
    }
    else{
        
      setountValue((prev)=>prev-payload)
    }
   }
  };
  return {
    countValue,
    incCount,
    decCount,
  };
};

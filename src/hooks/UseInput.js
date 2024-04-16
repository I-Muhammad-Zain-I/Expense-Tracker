import React, { useState } from 'react'

const useInput = (validityFunc, initialValue) => {
  const [value, setEnteredValue] = useState("");
  const [istouched, setIsTouched] = useState(false);

  console.log("touched", istouched)

  const onValueChangeHandler = (enteredValue) => {
    if(istouched == false) {
      setIsTouched(true);
    }
    console.log("s", enteredValue)
    setEnteredValue(enteredValue); 
  }

  console.log('istouched', istouched)

  const isValid =  validityFunc(value);

  const hasError = !isValid && istouched;
  
  
  return {
    value,
    isValid,
    hasError,
    onValueChangeHandler
  }
}

export default useInput
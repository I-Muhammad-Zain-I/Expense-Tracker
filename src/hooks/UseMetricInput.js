import React, { useState } from 'react'

const useMetricInput = (validityFunc, initialValue) => {
  const [value, setEnteredValue] = useState("");
  const [istouched, setIsTouched] = useState(false);

  console.log("touched", istouched)

 /**
  * 000.000001
  * 0001111.1221
  * 1.000000000
  *  
  */


  const amountValidityFunction = (amount) => {
    console.log("pareseInt", !isNaN(parseFloat(amount)))
    return !isNaN(parseInt(amount));
  }

  const onValueChangeHandler = (enteredValue) => {
    if(istouched == false) {
      setIsTouched(true);
    }
    

  

   

      console.log("s", enteredValue)
      setEnteredValue(enteredValue); 
    
  }
  const onBlurHandler = () => {
    console.log("Amount Blurred")

    const numVal = Number(value);
    if(numVal < 1) {
      if(value.length < 6) {
        setEnteredValue(Math.round(numVal).toString());
      } else {
        setEnteredValue(Math.round(numVal).toString().slice(0, 4));
      }
    }
    if(numVal <= 999) {
      
    }
    if(numVal < 1_000_000 && numVal > 999 && amountValidityFunction(value)) {
      const metricVal = Math.ceil(numVal / 1000);
      setEnteredValue(metricVal + "K");
    }
  }

  console.log('istouched', istouched)

  const isValid =  amountValidityFunction(value);

  const hasError = !isValid && istouched;
  
  
  return {
    value,
    isValid,
    hasError,
    onValueChangeHandler,
    setIsTouched,
    onBlurHandler
  }
}

export default useMetricInput
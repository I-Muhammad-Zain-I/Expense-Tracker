import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'
import useInput from '../hooks/UseInput'
import SimpleInput from '../components/addExpenseInputs/SimpleInput'
import DropdownInput from '../components/UI/DropdownInput'

const nameValidityFunction = (name) => {
  console.log("bool", Boolean(name.trim()))
  return Boolean(name.trim())
}

const amountValidityFunction = (amount) => {
  console.log("pareseInt", !isNaN(parseInt(amount)))
  return !isNaN(parseInt(amount));
}

export default function AddExpense() {

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    onValueChangeHandler: onAmountChange
  } = useInput(amountValidityFunction);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    onValueChangeHandler: onNameChange
  } = useInput(nameValidityFunction)

  return (
    <View style={styles.rootContainer}>

      <SimpleInput
        inputLabel={"Expense Name"}
        keyboardType={"default"}
        onValueChange={onNameChange}
        value={enteredName}
        inputHasError={nameHasError}
        invalidWarning={"Please Enter Valid Expense"}
      />

      <SimpleInput
        inputLabel={"Amount"}
        keyboardType={"number-pad"}
        onValueChange={onAmountChange}
        value={enteredAmount}
        inputHasError={amountHasError}
        invalidWarning={"Please Enter Valid Amount"}
      />
      <DropdownInput />
      
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    alignItems: 'center'
  },
  // nameInputContainer: {
  //   width: '90%'
  // },
  // nameInputLabel: {
  //   // color: "#A9A9A9",
  //   fontSize: 14
  // },
  // nameInput: {
  //   borderWidth: 2,

  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  //   fontSize: 20,
  //   borderColor: COLORS['grey-100'],
  //   color: COLORS['grey-100'],
  //   marginVertical: 4,

  //   borderRadius: 10
  // },
  // warningText: {
  //   color: 'red',
  //   fontSize: 12,
  //   width: '70%'
  // }

})
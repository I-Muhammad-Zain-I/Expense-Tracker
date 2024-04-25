import { View, Text, TextInput, StyleSheet, StatusBar, Pressable, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../constants/Colors'
import useInput from '../hooks/UseInput'
import SimpleInput from '../components/addExpenseInputs/SimpleInput'
import DropdownInput from '../components/addExpenseInputs/DropdownInput'
import DateTimePicker from '@react-native-community/datetimepicker'
import Ionicons from '@expo/vector-icons/Ionicons'
import FilledButton from '../components/UI/FilledButton'
import TextButton from '../components/UI/TextButton'
import Checkbox from '../components/addExpenseInputs/Checkbox'
import { useDispatch } from 'react-redux'
import ExpenseSlice, { expenseAction } from '../store/ExpenseSlice'
import useMetricInput from '../hooks/UseMetricInput'

const nameValidityFunction = (name) => {
  console.log("bool", Boolean(name.trim()))
  return Boolean(name.trim()) && name.trim().length <= 20
}

const amountValidityFunction = (amount) => {
  console.log("pareseInt", !isNaN(parseInt(amount)))
  return !isNaN(parseInt(amount));
}

export default function AddExpense(props) {


  const [expenseDate, setExpenseDate] = useState("")
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isFavoriteChecked, setIsFavoriteChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("other");

  const dispatch = useDispatch();

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    onValueChangeHandler: onAmountChange,
    setIsTouched: setAmountIsTouched
  } = useInput(amountValidityFunction);
  // const {
  //   value: enteredAmount,
  //   isValid: amountIsValid,
  //   hasError: amountHasError,
  //   onValueChangeHandler: onAmountChange,
  //   setIsTouched: setAmountIsTouched,
  //   onBlurHandler: onAmountBlurred
  // } = useMetricInput();

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    onValueChangeHandler: onNameChange,
    setIsTouched: setNameIsTouched
  } = useInput(nameValidityFunction)


  const toggleDatePicker = () => {
    setShowPicker(showPicker => !showPicker);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS == 'android') {
        toggleDatePicker();
        setExpenseDate(currentDate.toDateString())
      }

    }
    else {
      toggleDatePicker();
    }
  }

  const onDoneAddExpense = () => {
    if (nameIsValid && amountIsValid) {

      const newExpenseItem = {
        name: enteredName,
        date: date.toDateString(),
        category: selectedCategory,
        amount: enteredAmount,
        favorite: isFavoriteChecked,
      }
      
      dispatch(expenseAction.addExpenseItem(newExpenseItem))
      console.log(newExpenseItem);
    } else {
      setAmountIsTouched(true);
      setNameIsTouched(true);
    }
    console.log("Done")
  }

  const onCancel = () => {
    props.navigation.navigate("Home")
  }

  return (
    <View style={styles.rootContainer}>


      <SimpleInput
        inputLabel={"Expense Name"}
        keyboardType={"default"}
        onValueChange={onNameChange}
        value={enteredName}
        inputHasError={nameHasError}
        invalidWarning={"Please Enter Valid Expense, (20 Characters)"}
      />

      <SimpleInput
        inputLabel={"Amount"}
        keyboardType={"number-pad"}
        onValueChange={onAmountChange}
        value={enteredAmount}
        inputHasError={amountHasError}
        invalidWarning={"Please Enter Valid Amount"}
      />
      {/* <SimpleInput
        inputLabel={"Amount"}
        keyboardType={"default"}
        onValueChange={onAmountChange}
        value={enteredAmount}
        inputHasError={amountHasError}
        invalidWarning={"Please Enter Valid Amount"}
        onAmountBlur = {onAmountBlurred}
      /> */}
      <DropdownInput
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Select Date</Text>

        <Pressable
          onPress={toggleDatePicker}
          style={styles}
        >
          <View style={styles.dateInput}>
            <TextInput
              style={styles.input}
              placeholder='Sat Aug 21 2023'
              value={expenseDate}
              // onChangeText={}
              editable={false}
            />
            <Ionicons
              name='calendar'
              size={24}

            />
          </View>
        </Pressable>
      </View>
      <Checkbox
        title={"Favorite"}
        isChecked={isFavoriteChecked}
        setIsChecked={setIsFavoriteChecked}
      />

      {
        showPicker &&
        <DateTimePicker
          mode='date'
          display='spinner'
          value={date}
          onChange={onChange}
        />
      }
      <View style={styles.expenseAddControls}>
        <FilledButton
          buttonText={"Done"}
          buttonHandler={onDoneAddExpense}
          color={"white"}
          buttonBg={"green"}
          borderWidth={2}
          size={20}
        />
        <FilledButton
          buttonText={"Cancel"}
          buttonHandler={onCancel}
          color={"#ff5252"}
          buttonBg={"#ffdddd81"}
          size={20}
        />
       
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // height: 300,
    rowGap: 30,
    marginTop: 10,
    overflow: "hidden",
    // borderWidth: 2,
    // borderColor: 'red',
    alignItems: "center"
  },
  inputContainer: {
    width: '90%',

  },
  inputLabel: {
    // color: "#A9A9A9",
    fontSize: 14
  },
  dateInput: {

    marginVertical: 8,
    borderRadius: 10,
    borderColor: COLORS['grey-100'],
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {


    paddingVertical: 8,
    // paddingHorizontal: 16,
    fontSize: 20,

    color: COLORS['grey-100'],
    marginVertical: 4,


  },
  // warningText: {
  //   color: 'red',
  //   fontSize: 12,
  //   width: '70%'
  // }
  expenseAddControls: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})


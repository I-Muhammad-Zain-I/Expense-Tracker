import { View, Text, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Colors'

export default function SimpleInput(props) {




  return (
    <View style={styles.inputContainer}>
      <Text >{props.inputLabel}</Text>
      <TextInput
        keyboardType={props.keyboardType}
        autoCapitalize='none'
        autoCorrect={false}

        onChangeText={props.onValueChange}
        style={styles.input}
        value={props.value}
        onBlur={props.onAmountBlur ?? null}
      />
      {props.inputHasError && <Text style={styles.warningText}>{props.invalidWarning}</Text>}
    </View>
  )
}

const styles = {
  inputContainer: {
    width: '90%',
    // flex: 1
   
  },
  input: {
    borderWidth: 2,

    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 20,
    borderColor: COLORS['grey-100'],
    // color: COLORS['grey-100'],
    marginVertical: 4,

    borderRadius: 10
  },
  warningText: {
    color: 'red',
    fontSize: 12,
    width: '90%'
  }
}
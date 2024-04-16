import { View, Text, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Colors'

export default function SimpleInput(props) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.nameInputLabel}>{props.inputLabel}</Text>
      <TextInput
        keyboardType={props.keyboardType}
        autoCapitalize='none'
        autoCorrect={false}

        onChangeText={props.onValueChange}
        style={styles.input}
        value={props.value}
      />
      {props.inputHasError && <Text style={styles.warningText}>{props.invalidWarning}</Text>}
    </View>
  )
}

const styles = {
  inputContainer: {
    width: '90%',
  },
  input: {
    borderWidth: 2,

    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 20,
    borderColor: COLORS['grey-100'],
    color: COLORS['grey-100'],
    marginVertical: 4,

    borderRadius: 10
  },
  warningText: {
    color: 'red',
    fontSize: 12,
    width: '70%'
  }
}
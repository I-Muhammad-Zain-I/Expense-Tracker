import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function FilledButton({buttonText, buttonHandler, size, color, buttonBg ,borderWidth}) {

  const onPressHandler = () => {
    buttonHandler();
  }

  const textStyle = {
    fontSize: size ?? 14,
    color: color ?? 'black',
    fontWeight: 'bold'
  }

  const viewStyle = {
    borderWidth: borderWidth ?? 0,
    borderColor: color,
    paddingHorizontal: borderWidth ?? 0,
    paddingVertical: borderWidth ?? 0,
    backgroundColor: buttonBg, 

  }


  return (
    <Pressable
      style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : [styles.buttonContainer]}
      onPress={onPressHandler}
    >
      <View style={[viewStyle, styles.viewStyle]}>
        <Text style={textStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    // width: 'auto',
  
  },
  viewStyle: {
    borderRadius: 20,
    // paddingVertical: 4,
    // paddingHorizontal: 
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25
  },
  pressed: {
    opacity: 0.5
  }
})
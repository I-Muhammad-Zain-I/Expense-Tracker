import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'

export default function DatePicker(props) {
  // Come back to this when learning animation and pan gesture
  return (
    <Modal visible={props.visible}>
      <View style={styles.backgroundContainer}>
        <View style={styles.overlayStyles}>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: 'center',
    alignItems: 'center',

  },
  overlayStyles: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 5
  }
})
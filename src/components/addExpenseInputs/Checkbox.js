import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import COLORS from '../../constants/Colors';


export default function Checkbox(props) {

  const onCheckHandler = () => {
    props.setIsChecked((ic) => !ic);
  }


  return (
    <View
      style={styles.checkboxItemContainer}
    >
      <Pressable
        onPress={onCheckHandler}
        style={styles.checkboxInput}
      >
        {
          props.isChecked ?
            <Image source={require('../../../assets/icons/checked.png')} style={styles.checkBoxImage} />
            :
            <Image source={require('../../../assets/icons/unchecked.png')} style={styles.checkBoxImage} />
        }
      </Pressable>
      <Text style={props.isChecked ?  styles.checkboxLabelchecked : styles.checkboxLabelUnChecked}>{props.title}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  checkboxItemContainer: {
    width: "90%",
    
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16
  },
  checkboxInput: {
    
  },
  checkBoxImage: {
    width: 36,
    height: 36
  },
  checkboxLabelchecked: {
    fontSize: 24,
    color: COLORS['grey-100'],
  },
  checkboxLabelUnChecked: {
   
    fontSize: 24
  }
})
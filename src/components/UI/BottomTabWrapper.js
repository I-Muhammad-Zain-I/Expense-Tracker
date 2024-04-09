import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function BottonTabWrapper(props) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(props.route)
  }



  return (

    <>
      <Pressable android_ripple={{"color": "grey"}}
        onPress={onPressHandler}
        style={({pressed}) =>  [pressed ? [props.style, styles.pressed] : props.style]}
      >
      
          {props.children}
       
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.3,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#333',
   
  }
 
})


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
export default function TabBarIcon({focused, size, color, text, icon}) {
  return (
    <View style={[styles.container, focused && {borderColor: color} ]}>
      <Ionicons name={focused ? icon : `${icon}-outline`} size={size} color={color} />
      <Text style={{ fontSize: 9, color: color, fontWeight: '500' }}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: "white",
    width: '100%',
    paddingTop: 4
  },

})
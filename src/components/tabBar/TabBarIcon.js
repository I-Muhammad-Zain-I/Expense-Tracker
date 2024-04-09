import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
export default function TabBarIcon({focused, size, color, text, icon}) {
  return (
    <>
      <Ionicons name={focused ? icon : `${icon}-outline`} size={size} color={color} />
      <Text style={{ fontSize: 10 }}>{text}</Text>
    </>
  )
}
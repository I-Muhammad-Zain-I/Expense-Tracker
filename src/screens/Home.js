import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
export default function Home() {
  const expenseList = useSelector((state) => state.expenses.expenseList);

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
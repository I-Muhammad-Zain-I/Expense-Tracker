import { View, Text } from 'react-native'
import React from 'react'


const getImageForCategory = (category) => {
  switch (category) {
    case 'food':
      return require('../../assets/icons/food.png');
    case 'transportation':
      return require('../../assets/icons/transportation.png');
    case 'shopping':
      return require('../../assets/icons/shopping.png');
    case 'grocery':
      return require('../../assets/icons/grocery.png');

    default:
      return require('../../assets/icons/other.png');
  }
}

export default function ExpenseListItem({expenseListData}) {
  
  return (
    <View>
      {
        expenseListData.map(({ id, name, category }) => <ExpenseItem
          key={id}
          expenseName={name}
          source={getImageForCategory(category)}
        >

        </ExpenseItem>)
      }
    </View>
  )
}
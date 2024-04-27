import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { getImageForCategory } from '../../utils/utilFunctions';
import ExpenseItem from './ExpenseItem';

export default function ExpenseListItem({ expenseListData }) {

  const renderListItem = (itemData) => {
    const { id, name, category, date, favorite, amount } = itemData.item
    return <ExpenseItem
      key={id}
      expenseName={name}
      source={getImageForCategory(category)}
      date={date}
      favorite={favorite}
      amount={amount}
    >

    </ExpenseItem>
  }



  return (

    <View style={styles.listContainer}>
      <FlatList
        data={expenseListData}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{rowGap: 10, paddingBottom: 10}}

      />


      
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    // borderWidth: 2,
    width: "100%",
    // paddingBottom: 80
    // borderWidth: 2,
    // height:"100%"
    // columnGap: 10,
  }
})
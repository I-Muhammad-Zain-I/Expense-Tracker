import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ExpenseItem from '../components/expenseList/ExpenseItem';
import COLORS from '../constants/Colors';
import { getImageForCategory } from '../utils/utilFunctions';

export default function ImportantExpense() {

  const { expenseList } = useSelector((state) => state.expenses);

  const importantExpenses = expenseList.filter((expense) => expense.favorite == true);



  return (
    <View style={styles.rootContainer}>
      <View style={styles.expenseListContainer}>
        {
          importantExpenses.map(({ id, name, category, date, amount }) => <ExpenseItem
            key={id}
            expenseName={name}
            date={date}
            favorite={false}
            amount={amount}
            source={getImageForCategory(category)}
          >

          </ExpenseItem>)
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight + 10
  },
  viewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  textStyle: {
    color: COLORS['grey-200'],
    fontWeight: 'bold'
  },
  expenseListContainer: {
    justifyContent: 'center',
    rowGap: 8,

  },
  scrollView: {
    height: '50%',
  }

})
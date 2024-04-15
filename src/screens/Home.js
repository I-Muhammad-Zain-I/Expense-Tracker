import { View, Text, Image, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseItem from '../components/expenseList/ExpenseItem';
import TextButton from '../components/UI/TextButton';
import { getImageForCategory } from '../utils/utilFunctions';
import COLORS from '../constants/Colors';
export default function Home(props) {




  const expenseList = useSelector((state) => state.expenses.expenseList.slice(0, 11));


  const onViewAll = () => {
    props.navigation.navigate("All Expense")
  }
  



  console.log(expenseList)
  return (
    <View style={styles.rootContainer}>
      <View style={styles.viewAllContainer}>
        <Text style={styles.textStyle}>Last 10 Expenses</Text>
        <TextButton
          buttonText={"VIEW ALL"}
          buttonHandler={onViewAll}

        />
      </View>
      <ScrollView
        style={styles.scrollView}
      >
        <View style={styles.expenseListContainer}>
          {
            expenseList.map(({ id, name, category, date, favorite, amount }) => <ExpenseItem
              key={id}
              expenseName={name}
              date={date}
              favorite={favorite}
              amount={amount}
              source={getImageForCategory(category)}
            >

            </ExpenseItem>)
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight
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
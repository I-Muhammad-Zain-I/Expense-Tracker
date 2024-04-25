import { View, Text, StyleSheet, StatusBar, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'

import COLORS from '../constants/Colors';

import Searchbar from '../components/addExpenseInputs/Searchbar';

import FilterExpenseCategory from '../components/allExpenses/FilterExpenseCategory';
import ExpenseListItem from '../components/expenseList/ExpenseListItem';
import { useSelector } from 'react-redux';

export default function AllExpense() {
  const [selected, setSelected] = useState("");

  const { expenseList } = useSelector((state) => state.expenses);

  const filteredExpense = expenseList?.filter(({ category }) => {
    console.log(category)
    console.log(selected)
    return category == selected.name
  });
  console.log(filteredExpense, "ss")

  const expenseSearchHandler = (searchedExpense) => {
    // if (searchedExpense.trim()) {
    //   setSearchedCategories(CATEGORIES.filter((category) => category.category.includes(searchedExpense)))
    // } else {
    //   setSearchedCategories([]);
    // }
    console.log(searchedExpense);
  }

  const selectFilterHandler = (selectedFilterValue) => {
    if (selectedFilterValue.id == selected.id) {
      setSelected({})
    } else {
      setSelected(selectedFilterValue)
    }
  }


  return (
    <View style={styles.rootContainer}>
      <Searchbar
        onSearch={expenseSearchHandler}
      />
      <FilterExpenseCategory
        selected={selected}
        updateSelected={selectFilterHandler}
      />
      <ExpenseListItem
        expenseListData={filteredExpense.length == 0 && Object.keys(selected).length == 0 ? expenseList : filteredExpense}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    rowGap: 10,
    marginTop: StatusBar.currentHeight + 10,
    alignItems: "center",
  },
  searchContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    width: '90%'
  },
  searchInput: {
    // flex: 1,

    // minWidth: '90%',
    height: 50,

    borderColor: COLORS['grey-200'],
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    overflow: 'hidden',
    paddingLeft: 15,
  },
})
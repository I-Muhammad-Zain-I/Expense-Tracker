import { View, Text, StyleSheet, StatusBar, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import COLORS from '../constants/Colors';
import Searchbar from '../components/addExpenseInputs/Searchbar';

import FilterExpenseCategory from '../components/allExpenses/FilterExpenseCategory';
import ExpenseListItem from '../components/expenseList/ExpenseListItem';
import { useSelector } from 'react-redux';

export default function AllExpense() {
  const [selected, setSelected] = useState(() => ({}));
  const [searchedExpense, setSearchedExpense] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const searchRef = useRef();
  const { expenseList } = useSelector((state) => state.expenses);



  let filteredExpense = [];
  // check if a category is selected
  if (Object.keys(selected).length != 0) {
    // Check if there are any searched expenses
    if (searchedExpense.length === 0) {
      // console.log(searchRef.current.searchValue)
      // if there are no search expenses for the currently entered query
      // it means that that item is not existent hence render empty: since searchedExpense is [] && here we set filteredExpense to []
      if (searchVal != "") {
        filteredExpense = [];
      }
      // if search box is empty the filter on basis of expense list
      else {

        filteredExpense = expenseList?.filter(({ category }) => {
          // console.log(category)
          // console.log(selected)
          return category == selected.name
        });
      }
    }
    else {
      // filter expense exist hence we filter on them
      filteredExpense = searchedExpense?.filter(({ category }) => {
        return category == selected.name
      });
    }
  }
  else {
    console.log("FilteredExpense set to Expense List")
    if (searchVal == "") {
      filteredExpense = expenseList;
    } else if (searchedExpense.length == 0) {
      filteredExpense = []
    }
  }

  const expenseSearchHandler = (searchExpense) => {
    if (searchExpense.trim()) {
      if (Object.keys(selected).length === 0) {
        setSearchedExpense(
          expenseList.filter(({ name }) => name.toLowerCase().includes(searchExpense.toLowerCase()))
        );
      } else {
       
        setSearchedExpense(
          filteredExpense.filter(({ name }) => name.toLowerCase().includes(searchExpense.toLowerCase()))
        );
      }
    } 
    else {
      setSearchedExpense([]);
    }
    setSearchVal(searchExpense.trim());
  }


  const selectFilterHandler = (selectedFilterValue) => {
    if (selectedFilterValue.id == selected.id) {
      setSelected({})

    } else {
      setSelected(selectedFilterValue)
    }

  }
  useEffect(() => {
    setSearchedExpense([]);
    setSearchVal("");
    searchRef.current.clearSearch();
  }, [selected])

  return (
    <View style={styles.rootContainer}>
      <Searchbar
        onSearch={expenseSearchHandler}
        ref={searchRef}

      />
      <FilterExpenseCategory
        selected={selected}
        updateSelected={selectFilterHandler}

      />

      {
        searchedExpense.length == 0 && filteredExpense == 0 ?
          <View style={{ flex: 1, width: "50%", justifyContent: "center", alignItems: "center" }}>
            <Image source={require("../../assets/emptyBox.png")} style={{ width: "100%", resizeMode: "contain", marginVertical: 20 }} />
            <Text style={{ textAlign: 'center' }}>Cannot Find Any Expense..</Text>
          </View>
          :
          <ExpenseListItem
            expenseListData={searchedExpense.length == 0 ? filteredExpense : searchedExpense}
          />
      }

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
    width: '90%',
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
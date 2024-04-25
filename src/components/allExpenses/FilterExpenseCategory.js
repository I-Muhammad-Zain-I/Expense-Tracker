import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import CATEGORIES from '../../constants/categories'


export default function FilterExpenseCategory(props) {

  const renderExpenseCategoryFilter = (itemData) => {


    return (
      <Pressable
        onPress={() => props.updateSelected(itemData.item)}
        style={({ pressed }) => pressed && { opacity: 0.6 }}
      >
        <View style={[styles.filterOptionBase, (props.selected.id == itemData.item.id) && styles.filterOptionSelected]}>
          <Text style={[styles.filterOptionTextBase, (props.selected.id == itemData.item.id) && styles.filterOptionTextSelected]}>{itemData.item.name.toUpperCase()}</Text>
        </View>
      </Pressable>

    )
  }



  return (
    <View style={styles.listContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderExpenseCategoryFilter}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10,
    borderRightColor: "#e2e2e240",
    borderLeftColor: "#e2e2e23b",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: "90%"
  },
  filterOptionBase: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#95b9f5",
    marginHorizontal: 6,
    backgroundColor: "white",
  },
  filterOptionTextBase: {
    fontSize: 12,
    letterSpacing: 0.5,
    fontWeight: "bold",
    // color: "white"
    color: "#4C8CF4"
  },
  filterOptionSelected: {
    backgroundColor: "#4C8CF4",
    borderColor: "#4C8CF4"
  },
  filterOptionTextSelected: {
    color: "#ffffff"
  },
})
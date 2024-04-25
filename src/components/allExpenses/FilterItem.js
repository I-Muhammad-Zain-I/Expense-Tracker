import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function FilterItem({itemData, selected, updateFilter}) {

  const selectFilterHandler = (id) => {
    console.log(id)
    if(selected == id) {
      updateFilter("")
    } else {
      updateFilter(id)
    }
  }

  return (
    <Pressable
    onPress={() =>selectFilterHandler(itemData.item.id)}
    style={({pressed}) => pressed &&{opacity: 0.6}}
    >
      <View style={[styles.filterOptionBase, (selected == itemData.item.id) &&  styles.filterOptionSelected]}>
        <Text style={[styles.filterOptionTextBase, (selected == itemData.item.id) && styles.filterOptionTextSelected]}>{itemData.item.name.toUpperCase()}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
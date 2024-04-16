import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import COLORS from '../../constants/Colors'

const categories = [
  {
    category: "Transportation",
    image: require('../../../assets/icons/transportation.png')
  },
  {
    category: "Food",
    image: require('../../../assets/icons/food.png')
  },
  {
    category: "Shopping",
    image: require('../../../assets/icons/shopping.png')
  }
]

export default function DropdownInput() {

  const [selectedCategory, setSelectedCategory] = useState("Select Category")
  const [isPressed, setIsPressed] = useState(false)

  const dropDownPressHandler = () => {
    console.log('hello')
    setIsPressed(ip => !ip)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Category Drop Down</Text>
      <Pressable
        style={styles.dropDownSelector}
        onPress={dropDownPressHandler}
      >
        <Text>Select Category</Text>
        <Ionicons name={isPressed ? "caret-up-outline" : "caret-down-outline"} size={24} />
      </Pressable>
      {
        isPressed &&
        <View style={styles.dropDownArea}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='Search'
              style={styles.searchInput}
            />
            <Ionicons name='search-outline' size={24} />
          </View>
          <View style={styles.categoriesContainer}>
            {
              categories.map((category) =>
                <View style={styles.dropDownItem}>
                  <Image style={styles.dropDownItemImage} source={category.image} />
                  <Text>{category.category}</Text>
                </View>
              )
            }
          </View>
        </View>
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 50,
    alignSelf: 'center',
    // color:'black'

  },
  dropDownSelector: {
    // flex:1,
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8e8e8e",
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropDownArea: {
    // flex: 1,
    // flexDirection: 'column',
    // width: '90%',
    // maxWidth: '90%',
    height: 300,
    borderRadius: 5,
    // marginTop: 10,
    // elevation: 1,

    margin: 8,
    shadowColor: '#bdbdbd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,

    // borderColor: COLORS['grey-100'],
    // borderWidth: 0.5,
    // shadowColor: COLORS['grey-100'],
    // shadowOffset: 2,
    // shadowOpacity: 0.6,
    // shadowRadius: 5,
    // minWidth: '90%',
    // alignItems: 'flex-start',
    // alignSelf: 'flex-start',
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
  categoriesContainer: {
    rowGap: 8,
    marginTop: 12
  },
  dropDownItem: {
    
    // borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS['grey-100'],
    width: '90%',
    // marginHorizontal: 20,
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 8
  },
  dropDownItemImage: {
    width: 36,
    height: 36
  }
})
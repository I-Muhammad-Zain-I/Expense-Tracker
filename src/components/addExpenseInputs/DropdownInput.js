import { View, Text, StyleSheet, Pressable, TextInput, Image, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useRef, useState } from 'react'
import COLORS from '../../constants/Colors'
import { useSelector } from 'react-redux'
import { getImageForCategory } from '../../utils/utilFunctions'
import CATEGORIES from '../../constants/categories'
import Searchbar from './Searchbar'

export default function DropdownInput(props) {

  const [isPressed, setIsPressed] = useState(false)
  const [searchedCategories, setSearchedCategories] = useState([]);

  const searchRef = useRef();


  const dropDownPressHandler = () => {
    console.log('hello')
    setIsPressed(ip => !ip)
  }

  const categorySearchHandler = (searchedCategory) => {
    console.log(searchedCategory)
    if (searchedCategory.trim()) {

      setSearchedCategories(CATEGORIES.filter(({name}) => name.includes(searchedCategory)))
    } else {
      setSearchedCategories([]);
    }
  }
  const dropDownOptionSelectHandler = (selCategory) => {
    props.setSelectedCategory(selCategory);
    setIsPressed(false);

    searchRef.current.clearSearch();
    setSearchedCategories([]);
  }



  return (
    <View style={styles.container}>
      <Text>Choose Category</Text>
      <Pressable
        style={styles.dropDownSelector}
        onPress={dropDownPressHandler}
      >
        <Text>{props.selectedCategory}</Text>
        <Ionicons name={isPressed ? "caret-up-outline" : "caret-down-outline"} size={24} />
      </Pressable>
      {
        isPressed &&
        <View style={styles.dropDownArea}>
         <Searchbar 
          onSearch = {categorySearchHandler}
          ref={searchRef}
         />
          <View style={styles.categoriesContainer}>
            <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.categoriesContentContainer}>
              {
                (searchedCategories.length ? searchedCategories : CATEGORIES).map(({id, name}) =>
                  <Pressable style={({ pressed }) => pressed ? [styles.dropDownItem, styles.pressed] : styles.dropDownItem}
                    onPress={() => dropDownOptionSelectHandler(name)}
                    key={id}
                  >
                    <Image style={styles.dropDownItemImage} source={getImageForCategory(name)} />
                    <Text>{name}</Text>
                  </Pressable>
                )
              }
            </ScrollView>
          </View>
        </View>
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 2,
    width: "90%",
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
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8e8e8e",
    alignSelf: 'center',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dropDownArea: {
    // flex: 1,s
    borderRadius: 5,
    margin: 8,
    shadowColor: '#bdbdbd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    // borderWidth: 2,
    height: 300
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
  categoriesContentContainer: {
    // overflow: 'hidden',
    // borderWidth: 2,

    rowGap: 8,
    // marginVertical: 10,
  },
  categoriesContainer: {
    marginTop: 20
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
  },
  pressed: {
    opacity: 0.5
  },
  scrollStyle: {
    
    height: 170,
    // borderWidth: 2,
  }
})
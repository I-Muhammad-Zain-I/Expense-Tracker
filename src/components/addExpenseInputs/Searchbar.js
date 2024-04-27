import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import COLORS from '../../constants/Colors';

const Searchbar = forwardRef((props, ref) => {

  const searchRef = useRef();
  
  const searchHandler = (searchedValue) => {
    props.onSearch(searchedValue.toLowerCase())
  }

  useImperativeHandle(ref, React.useCallback(() => {
    return {
      searchValue: searchRef.current.value,
      clearSearch: () => { searchRef.current.clear() }
    }
  }, []))

  return (

    <View style={styles.searchContainer}>
      <TextInput
        placeholder='Search'
        style={styles.searchInput}
        onChangeText={searchHandler}
        ref={searchRef}

      />
      <Ionicons name='search-outline' size={24} />
    </View>

  )
})

const styles = StyleSheet.create({
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

export default Searchbar;
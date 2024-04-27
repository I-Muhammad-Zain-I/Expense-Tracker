import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import COLORS from '../../constants/Colors';

export default function ExpenseItem(props) {
  // console.log(props.date);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.mediaObject}>
        <Image
          source={props.source}
          style={{ width: 50, height: 50 }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{props.expenseName}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{props.date}</Text>
            {props.favorite && <Ionicons name="star" color={COLORS['grey-200']}/>}
          </View>
        </View>
      </View>
      <Text style={styles.amountText}>-$ {props.amount}</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,

    borderWidth: 1,
    padding: 4,
    borderRadius: 10,
    borderColor: COLORS['grey-100']
  },
  mediaObject: {
    // flex: 1,
    columnGap: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 18,

  },
  dateContainer: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center'
    // justifyContent: 'center',
  },
  dateText: {
    fontSize: 12,
    color: COLORS['grey-100'],
    justifyContent: 'flex-start'
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
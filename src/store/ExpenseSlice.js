import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenseList: [
    {
      'id': 1,
      'name': 'John Doe',
      'date': '2024-04-01',
      'category': 'transportation',
      'amount': 45.67,
      'favorite': false
    },
    {
      'id': 2,
      'name': 'Emily Smith',
      'date': '2024-04-03',
      'category': 'food',
      'amount': 23.89,
      'favorite': true
    },
    {
      'id': 3,
      'name': 'Michael Johnson',
      'date': '2024-04-05',
      'category': 'shopping',
      'amount': 102.50,
      'favorite': true
    },
    {
      'id': 4,
      'name': 'Sarah Brown',
      'date': '2024-04-08',
      'category': 'food',
      'amount': 75.20,
      'favorite': false
    },
    {
      'id': 5,
      'name': 'David Miller',
      'date': '2024-04-10',
      'category': 'other',
      'amount': 95.75,
      'favorite': true
    },
    {
      'id': 6,
      'name': 'Jennifer Lee',
      'date': '2024-04-12',
      'category': 'other',
      'amount': 210.30,
      'favorite': false
    },
    {
      'id': 7,
      'name': 'Chris Wilson',
      'date': '2024-04-14',
      'category': 'other',
      'amount': 47.60,
      'favorite': false
    },
    {
      'id': 8,
      'name': 'Samantha Taylor',
      'date': '2024-04-16',
      'category': 'transportation',
      'amount': 33.45,
      'favorite': true
    },
    {
      'id': 9,
      'name': 'Kevin Anderson',
      'date': '2024-04-18',
      'category': 'food',
      'amount': 56.78,
      'favorite': false
    },
    {
      'id': 10,
      'name': 'Amanda Martin',
      'date': '2024-04-20',
      'category': 'shopping',
      'amount': 123.99,
      'favorite': true
    }
  ]
  // expenseList: [
  //   {
  //     'id': 1,
  //     'name': 'John Doe',
  //     'date': new Date('2024-04-01'),
  //     'category': 'transportation',
  //     'amount': 45.67,
  //     'favorite': false
  //   },
  //   {
  //     'id': 2,
  //     'name': 'Emily Smith',
  //     'date': new Date('2024-04-03'),
  //     'category': 'food',
  //     'amount': 23.89,
  //     'favorite': true
  //   },
  //   {
  //     'id': 3,
  //     'name': 'Michael Johnson',
  //     'date': new Date('2024-04-05'),
  //     'category': 'shopping',
  //     'amount': 102.50,
  //     'favorite': true
  //   },
  //   {
  //     'id': 4,
  //     'name': 'Sarah Brown',
  //     'date': new Date('2024-04-08'),
  //     'category': 'food',
  //     'amount': 75.20,
  //     'favorite': false
  //   },
  //   {
  //     'id': 5,
  //     'name': 'David Miller',
  //     'date': new Date('2024-04-10'),
  //     'category': 'other',
  //     'amount': 95.75,
  //     'favorite': true
  //   },
  //   {
  //     'id': 6,
  //     'name': 'Jennifer Lee',
  //     'date': new Date('2024-04-12'),
  //     'category': 'other',
  //     'amount': 210.30,
  //     'favorite': false
  //   },
  //   {
  //     'id': 7,
  //     'name': 'Chris Wilson',
  //     'date': new Date('2024-04-14'),
  //     'category': 'other',
  //     'amount': 47.60,
  //     'favorite': false
  //   },
  //   {
  //     'id': 8,
  //     'name': 'Samantha Taylor',
  //     'date': new Date('2024-04-16'),
  //     'category': 'transportation',
  //     'amount': 33.45,
  //     'favorite': true
  //   },
  //   {
  //     'id': 9,
  //     'name': 'Kevin Anderson',
  //     'date': new Date('2024-04-18'),
  //     'category': 'food',
  //     'amount': 56.78,
  //     'favorite': false
  //   },
  //   {
  //     'id': 10,
  //     'name': 'Amanda Martin',
  //     'date': new Date('2024-04-20'),
  //     'category': 'shopping',
  //     'amount': 123.99,
  //     'favorite': true
  //   }
  // ]
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState: initialState,
  reducers: {
    a: () => { }
  }
});

export const expenseAction = expenseSlice.actions;
export default expenseSlice.reducer;
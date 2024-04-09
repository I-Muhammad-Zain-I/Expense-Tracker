import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenseList: [
    {
      'name': 'John Doe',
      'date': new Date('2024-04-01'),
      'category': 'Transportation',
      'amount': 45.67,
      'favorite': false
    },
    {
      'name': 'Emily Smith',
      'date': new Date('2024-04-03'),
      'category': 'Food',
      'amount': 23.89,
      'favorite': true
    },
    {
      'name': 'Michael Johnson',
      'date': new Date('2024-04-05'),
      'category': 'Shopping',
      'amount': 102.50,
      'favorite': true
    },
    {
      'name': 'Sarah Brown',
      'date': new Date('2024-04-08'),
      'category': 'Entertainment',
      'amount': 75.20,
      'favorite': false
    },
    {
      'name': 'David Miller',
      'date': new Date('2024-04-10'),
      'category': 'Utilities',
      'amount': 95.75,
      'favorite': true
    },
    {
      'name': 'Jennifer Lee',
      'date': new Date('2024-04-12'),
      'category': 'Healthcare',
      'amount': 210.30,
      'favorite': false
    },
    {
      'name': 'Chris Wilson',
      'date': new Date('2024-04-14'),
      'category': 'Others',
      'amount': 47.60,
      'favorite': false
    },
    {
      'name': 'Samantha Taylor',
      'date': new Date('2024-04-16'),
      'category': 'Transportation',
      'amount': 33.45,
      'favorite': true
    },
    {
      'name': 'Kevin Anderson',
      'date': new Date('2024-04-18'),
      'category': 'Food',
      'amount': 56.78,
      'favorite': false
    },
    {
      'name': 'Amanda Martin',
      'date': new Date('2024-04-20'),
      'category': 'Shopping',
      'amount': 123.99,
      'favorite': true
    }
  ]
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
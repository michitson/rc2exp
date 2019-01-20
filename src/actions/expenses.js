import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid

    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData
    const expense = {description, note, amount, createdAt }

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
      //console.log('created expense with key:', ref.key)
    }
    ).catch((e) => {
      //console.log('err adding expense to database', e)
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {

  return (dispatch, getState) => {
    
   const uid = getState().auth.uid 
   return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    dispatch(editExpense(id, updates))
   }) 
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// 1. Fetch all Expense Data once
// 2. Parse that data into an array
// 3. dispatch SET_EXPENSES 

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = []
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}

import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test ('should return zero if no expenses', () => {
  const res = selectExpensesTotal([])
  expect(res).toBe(0)
})

test ('should correctly add a single expense', () => {
  const res = selectExpensesTotal([expenses[0]])
  expect(res).toBe(expenses[0].amount)
})

test ('should correctly add an array of expenses', () => {
  const res = selectExpensesTotal(expenses)
  expect(res).toBe(114195)
})


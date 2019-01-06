import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'

beforeEach(() =>{

})

test('should correctly render expense summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={121212}/>)
  expect(wrapper).toMatchSnapshot()
}) 

test('should correctly render expense summary with > 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={13} expensesTotal={34343434343}/>)
  expect(wrapper).toMatchSnapshot()
}) 

test('', () => {
  
}) 

test('', () => {
  
}) 

test('', () => {
  
}) 

test('', () => {
  
}) 
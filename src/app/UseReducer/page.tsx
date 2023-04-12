"use client"
import React, { useReducer } from 'react'
import { TabReducer, tabInitialState } from './reducerInfo'

export default function Index() {
  const [tabState, tabDispatch] = useReducer(TabReducer, tabInitialState)
  return (
    <div>
        <h1>UseReducer</h1>
    </div>
  )
}

"use client"
import React, { ReactNode } from 'react'
import store from '../redux/store';
import { Provider } from 'react-redux';
import { createContext } from 'react'

const Context = createContext({ store })
const ProviderContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <Context.Provider value={{ store }}>
      <Provider store={store}>{children}</Provider>
    </Context.Provider>

  )
}
export default ProviderContext
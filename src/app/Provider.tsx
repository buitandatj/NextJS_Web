"use client"
import React, { ReactNode } from 'react'
import store from '../redux/store';
import { Provider } from 'react-redux';

const ProviderContext = ({ children }: { children: React.ReactNode }) => {
  return (
      <Provider store={store}>{children}</Provider>

  )
}
export default ProviderContext
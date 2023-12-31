import React from 'react'
import ReactDOM from 'react-dom'
import { ethers } from 'ethers'
import App from './App'

import { Web3ReactProvider } from '@web3-react/core'

import './reset.css'
import './styles.css'

const getLibrary = (provider: any) => {
  return new ethers.providers.Web3Provider(provider)
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById('root'),
)

import { useState } from 'react'
import Web3 from 'web3'
import { Button } from '@mui/material'
import LOGO_IMAGE from '../assets/illustration.png'
import * as CONSTANTS from '../config'
import './style.css'
import { useEffect } from 'react'

const BalancePage = (params: { web3: any; contract: any }) => {
  const { web3, contract } = params
  const [balance, setBalance] = useState<string>('0 XVS')

  const getBalance = () => {
    const walletAddress = CONSTANTS.TREASURY_ACCOUNT_ADDRESS
    contract.methods
      .balanceOf(walletAddress)
      .call((error: any, balance: any) => {
        if (error) {
          console.error(error)
          return
        }
        let balanceWei = web3.utils.fromWei(balance)
        let balanceWeiFormat = (+balanceWei).toLocaleString()
        setBalance(`${balanceWeiFormat || 0} XVS`)
      })
  }

  useEffect(() => {
    if (web3 == null || contract == null) return
    getBalance()
  }, [web3, contract])
  return (
    <>
      <div className="mainDiv">
        <div className="leftDiv">
          <div className="balanceTitle">Treasury balance</div>
          <div className="balanceText">{balance}</div>
          <Button
            className="refreshButton"
            variant={'contained'}
            onClick={getBalance}
          >
            Refresh
          </Button>
        </div>
        <div className="rightDiv">
          <img src={LOGO_IMAGE} className="logoImage" alt="logo" />
        </div>
      </div>
    </>
  )
}

export default BalancePage

import { useEffect, useState } from 'react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import ABI from '../abi/bep20.json'
import BalancePage from '../components/BalancePage'
import * as CONSTANTS from '../config'

const Main = () => {
  const [iWeb3, setIWeb3] = useState<any>(null)
  const [iContract, setIContract] = useState<any>(null)

  const initWeb3 = () => {
    let web3 = new Web3(CONSTANTS.RPC_PROVIDER_URL)
    var contract = new web3.eth.Contract(
      ABI as AbiItem[],
      CONSTANTS.XVS_CONTRACT_ADDRESS,
    )
    setIWeb3(web3)
    setIContract(contract)
  }

  useEffect(() => {
    initWeb3()
  }, [])

  return (
    <>
      <BalancePage web3={iWeb3} contract={iContract} />
    </>
  )
}

export default Main

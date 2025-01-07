'use client'

import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react"
import { useEffect } from "react";


export const Main = () => {
  const wallet = useTonWallet()
  console.log(wallet);

  useEffect(() => {}, [])
  
  return (
    <div>
      <TonConnectButton />
    </div>
  )
}
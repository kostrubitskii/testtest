"use client";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

export const Main = () => {
  const wallet = useTonWallet();
  console.log(wallet);

  // if (wallet) {
  //   const address = wallet.address;
  // }
  // console.log(address);

  if (wallet) {
    const address = wallet.account.address;
    console.log(address);
  }
  

  return (
    <div>
      <TonConnectButton />
    </div>
  );
};

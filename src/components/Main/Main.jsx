"use client";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectWallet,
  disconnectWallet as disconnectWalletAction,
} from "../../redux/slices/walletSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const walletAddress = useSelector((state) => state.wallet.address);

  const disconnectWallet = async () => {
    try {
      await tonConnectUI.disconnect();
      dispatch(disconnectWalletAction());
      console.log("Кошелек отключен");
    } catch (error) {
      console.error("Ошибка при отключении кошелька:", error);
    }
  };

  if (wallet) {
    const address = wallet.account.address;
    dispatch(connectWallet(address));
    console.log(wallet);
  }

  return (
    <div>
      {!wallet ? (
        <div>
          <TonConnectButton />
        </div>
      ) : (
        <div>
          <button onClick={disconnectWallet}>DISCONNECT</button>
          <p>Connected Wallet Address: {walletAddress}</p>
        </div>
      )}
    </div>
  );
};
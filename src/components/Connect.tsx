import { useState } from "react";
import { ethers } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

declare let window: any
//Below is the right way but I don't how to fix the error at the moment.
// declare global {
//   interface Window {
//     ethereum?: ExternalProvider;
//   }
// }

function WalletBalance(): JSX.Element {
  const [balance, setBalance] = useState("");
  const [account, setAccount] = useState("");

  const getBalance = async () => {
    const [account] = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    setAccount(account);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {window.ethereum ? (
        <>
          <h5>Your Wallet: {account}</h5>
          <h5>Your Balance: {balance}</h5>
          <button onClick={() => getBalance()}>Connect wallet</button>
        </>
      ) : (
        <a href="https://metamask.io/download/">Install metamask</a>
      )}
    </div>
  );
}

export default WalletBalance;

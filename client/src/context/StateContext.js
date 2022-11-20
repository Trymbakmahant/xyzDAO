import { createContext, useState } from "react";
import {ethers} from "ethers";
import { ABI, contractAddress } from "../constants";

export const AppContext = createContext();

const AppWrapper = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [contractData, setContractData] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
    contract: null
  });

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    
    setContractData((prevState) => {
      return {
        provider: provider,
        signer: signer,
        accountAddress: accounts[0],
        contract 
      }
    })

    setIsConnected(true);

  };

  const checkMember = async () => {
    const isMember = await contractData.contract.isUserAMember();
    return isMember;
  };

  const sharedState = {
    isConnected,
    contractData,
    connectWallet,
    checkMember
  };

  return <AppContext.Provider value = {{sharedState}}>
        {props.children}
  </AppContext.Provider>;
};

export default AppWrapper;

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/StateContext";
import classes from "./VideoDescription.module.css";
import Stat from "./Stat";
import { ethers } from "ethers";

const VideoDescription = () => {
  const [proposal, setProposal] = useState(null);
  const ctx = useContext(AppContext);
  const isConnected = ctx.sharedState.isConnected;
  const contract = ctx.sharedState.contractData.contract;

  let { id } = useParams();

  useEffect(() => {

      if(isConnected){

          (async function(){
              const data = await contract.getSingleProposal(+id);
              setProposal(data);
              console.log(data[3]);
          })();
      }

  }, [isConnected]);
 
  const voteHandler = async () =>{
    const tx = await contract.Vote(+id, {gasLimit: "3259970800", value: ethers.utils.parseEther("20")});
  }

  return (
    <div className= {classes.description}>
    {proposal && <div>
    <h1>{proposal[1]}</h1>
    <div className= {classes.details}>
    <img src = {proposal[3]} alt = "dark"/>
      <p>
        {proposal[2]}
      </p>
      </div>
      <div className= {classes.vote}>
      <h3>{proposal[10] ? "Expired" : "Active"}</h3>
      <button className="btn btn-primary" onClick = {voteHandler}>Vote</button>
      </div>
      <div className = {classes.stats}>
      <Stat funds = {ethers.utils.formatEther(proposal[6].toString())} votes = {proposal[7].toString()}/>
      </div>
      </div>}  
    </div>
    );
};

export default VideoDescription;

import { ethers } from "ethers";
import React, {useEffect, useContext, useState} from "react";
import {AppContext} from "../context/StateContext";

function Home() {
  const [isMember, setIsMember] = useState(false);

  const ctx = useContext(AppContext);
  const isConnected = ctx.sharedState.isConnected;

  useEffect(() => {

    if(isConnected){
      (async function(){

        const member =  await ctx.sharedState.checkMember();
        setIsMember(member);
        
      })()
    }

  }, [isConnected, isMember]);

  const memberHandler = async () => {
    if(isMember || !isConnected) return;

    await ctx.sharedState.contractData.contract.becomeMember({value: ethers.utils.parseEther("100")})
  }

   return (
    <section id="home">
      <div className="container">
        <div className="home-text" style = {{marginLeft: "15%"}}>
          <div className="section-text__subtitle">Welcome to xyz DAO</div>
          <div className="section-text__title-big">
            Take control of your content
          </div>
          <div className="section-text__body">
            <h2>
              {" "}
              This application allows you to support the content you enjoy and
              earn money for it.
            </h2>
          </div>
          <button onClick={memberHandler}>
            <a href="#" className="download-btn">
              {isMember ? "You are a member" : "Register as a Member"}
            </a>
          </button>
        </div>

        {/* <div className="section-image"></div> */}
      </div>
    </section>
  );
}

export default Home;

import { useEffect, useContext, useState } from "react";
import { AppContext } from "../context/StateContext";
import Video from "./Video";

const Videos = () => {
    const [allProposals, setAllProposals] = useState([]);
    const ctx = useContext(AppContext);
    const isConnected = ctx.sharedState.isConnected;
    const contract = ctx.sharedState.contractData.contract;

    useEffect(() => {
        if(isConnected){

            (async function(){
                const data = await contract.getAllProposals();
                setAllProposals(data);
            })();
        }
    }, [isConnected]);
    console.log(allProposals)
    return <div className="grid grid-cols-3" style = {{marginTop: "7%", marginLeft: "2%",marginBottom: "3%"}}>
        {allProposals.length && allProposals.map((proposal) => {
          return <Video key = {proposal[0].toString()} id = {proposal[0].toString()} title = {proposal[1]} description = {proposal[2]} thumbnail = {proposal[3]} />
        })
        }
    </div>

};

export default Videos;
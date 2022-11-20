import { ethers } from "ethers";
import {useRef, useContext, useState, useEffect} from "react";
import { AppContext } from "../context/StateContext";

const Host = () => {
  const [isMember, setIsMember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const thumbnailRef = useRef();
  const videoRef = useRef();
  const ctx = useContext(AppContext);
  

  const isConnected = ctx.sharedState.isConnected;

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (!isConnected) return;

    const checkMember = await ctx.sharedState.checkMember();

    if(!checkMember) {
      setIsMember(false);
      return;

    }else{
      setIsLoading(true);
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      const thumbnail = thumbnailRef.current.value;
      const video = videoRef.current.value;

      let imageId = thumbnail.split('/')[5]
      let imageUrl = `https://drive.google.com/uc?export=view&id=${imageId}`
      const tx = await ctx.sharedState.contractData.contract.createProposal(name, description, imageUrl, video, {gasLimit: "32599708", value: ethers.utils.parseEther("20")});
      await tx.wait();

      nameRef.current.value = '';
      descriptionRef.current.value = '';
      thumbnailRef.current.value = '';
      videoRef.current.value = '';
      setIsLoading(false);
    }


  };


  return (
    <div style = {{marginTop: "6%", marginLeft: "40%"}}>
      {!isMember && <h1 style = {{color:"red"}}>You are not a member</h1>}
      <form className="form-control w-full max-w-xs" onSubmit={formSubmitHandler}>
        <label className="label">
          <span className="label-text">Video name</span>
        </label>
        <input
          type="text"
          placeholder="Enter the video name"
          className="input input-bordered input-info w-full max-w-xs"
          ref={nameRef}
          required
        />
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          placeholder="Enter Description"
          className="input input-bordered input-info w-full max-w-xs"
          ref= {descriptionRef}
          required
        />
        <label className="label">
          <span className="label-text">Thumbnail</span>
        </label>
        <input
          type="text"
          placeholder="Thumbnail url(Google drive link)"
          className="input input-bordered input-info w-full max-w-xs"
          ref={thumbnailRef}
          required
        />
        <label className="label">
          <span className="label-text">Video Url</span>
        </label>
        <input
          type="text"
          placeholder="Video url(Google drive link)"
          className="input input-bordered input-info w-full max-w-xs"
          ref={videoRef}
          required
        />
        <button type = "submit" className={`btn btn-outline btn-success ${isLoading && "loading"}`} style = {{marginTop: "7%"}}>{isLoading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
};
export default Host;

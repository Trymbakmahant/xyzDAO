import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Membership from "../components/Membership";
import Features from "../components/Features";
import UploadVideo from "../components/UploadVideo";
import Videos from "../components/Videos";


const Paths = () => {
    return <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="/membership" element={<Membership />} />
    <Route exact path="/Features" element={<Features />} />
    <Route exact path="/uploadvideo" element={<UploadVideo />} />
    <Route exact path = "/videos" element = {<Videos />}/>
    </Routes>
};

export default Paths;
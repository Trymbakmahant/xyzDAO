import { useNavigate } from "react-router-dom";

const Video = (props) => {
  const navigate = useNavigate();
    const redirctHandler = () => {
      navigate(`/videos/${props.id}`)
    }

    return <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={props.thumbnail} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p>A mind bending time travelling mystery!</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick = {redirctHandler}>Vote Now</button>
      </div>
    </div>
  </div>
};

export default Video;
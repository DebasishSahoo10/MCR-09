import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const IndividualPlaylist = () => {
  const { name } = useParams();
  const { state, dispatch } = useContext(DataContext);
  const playlist = state.playlists.filter((play) => play.name === name);
  const videos = state.videos.filter((vid) =>
    playlist[0].videoIDs.includes(vid._id.toString())
  );
  const handleWatchLater = (vidID) => {
    if (state.watchLater.includes(vidID)) {
      dispatch({ type: "REMOVE_FROM_WL", payload: vidID });
    } else {
      dispatch({ type: "ADD_TO_WL", payload: vidID });
    }
  };
  const removeFromPlaylist = (playlistName, videoID) => {
    dispatch({type : "REMOVE_FROM_PLAYLIST", payload : {playlistName, videoID}})
  }
  return (
    <div  style={{textAlign : "left"}}>
      <h2>{name}</h2>
      <ul>
        {videos.map((vid) => {
          return (
            <li
              key={vid._id}
              style={{
                width: "350px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={vid.thumbnail}
                alt=""
                style={{ width: "100%", height: "50%", objectFit: "cover" }}
              />
              <div
                style={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ marginBottom: "0" }}>
                  <NavLink to={`/video/${vid._id}`}>{vid.title}</NavLink>
                </p>
                <p style={{ marginTop: "0" }}>
                  {vid.views} Views - {vid.creator}
                </p>
                <img src={vid.src} alt="" />
                <button
                  style={{ width: "100%" }}
                  onClick={() => handleWatchLater(vid._id)}
                >
                  {state.watchLater.includes(vid._id)
                    ? "Remove From"
                    : "Add to"}{" "}
                  Watch Later
                </button>
                <button  style={{ width: "100%" }} onClick={()=>removeFromPlaylist(name, vid._id)}>Remove From Playlist</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const Playlist = () => {
  const { state, dispatch } = useContext(DataContext);
  const [newPlaylistModal, setNewPlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const createPlaylist = () => {
    dispatch({
      type: "CREATE_PLAYLIST",
      payload: { name: playlistName, videoIDs: [] },
    });
    setNewPlaylistModal(false);
  };
  const handleDeletePlaylist = (e, playlistName) => {
    e.stopPropagation()
    dispatch({type : "DELETE_PLAYLIST", payload : playlistName})
  }

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Your Playlists</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <ul>
          {state.playlists.map((play) => {
            return (
              <li key={play.name} style={{ height: "180px", width: "200px", marginBottom : "30px" }}>
                <NavLink to={`/play/${play.name}`}>
                  <img
                    src="https://picsum.photos/311/174"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  </NavLink>
                  <div style={{display : "flex", gap : "10px"}}>
                    <NavLink to={`/play/${play.name}`}><p style={{margin : "0"}}>{play.name}</p></NavLink>
                    <button style={{height : "25px"}} onClick={(e) => handleDeletePlaylist(e, play.name)}>Delete Playlist</button>
                  </div>
                
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setNewPlaylistModal(true)}
          style={{ height: "180px", width: "200px" }}
        >
          Create a Playlist
        </button>
      </div>

      <dialog open={newPlaylistModal} style={{ position: "fixed", top: "50%" }}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label htmlFor="">Playlist Name</label>
          <input
            type="text"
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button onClick={() => createPlaylist()}>Save</button>
        </div>
      </dialog>
    </div>
  );
};

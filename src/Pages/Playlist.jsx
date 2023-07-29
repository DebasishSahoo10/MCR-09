import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

export const Playlist = () => {
  const { state, dispatch } = useContext(DataContext);
  const [newPlaylistModal, setNewPlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const createPlaylist = () => {
    dispatch({ type: "CREATE_PLAYLIST", payload: {name : playlistName, videoIDs : []} });
    setNewPlaylistModal(false);
  };
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Your Playlists</h2>
      <div style={{display : "flex", flexWrap : "wrap", gap : "20px"}}>
        <ul>
          {state.playlists.map((play) => {
            return (
              <li key={play.name} style={{ height: "180px", width: "200px" }}>
                <img src="https://picsum.photos/311/174" alt="" style={{width : "100%", height : "100%", borderRadius : "8px", objectFit : "cover"}}/>
                <p>{play.name}</p>
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

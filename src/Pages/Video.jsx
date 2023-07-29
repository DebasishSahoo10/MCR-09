import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const Video = () => {
  const { videoID } = useParams();
  const { state, dispatch } = useContext(DataContext);
  const video = state.videos.filter((vid) => vid._id == videoID);
  const [noteInputDisplay, setNoteInputDisplay] = useState(false);
  const [newNote, setNewNote] = useState({ noteID: "", note: "" });
  const [playlistModal, setPlayListModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteNote = (noteID) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: { videoID: videoID, noteID: noteID },
    });
  };
  const [isEdit, setIsEdit] = useState(false);
  const handleEditNote = (noteID, note) => {
    setNoteInputDisplay(true);
    setIsEdit(true);
    setNewNote({ noteID: noteID, note: note });
  };
  const addNewNote = () => {
    if (isEdit) {
      dispatch({
        type: "EDIT_NOTE",
        payload: {
          videoID: videoID,
          noteID: newNote.noteID,
          note: newNote.note,
        },
      });
      setIsEdit(false);
    } else {
      dispatch({
        type: "ADD_NOTE",
        payload: { videoID: video[0]._id, note: newNote },
      });
    }
    setNewNote({ noteID: uuid(), note: "" });
    setNoteInputDisplay(false);
  };
  const handleWatchLater = (vidID) => {
    if (state.watchLater.includes(vidID)) {
      dispatch({ type: "REMOVE_FROM_WL", payload: vidID });
    } else {
      dispatch({ type: "ADD_TO_WL", payload: vidID });
    }
  };
  const addToPlaylist = (playlistName, videoID) => {
    dispatch({type : "ADD_TO_PLAYLIST", payload : {playlistName, videoID}})
  }
  return (
    <div style={{ textAlign: "left", display: "flex", gap: "20px" }}>
      <div>
        <h2>{video[0].title}</h2>
        <p>{video[0].views} Views - {video[0].creator}</p>
        <button
          style={{ width: "100%", height: "40px", marginBottom: "10px" }}
          onClick={() => handleWatchLater(video[0]._id)}
        >
          {state.watchLater.includes(video[0]._id) ? "Remove From" : "Add to"}{" "}
          Watch Later
        </button>
        <button
          style={{ width: "100%", height: "40px", marginBottom: "10px" }}
          onClick={() => setPlayListModal(true)}
        >
          Add To Playlist
        </button>
        <iframe
          width="700"
          height="328"
          src={video[0].src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <h3 style={{ margin: "0" }}>My Notes</h3>
          <button
            style={{ height: "30px", fontSize: "small", padding: "5px" }}
            onClick={() => setNoteInputDisplay(true)}
          >
            Add a Note
          </button>
        </div>
        <div
          style={{
            display: noteInputDisplay ? "flex" : "none",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            name=""
            id=""
            style={{ width: "60%", height: "30px", marginBottom : "20px" }}
            value={newNote.note}
            onChange={(e) =>
              setNewNote({
                noteID: isEdit ? newNote.noteID : uuid(),
                note: e.target.value,
              })
            }
          />
          <button
            style={{
              height: "35px",
              fontSize: "small",
              padding: "2px",
              width: "60px",
            }}
            onClick={() => addNewNote()}
          >
            Add
          </button>
        </div>
        <div>
          <ul style={{ flexDirection: "column" }}>
            {video[0].notes.map((note, i) => {
              return (
                <li key={note.noteID} style={{ display: "flex", gap: "10px" }}>
                  <p style={{ margin: "0" }}>
                    {i} - {note.note}
                  </p>
                  <button
                    style={{
                      height: "25px",
                      fontSize: "smaller",
                      width: "60px",
                    }}
                    onClick={() => handleEditNote(note.noteID, note.note)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      height: "25px",
                      fontSize: "smaller",
                      width: "60px",
                    }}
                    onClick={() => handleDeleteNote(note.noteID)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <dialog open={playlistModal} style={{ position: "fixed", top: "5%", width : "300px", paddingBottom : "40px" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <p>Add to Playlist</p>
          {state.playlists.length === 0
            ? "There is no playlist created. First create one to add"
            : null}
          {state.playlists.map((play) => {
            return <li key={play.name} onClick={()=>addToPlaylist(play.name, videoID)} style={{color : play.videoIDs.includes(videoID) && "green"}}>{play.name}</li>;
          })}
          <button onClick={() => navigate("/playlist")}>
            Create a new Playlist
          </button>
          <button onClick={()=>setPlayListModal(false)}>Close</button>
        </div>
      </dialog>
      <div>
        <h2>More Videos</h2>
        <ul>
          {state.videos.map((vid) => {
            return (
              <li
                key={vid._id}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <img src={vid.thumbnail} alt="" width={180} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ margin: "0" }}>
                    <NavLink to={`/video/${vid._id}`}>{vid.title}</NavLink>
                  </p>
                  <small style={{ margin: "0" }}>{vid.views} views</small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

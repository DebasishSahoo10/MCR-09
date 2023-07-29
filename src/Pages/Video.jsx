import { useContext, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";
import { v4 as uuid} from "uuid";

export const Video = () => {
  const { videoID } = useParams();
  const { state, dispatch } = useContext(DataContext);
  const video = state.videos.filter((vid) => vid._id == videoID);
  const [noteInputDisplay, setNoteInputDisplay] = useState(false);
  const [newNote, setNewNote] = useState({noteID : "", note : ""})
  const addNewNote = () => {
    dispatch({type : "ADD_NOTE", payload : {videoID : video[0]._id, note : newNote}})
    setNewNote({noteID : uuid(), note : ""})
    setNoteInputDisplay(false)
  }
  return (
    <div style={{ textAlign: "left", display: "flex", gap: "20px" }}>
      <div>
        <h2>{video[0].title}</h2>
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
            style={{ width: "60%", height: "30px" }}
            value={newNote.note}
            onChange={(e) => setNewNote({noteID : uuid(), note : e.target.value})}
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
          <ul style={{flexDirection : "column"}}>
            {video[0].notes.map((note,i) => {
              return (
                <li key={note.noteID} style={{display : "flex", gap : "10px"}}>
                  <p style={{margin : "0"}}>{i} - {note.note}</p>
                  <button style={{height : "25px", fontSize : "smaller", width : "60px"}}>Edit</button>
                  <button style={{height : "25px", fontSize : "smaller", width : "60px"}}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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

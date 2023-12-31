/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import { createContext, useReducer } from "react";

//Categories Data
const categories = [
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg",
    src: "https://www.youtube.com/embed/D6QM3Xed2J0",
    category: "Origami",
  },
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/cScuMgYHKeM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD_1sAD2_ui20Zj1zIv6Fux5UkOQ",
    src: "https://www.youtube.com/embed/cScuMgYHKeM",
    category: "Kirigami",
  },
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g",
    src: "https://www.youtube.com/embed/HouoBQcr3zU",
    category: "Clay Modeling",
  },
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/CJ7LQXgp81w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-UdpvOWsImcY4MX8ITgBa7PbOlw",
    src: "https://www.youtube.com/embed/CJ7LQXgp81w",
    category: "Stop Motion",
  },
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw",
    src: "https://www.youtube.com/embed/3a6A3_08jNo",
    category: "Pottery",
  },
  {
    _id: uuid(),
    thumbnail:
      "https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg",
    src: "https://www.youtube.com/embed/koWSpTFYLok",
    category: "Quilling",
  },
];
//All Videos Data
const videos = [
  {
    _id: 19,
    title: "Origami Swan - Simple and Elegant",
    views: 2879,
    chips: ["origami", "swan", "paper", "elegant"],
    thumbnail: "https://picsum.photos/300/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Origami",
    creator: "PaperCraftPro",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 20,
    title: "Kirigami Flower Bouquet - Beautiful Handmade Gift",
    views: 1756,
    chips: ["kirigami", "flower bouquet", "paper", "gift"],
    thumbnail: "https://picsum.photos/300/175",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Kirigami",
    creator: "Crafty Delights",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 21,
    title: "Sculpting Animals from Polymer Clay - Step by Step Guide",
    views: 2251,
    chips: ["sculpture", "polymer clay", "animals", "crafts"],
    thumbnail: "https://picsum.photos/300/176",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Clay Modeling",
    creator: "CraftyCritters",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 22,
    title: "Stop Motion Short Film - Adventure in Toyland",
    views: 3172,
    chips: ["stop motion", "short film", "toyland", "adventure"],
    thumbnail: "https://picsum.photos/300/177",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Stop Motion",
    creator: "ToyStoryMakers",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 23,
    title: "Handmade Pottery Vases - Decorating with Ceramic Glaze",
    views: 2879,
    chips: ["pottery", "clay", "vases", "ceramic glaze"],
    thumbnail: "https://picsum.photos/300/178",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Pottery",
    creator: "CeramicArtistry",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 24,
    title: "Quilling Art Techniques - Creating Intricate Designs",
    views: 1756,
    chips: ["quilling", "paper art", "techniques", "intricate designs"],
    thumbnail: "https://picsum.photos/300/179",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Quilling",
    creator: "ArtfulQuills",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 25,
    title: "Origami Crane Mobile - DIY Home Decor",
    views: 2251,
    chips: ["origami", "crane", "mobile", "paper", "home decor"],
    thumbnail: "https://picsum.photos/301/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Origami",
    creator: "HomeCraftHacks",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 26,
    title: "Kirigami Birthday Pop-Up Box - Surprise Gift",
    views: 3172,
    chips: ["kirigami", "birthday pop-up box", "paper", "surprise gift"],
    thumbnail: "https://picsum.photos/302/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Kirigami",
    creator: "GiftsFromHeart",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 27,
    title: "Sculpting Fantasy Creatures - Unleash Your Imagination",
    views: 2879,
    chips: ["sculpture", "fantasy creatures", "clay", "imagination"],
    thumbnail: "https://picsum.photos/303/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Clay Modeling",
    creator: "FantasyArtWorks",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 28,
    title: "Stop Motion Animation Contest - Show Your Skills",
    views: 1756,
    chips: ["stop motion", "animation contest", "competition"],
    thumbnail: "https://picsum.photos/304/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Stop Motion",
    creator: "AnimateMasters",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 29,
    title: "Pottery Wheel Techniques - Creating Stunning Bowls",
    views: 2251,
    chips: ["pottery", "clay", "wheel techniques", "bowls"],
    thumbnail: "https://picsum.photos/305/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Pottery",
    creator: "ArtisticPots",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 30,
    title: "Quilling Greeting Cards - Handmade Cards for Every Occasion",
    views: 3172,
    chips: ["quilling", "greeting cards", "paper", "occasions"],
    thumbnail: "https://picsum.photos/306/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Quilling",
    creator: "CraftyGreetings",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 31,
    title: "Origami Elephant - Step-by-Step Tutorial",
    views: 2879,
    chips: ["origami", "elephant", "paper", "tutorial"],
    thumbnail: "https://picsum.photos/307/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Origami",
    creator: "OrigamiWonderland",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 32,
    title: "Kirigami Art Collage - Combining Paper Shapes",
    views: 1756,
    chips: ["kirigami", "art collage", "paper", "shapes"],
    thumbnail: "https://picsum.photos/308/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Kirigami",
    creator: "CreativeFolds",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 33,
    title: "Sculpting Realistic Portraits - Mastering Human Faces",
    views: 2251,
    chips: ["sculpture", "realistic portraits", "clay", "human faces"],
    thumbnail: "https://picsum.photos/309/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Clay Modeling",
    creator: "PortraitsInClay",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 34,
    title: "Stop Motion Animation Tips and Tricks",
    views: 3172,
    chips: ["stop motion", "animation", "tips", "tricks"],
    thumbnail: "https://picsum.photos/310/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Stop Motion",
    creator: "AnimateMagic",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 35,
    title: "Pottery Art Exhibition - Celebrating Local Artists",
    views: 2879,
    chips: ["pottery", "clay", "art exhibition", "local artists"],
    thumbnail: "https://picsum.photos/311/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Pottery",
    creator: "ArtisticExpressions",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
  {
    _id: 36,
    title: "Quilling 3D Wall Art - Adding Depth to Paper Designs",
    views: 1756,
    chips: ["quilling", "3d wall art", "paper", "designs"],
    thumbnail: "https://picsum.photos/312/174",
    src: "https://www.youtube.com/embed/GBIIQ0kP15E",
    category: "Quilling",
    creator: "PaperArtDimensions",
    notes: [{ noteID: uuid(), note: "Oh No ! Rick Rolled Again" }],
  },
];

export const DataContext = createContext();

const handleActions = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WL":
      return { ...state, watchLater: [...state.watchLater, action.payload] };
    case "REMOVE_FROM_WL":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (vidID) => vidID !== action.payload
        ),
      };
    case "ADD_NOTE" : {
      const notedVideo = state.videos.filter(vid => vid._id == action.payload.videoID)
      notedVideo[0].notes.push(action.payload.note)
      const newVideos = state.videos.map(vid => {
        if (vid._id == notedVideo._id) {
          vid = notedVideo
        }
        return vid;
      })
  
      return {...state, videos : newVideos};
    }
    case "EDIT_NOTE" : {
      const newVideos = state.videos.map(vid => {
        if (vid._id == action.payload.videoID) {
          vid.notes.map(note => {
            if (note.noteID == action.payload.noteID) {
              note.note = action.payload.note
            }
            return note
          })
        }
        return vid
      })
      return {...state,  newVideos}
    }
    case "DELETE_NOTE" : {
      console.log(action.payload)
      const newVideos = state.videos.map(vid => {
        if (vid._id == action.payload.videoID) {
          vid.notes = vid.notes.filter(note => note.noteID!==action.payload.noteID)
        }
        return vid
      })
      return {...state,  newVideos}
    }
    case "CREATE_PLAYLIST" : return {...state, playlists : [...state.playlists, action.payload]}
    case "ADD_TO_PLAYLIST" : {
      const newPlaylist = state.playlists.map(play => {
        if (play.name == action.payload.playlistName) {
          play.videoIDs.push(action.payload.videoID)
        }
        return play
      })
      return {...state, playlists : newPlaylist}
    }
    case "REMOVE_FROM_PLAYLIST" : {
      const newPlaylist = state.playlists.map(play => {
        if (play.name == action.payload.playlistName) {
          play.videoIDs = play.videoIDs.filter(vid => vid !== action.payload.videoID.toString())
        }
        return play
      })
      return {...state, playlists : newPlaylist}
    }
    case "DELETE_PLAYLIST" : {
      const newPlaylist = state.playlists.filter(play => play.name!==action.payload)
      return {...state, playlists : newPlaylist}
    }
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleActions, {
    videos: videos,
    categories: categories,
    playlists: [],
    watchLater: [],
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

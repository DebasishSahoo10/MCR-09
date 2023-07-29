import { NavLink } from "react-router-dom"

export const SideNav = () => {
    return (
        <div style={{minWidth : "320px"}}>
            <p><NavLink to="/">Home</NavLink></p>
            <p><NavLink to="/explore" >Explore</NavLink></p>
            <p><NavLink to="/playlist" >Playlists</NavLink></p>
            <p><NavLink to="/watchlater">Watch Later</NavLink></p>
        </div>
    )
}
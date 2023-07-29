import { NavLink } from "react-router-dom"

export const SideNav = () => {
    return (
        <div style={{minWidth : "320px"}}>
            <p><NavLink to="/">Home</NavLink></p>
            <p>Explore</p>
            <p>Playlists</p>
            <p>Watch Later</p>
        </div>
    )
}
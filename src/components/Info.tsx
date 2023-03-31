import React from 'react'
import UserImg from "../assets/Oval.png";
import "../App.css";
import "../dark.css";
interface Props {
    avatar_url:string
    name:string
    created_at:string
    company:string
    result:string
}
export default function Info({avatar_url,name,created_at,company,result}:Props) {

  return (
    <>
     <div className="infos">
            <img src={avatar_url ? avatar_url :UserImg } alt="" id="avatar" />
            <div className="name-info">
              <h3>{name ? name : "octant"}</h3>
              <div className="joined">
              <p id="company">{company ? company : "@octant"}</p>
              <p id="date">{created_at ? result :"Joined 25 Jan 2011"}</p>
              </div>
              
            </div>
            
          </div>
    </>
  )
}

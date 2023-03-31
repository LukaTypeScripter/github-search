import React from 'react'
import "../App.css";
import "../dark.css";
interface Props {
    public_repos:string
    followers:string
    following:string
}
export default function MiddleCont({public_repos,followers,following}:Props) {
  return (
    <>
       <div className="info-cont">
                <div className="inside-info">
                <div className="repos">
              <p id="rep">repos</p>
              <b>{public_repos ? public_repos : "8"}</b>
          </div>
          <div className="followers">
          <p id="fol">followers</p>
          <b>{followers ? followers : "3932"}</b>
          </div>
          <div className="following">
              <p id="fol-ing">following</p>
              <b>{following ? following : "9" }</b>
          </div>
                </div>
        </div>
    </>
  )
}

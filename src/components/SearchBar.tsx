import React from 'react'
import { FormEvent } from 'react';
import "../App.css";
import "../dark.css";
interface Props {
    setUserName:React.Dispatch<React.SetStateAction<string>>
    onSubmitHandler:(e: FormEvent) => void
}

export default function SearchBar({setUserName,onSubmitHandler}:Props) {
  return (
    <>
     <div className="search-bar">
        <div className="search-in">
          <svg
            height="24"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            id="search-svg"
          >
            <path
              d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              fill="#0079ff"
            />
          </svg>
          <form onSubmit={onSubmitHandler}>
          <span>
            {" "}
            <input
              type="text"
              id="search"
              placeholder="Search GitHub username…"
              onChange={(e) => setUserName(e.target.value)}
            />
          </span>
          <span>
            <button className="btn">Search</button>
          </span>

          </form>
         
        </div>
      </div>
      </>
  )
}

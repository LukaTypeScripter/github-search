import React from 'react'
interface Prop {
    bio:string
}
export default function About({bio}:Prop) {
  return (
    <>
     <p id="about">
              {bio ? bio : `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.`}
              </p>
    </>
  )
}

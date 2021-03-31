import React from 'react'
import CatUrl from '../assets/cat.gif'
import usePosition from '../usePosition'
export default function Cat() {
  let { x, y } = usePosition()
  x += 200
  y -= 50
  return (
    <div>
      <img
        src={CatUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}

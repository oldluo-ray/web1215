import React from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../usePosition'
export default function Mouse() {
  const { x, y } = usePosition()
  return (
    <div>
      <img
        src={MouseUrl}
        alt=""
        style={{ position: 'absolute', width: 100, left: x, top: y }}
      />
    </div>
  )
}

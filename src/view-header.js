import React from 'react'

export default function ViewHeader({ prev, next, prevYear, nextYear, titleAction, data }) {
  return (
    <div className="navigation-wrapper">
      <span className="icon" onClick={prevYear}>&lt;&lt;</span>
      <span className="icon" onClick={prev}>&lt;</span>
      {/* <span className="navigation-title" onClick={titleAction}>{data}</span> */}
      <span className="navigation-title">{data}</span>
      <span className="icon" onClick={next}>&gt;</span>
      <span className="icon" onClick={nextYear}>&gt;&gt;</span>
    </div>
  )
}

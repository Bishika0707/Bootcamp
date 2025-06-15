import React from 'react'

function Button({content}) {
  return (
   <div>
  <button className="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-green-700/70 bg-green-300/30 hover:bg-green-500/70 hover:text-white">
    <span className="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-1.5 before:absolute before:top-full group-hover:-translate-y-full"></span>
    {content}
  </button>
</div>

  )
}

export default Button

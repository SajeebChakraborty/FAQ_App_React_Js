import React from 'react'

export default function FAQ({id,title,desc}) {
  return (
    <article>
        
        <div>

            <h4>{title}</h4>
            <button>+</button>


        </div>

        <p>{desc}</p>


    </article>
  )
}

import React from 'react';

import style from './faq.module.css';

export default function FAQ({id,title,desc}) {
  return (
    <article className={style.faq}>
        
        <div>

            <h4>{title}</h4>
            <button>+</button>


        </div>

        <p>{desc}</p>


    </article>
  )
}

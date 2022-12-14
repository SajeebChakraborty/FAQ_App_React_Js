import React, { useState } from 'react';

import style from './faq.module.css';

export default function FAQ({id,title,desc}) {

  const [toggle,setToggle]=useState(false);

  const onHandlestate=()=>{

    setToggle(!toggle);
    


  }

  return (
    <article className={style.faq}>
        
        <div>

            <h4>{title}</h4>

            <button onClick={onHandlestate}>
                
                { toggle ? '-' : '+' }
                
            </button>


        </div>

        { toggle && <p>{desc}</p> }
        


    </article>
  )
}

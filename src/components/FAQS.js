import React, { useState } from 'react';
import style from './faqs.module.css';

import {data} from './data.js';
import FAQ from './FAQ';

export default function FAQS() {

  const [faqs,setFaqs]=useState(data);

  return (

    <main className={style.container}>

        <section className={style.faqs}>

            <h1>FAQs</h1>
        
            {faqs.map((faq)=> (

                <FAQ key={faq.id} {...faq}/>

                


            ))}

        </section>
    </main>
  )
}

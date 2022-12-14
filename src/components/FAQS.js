import React, { useState } from 'react';

import {data} from './data.js';
import FAQ from './FAQ';

export default function FAQS() {

  const [faqs,setFaqs]=useState(data);

  return (
    <div>
      
        {faqs.map((faq)=> (

            <FAQ key={faq.id} {...faq}/>

            


        ))}

    </div>
  )
}

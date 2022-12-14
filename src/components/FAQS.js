import React, { useState } from 'react';

import {faqsdata} from './data.js';
import FAQ from './FAQ';

export default function FAQs() {

  const [faqs,setFaqs]=useState(faqsdata);

  return (
    <div>
      
        {faqs.map((faq)=> (

            <FAQ key={faq.id} faq={...faq}/>

            


        ))}

    </div>
  )
}

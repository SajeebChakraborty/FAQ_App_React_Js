import React, { useState } from 'react';

import {faqsdata} from './data.js';

export default function FAQs() {

  const [faqs,setFaqs]=useState(faqsdata);

  return (
    <div>
      
        {faqs.map(faq=> {})}

    </div>
  )
}

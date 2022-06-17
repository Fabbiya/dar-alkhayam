import React from 'react'
import SectionCapabilities from '../components/SectionCapabilities/SectionCapabilities';

import SectionDifference from '../components/SectionDifference/SectionDifference';
import SectionMain from '../components/SectionMain/SectionMain';
import SectionCategories from '../components/SectionCategories/SectionCategories';


export default function Main() {
  return (
    <div>
      
      <SectionMain/>
      <SectionCapabilities/>
      <SectionDifference/>
      <SectionCategories/>
      
    </div>
  )
}

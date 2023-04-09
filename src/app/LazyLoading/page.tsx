"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react'
// import Heavy from './Heavy';

const DynamicHeavyComponent = dynamic(()=>import ("./Heavy"),{
    ssr:false,
    loading:()=> <p>i am loading a heavy component</p>
})

export default function Index() {
    const [showComponent, setShowComponent] = useState(false)
  return (
    <div>
        <p>lazy loading page</p>
        <button onClick={()=> setShowComponent(!showComponent)}>click to show component</button>
        {/* {showComponent && <Heavy/>} regular import */}
        {showComponent && <DynamicHeavyComponent/>} {/* dynamic import aka lazy loading import */}
    </div>
  )
}

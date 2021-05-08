import React from 'react'
import reactDom from 'react-dom'
import Birthday from "./birthday"

function App(){
  return(
    <main>
      <Birthday></Birthday>
    </main>
  )
}




reactDom.render(<App/>, document.getElementById("root"))
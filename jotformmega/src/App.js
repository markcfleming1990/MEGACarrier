import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Please click on button below to fill out 
        our form.
      </h1>
      <button onClick = {() => {
        window.location.href = 'https://form.jotform.com/231635679502056'
      }}>Fill out Form</button>

    </div>
  )
}

export default App
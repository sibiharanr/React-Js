import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Day5 from './Day5'


function App() {
  return (
    <div><ErrorBoundary>
       <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </ErrorBoundary></div>
  )
}

export default App

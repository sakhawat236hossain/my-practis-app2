

import { Suspense } from 'react'
import './App.css'
import Countries from './Countries/Countries'
const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res=> res.json())
function App() {
  
  

  return (
    <>
     
   <div>
  <Suspense fallback={<p>waiting for message...</p>}>
  <Countries CountriesPromise={CountriesPromise}></Countries>

  </Suspense>
   </div>
    </>
  )
}

export default App

import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import LibraryInput from './components/LibraryInput'

import LibraryTable from './components/LibraryTable'

export default function App() {
  return (
    <div className='container mt-5'>
      <h1>Add Book:</h1>

      <LibraryInput/>
    </div>
  )
}

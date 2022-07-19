import React from 'react'

export default function LibraryInput() {
  return (
    <div>
        <form>
            <div className='mb-3'>
                <label className="form-label">Title</label>
                <input type="text" className="form-control"/>
            </div>

            <div className='mb-3'>
                <label className="form-label">Author</label>
                <input type="text" className="form-control"/>
            </div>

            <div className='mb-3'>
                <label className="form-label">#ISBN</label>
                <input type="text" className="form-control"/>
            </div>

            <div className='d-grid gap-2'>
                <button className='btn btn-outline-secondary' type='submit'>
                    SUBMIT
                </button>
            </div>
        </form>
    </div>
  )
}

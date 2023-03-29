import React from 'react'

function Book(props) {
  return (
    <div>
        <center>
        {props.name} by {props.author}
        </center>
    </div>
  )
}

export default Book

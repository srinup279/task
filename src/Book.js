import React from 'react'

function Book(props) {
    return (
        <div>
            {/* {JSON.stringify(props)} */}
            <h1>{props.isbn}</h1>
            <h2>{props.title}</h2>
            <h4>Number of Pages : {props.number_of_pages}</h4>
            <h2>Table of Contents</h2>
            <ul>
                {
                    props.table_of_contents.map(item=>
                          <li key={item.level}>{item.title}</li>
                        )
                }
            </ul>
        </div>
    )
}

export default Book

import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Book from './Book'

const url = "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json"

function App() {
  const [isbn, setIsbn] = useState("")
  const [state, setState] = useState({})
  const [loader, setLoader] = useState(false)
  
  const loadall = () =>{
     setLoader(true)
     axios.get(url)
     .then(res => res.data)
     .then(data =>{
       if(Object.keys(data).length>0){
         setIsbn(Object.keys(data)[0])
         setState(data[Object.keys(data)[0]])
         setLoader(false)
         console.log(data[Object.keys(data)[0]])
       }
     })
     .catch(error =>console.log(error))
  }

  useEffect(loadall,[])

  if(loader){
    return(
       <div>
         <h1>Loading....</h1>
       </div>      
    )
  }
  else{
    return(
      <Book isbn={isbn} {...state
      }/>
    )
  }
}

export default App;


import { useState } from 'react'
import Header from "./assets/components/Header"
import NoteInput from "./assets/components/NoteInput"
import Note from "./assets/components/Note"
import Footer from "./assets/components/Footer"
function App() {
const [noteItems,setNoteItems] = useState([]);
function addNoteItem (noteItem : object)
{
setNoteItems((noteItems) => {
  
  return[...noteItems, noteItem]
})
}
function deleteNoteItem (id)
{
return setNoteItems(noteItems => noteItems.filter((noteItem,index)=> {return index !== id}))
}

  return (<div>
    <Header/> 
    <NoteInput  onAddNoteItem = {addNoteItem} />
   {noteItems.map( (noteItem,index) =><Note key = {index} id = {index} title = {noteItem.title} note = {noteItem.note} onDelete = {deleteNoteItem}/>)}
    <Footer/>
    </div>)

  return 
}

export default App

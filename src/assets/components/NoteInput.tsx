import { useState } from "react";
import "../../../public/styles/styles.css"
 import AddIcon from "@mui/icons-material/Add"
 import  Fab  from "@mui/material/Fab";
 import Zoom from "@mui/material/Zoom"
function NoteInput (props) {
const [noteItem, setNoteItem] = useState({ title:"", note : ""});
const [isExpanded, setIsExpanded] = useState(false);
function handleNoteItem (event)
{ const name = event.target.name;
    const value = event.target.value;
    setNoteItem(noteItem =>
    {
        if(name === "title"){
       return{...noteItem,
        title: value}}
        else{
        return{...noteItem,
        note: value}}
            
        }
    
    );
    console.log(noteItem);
}
function addNoteItem ()
{
    if(noteItem.note.trim() !== "" && noteItem.title.trim() !== "" )
    {
     
     props.onAddNoteItem(noteItem);
     setNoteItem({title:"", note : ""})


    }
}

    return(<div className="note-input-container"> <div id = "note-input"className="note">{isExpanded && <input onChange = {handleNoteItem}name = "title" className="noteInput" placeholder = "Title." value = {noteItem.title}/>}
       <textarea onClick= {()=> setIsExpanded(true)}className="noteInput" placeholder="Take a note..." name = "note" onChange={handleNoteItem} value ={noteItem.note}  rows = {isExpanded?3:1} />
       <Zoom in = {isExpanded}><Fab onClick = {addNoteItem}><AddIcon /></Fab></Zoom>
       </div> </div>)
}
export default NoteInput;
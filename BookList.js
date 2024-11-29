import BookListItems from "./BookListItems";
import React from "react";
function BookList (){
    let bookState = React.useState(['']);
    let count = bookState[0];
    let setCount = bookState[1]
    
    
    return(
        <>
        <ul>
            <BookListItems>{count}</BookListItems>
            
        </ul>
        <button onClick={()=>setCount(count+1)}>Add</button>
        </>
    );
}
export default BookList;
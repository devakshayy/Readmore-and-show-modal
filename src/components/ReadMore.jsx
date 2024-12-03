import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import ExpandCollapse from "./ExpandCollapse";

const paragraphStyle = {
  WebkitLineClamp:3,
  WebkitBoxOrient:'vertical',
  overflow:"hidden",
  display:"-webkit-box"
}

const ReadMore = () => {

    const [isOpen,setIsopen] = useState(false);
    const [showReadMore,setReadMore] = useState(false);
  
    const ref = useRef(null);
  
    useEffect(() => {
        if(ref.current){
          console.log(ref.current.scrollHeight,ref.current.clientHeight)
          setReadMore(
            ref.current.scrollHeight !== ref.current.clientHeight
          )
        }
    },[])
  
    return (
        <div className="flex">
         <div className="min-h-screen bg-slate-600  w-1/2  p-4">
           <h1 className="text-3xl font-semibold">This the tutorial for Read More button funtion working</h1>
           <br />
           <p
             className="text-white"
             style={isOpen?null:paragraphStyle}
             ref={ref}
             >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Suscipit, ipsam placeat fuga at expedita facilis quas earum           
             iste dolores praesentium repellendus numquam, nulla assumenda 
             itaque dolore, nobis accusamus laborum cupiditate?
             iste dolores praesentium repellendus numquam, nulla assumenda 
             itaque dolore, nobis accusamus laborum cupiditate?
             iste dolores praesentium repellendus numquam, nulla assumenda 
             itaque dolore, nobis accusamus laborum cupiditate?
             iste dolores praesentium repellendus numquam, nulla assumenda 
             itaque dolore, nobis accusamus laborum cupiditate?
           </p>
           <br />
           {showReadMore && <button 
              onClick={()=>setIsopen(!isOpen)}
              className="border-4
                     rounded-lg
                    border-blue-500
                    bg-slate-500
                    font-bold
                    px-2
                    " 
                   >{isOpen?'read less...':'read more...'}</button>}
         </div>   
         <ExpandCollapse/>
        </div>
     )
}

export default ReadMore


// after Implementing the useState and paraagraph style rendering thats enough but when the coming text will be 
// smaller than one line still the readmore shown than not Necessarly needed
// that because we use useRef
// so we want to desable the read more button when the text is 3 lines of text and not more than that! 
import React, { useState } from "react";
import { sculptureList } from "./GalleryData";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length -1;

  const handleNext = () => {
     hasNext ? setIndex(index + 1) : setIndex(0);
  };

  const handleShowMore = () => {
     setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <div className="w-full min-h-screen bg-gray-800 p-4 flex flex-col items-center text-white gap-2">
        <button
          onClick={handleNext}
          className="border-4
                     rounded-lg
                    border-blue-500
                    bg-slate-500
                    font-bold
                    text-black
                    px-2
                    "
        >
          Next
        </button>
        <h2>
          {" "}
           <i className="font-bold">{sculpture.name}</i> By {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button
          onClick={handleShowMore}
          className="border-4
                     rounded-lg
                    border-blue-500
                    bg-slate-500
                    font-bold
                    text-black
                    px-2
                    "
        >
          {showMore ? 'Hide': 'Show'} Details
        </button>
        <div className="w-[900px] h-[300px] flex flex-col items-center gap-3">
           {showMore && <p className="text-center">{sculpture.description}</p>}
          <img
            className="rounded-lg"
            src={sculpture.url}
            alt={sculpture.alt}
            width={380}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

// When the sculpture count is 12 the handleNext() function set index + 1 so,
// the index will be 13
// the next time we click the the next the hendleNext() function
//  (inside it the hasNext boolean value) it check index < sculptureListlength
//  that moment it shows it false ( 13 < 12 )
//  in that time the else condition set the index value into 0
//  this reapeat!!!

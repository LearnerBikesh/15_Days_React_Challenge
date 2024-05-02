import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 10 }) => {
  let [rating, setRating] = useState(0);
  let [currentHover, setCurrentHover] = useState(0);
  let newArray = [...Array(noOfStars)];
  return (
    <div className="h-screen w-full bg-slate-500 flex justify-center gap-2">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return <FaStar 
                key={index} 
                className={`text-2xl mt-5 ${index <= (currentHover) ? 'text-yellow-300' : 'text-gray-900'}`}
                onClick={()=>{setRating(index) }}
                onMouseMove={()=>{setCurrentHover(index) }}
                onMouseLeave={()=>{setCurrentHover(rating) }}
            />;
      })}
    </div>
  );
};

export default StarRating;

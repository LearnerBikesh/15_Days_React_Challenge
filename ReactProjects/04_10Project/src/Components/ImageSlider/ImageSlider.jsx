import React, { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCircleFill,
} from "react-icons/bs";

const imageListlider = ({ URL, page = 1, limit = 5 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    if (URL === "") return;
    fetchUrl(`${URL}?page=${page}&limit=${limit}`);
  }, [URL]);

  async function fetchUrl(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImageList(data);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  }
  const handleLeft = () => {
    currentImage === 0
      ? setCurrentImage(limit - 1)
      : setCurrentImage(currentImage - 1);
  };
  const handleRight = () => {
    currentImage === limit - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };

  return (
    <div className="w-full h-screen flex justify-center bg-slate-400 select-none">
      <div className="relative h-fit mt-10">
        <BsArrowLeftCircleFill
          className="absolute left-2 top-1/2 -translate-y-1/2  text-3xl text-white"
          onClick={handleLeft}
        />
        {imageList && imageList.length
          ? imageList.map((imageItem, index) => {
              return (
                <img
                  key={imageItem.id}
                  alt={imageItem.download_url}
                  src={imageItem.download_url}
                  className={`w-[500px] h-[300px]  ${
                    currentImage === index ? "" : "hidden"
                  } `}
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          className="absolute right-2 top-1/2 -translate-y-1/2  text-3xl text-white "
          onClick={handleRight}
        />

        <div className=" absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-1 text-white text-xs">
          {imageList && imageList.length
            ? imageList.map((_, index) => (
                <BsCircleFill className={`${currentImage === index ? 'text-gray-900' : ''}`} onClick={()=>{setCurrentImage(index)}}/>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default imageListlider;

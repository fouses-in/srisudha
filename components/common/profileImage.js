import React, { useRef, useState } from "react";
import ImageFile from "../tabs/imageFile";

function PickProfileImage({
  changeFile,
  image,
  setError,
  label = "Choose Profile Image",
}) {
  const [loading, setLoading] = useState(false);
  const fileInput = useRef(null);

  const handleFileChange = (event, selected) => {
    const { target } = event;
    const { files } = target;
    console.log("event", event, selected);
    if (files && files[0]) {
      var reader = new FileReader();

      reader.onloadstart = () => setLoading(true);

      reader.onload = (event) => {
        // setData(event.target.result)
        console.log("filetype");

        if (files[0].type.split("/")[0] == "image") {
          changeFile(event.target.result, files[0]);
        } else {
          setError && setError("Oops! You can only upload images");
        }

        setLoading(false);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="flex gap-2 flex-col items-start ">
      <div className="  ml-1 text-gray-600  text-start text-sm ">{label}</div>
      <div
        onClick={() => fileInput.current.click()}
        className={`flex gap-4  bg-white  flex-shrink-0  h-10 w-full pl-3  items-center overflow-hidden rounded-md pr-2 font-light  text-black text-opacity-90   text-base border-1px`}
      >
        <input
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          className=" hidden"
        />
        <h1
          className={`flex-1 w-full text-ellipsis truncate text-start  ${
            image != null
              ? "text-sm"
              : "text-opacity-40 text-gray-600 font-light text-base"
          }`}
        >
          {image != null ? image.url ?? image.file?.name : label}
        </h1>
        <div className="flex items-center justify-center">
          <ImageFile className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default PickProfileImage;

import React, { useRef, useState } from "react";

function PickImage({
  index,
  changeFile,
  profileUri,
  fit = "cover",
  children,
  data,
  className = "",
  setError,
}) {
  const [loading, setLoading] = useState(false);
  const fileInput = useRef(null);
  console.log("profileuri", profileUri);

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
        changeFile(event.target.result, files[0]);
        // if (files[0].type.split("/")[0] == "image") {

        // } else {
        //   setError && setError("Oops! You can only upload images");
        // }

        setLoading(false);
      };

      reader.readAsDataURL(files[0]);
    }
  };
  const backgroundImage =
    data || profileUri
      ? {
          backgroundImage: `url(${
            data ? data : `${process.env.BUCKET_URL}/${profileUri}`
          })`,
        }
      : null;
  return (
    <div
      className={`flex  items-center justify-center cursor-pointer ${className}`}
      key={index}
      style={backgroundImage}
      onClick={() => fileInput.current.click()}
    >
      <input
        ref={fileInput}
        onChange={handleFileChange}
        type="file"
        className=" hidden"
      />
      {!data && !profileUri && children}
    </div>
  );
}

export default PickImage;

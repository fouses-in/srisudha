function downloadImage(url, name) {
  fetch(`${process.env.BUCKET_URL}/${url}`)
    .then((resp) => resp.blob())
    .then((blob) => {
      console.log("blob");
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.log(err);
      alert("An error sorry");
    });
}

export default downloadImage;

const urlBackgroundInput = document.querySelector("#background-url-input");

urlBackgroundInput.addEventListener("input", () => {
  console.log("input");
  document.body.style[
    "background-image"
  ] = `url("${urlBackgroundInput.value}")`;
});

const lights = document.querySelectorAll(".light");

lights.forEach((light) => {
  light.addEventListener("click", () => {
    light.classList.toggle("on");
    light.classList.toggle("off");
  });
});

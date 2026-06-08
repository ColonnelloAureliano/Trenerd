const TARGET = "1100111";

const lights = Array.from(document.querySelectorAll(".light"));
const binaryReadout = document.getElementById("binaryReadout");
const secretScreen = document.getElementById("secretScreen");

function getCurrentBinary() {
  return lights
    .map((light) => (light.classList.contains("on") ? "1" : "0"))
    .join("");
}

function updateReadout() {
  const current = getCurrentBinary();
  binaryReadout.textContent = current;
  checkSecret(current);
}

function checkSecret(current) {
  if (current === TARGET) {
    document.body.classList.add("unlocked");

    setTimeout(() => {
      secretScreen.classList.add("show");
      secretScreen.setAttribute("aria-hidden", "false");
    }, 350);
  }
}

lights.forEach((light) => {
  light.addEventListener("click", () => {
    if (document.body.classList.contains("unlocked")) return;

    light.classList.toggle("on");
    light.classList.toggle("off");

    updateReadout();
  });
});

// Stato iniziale
updateReadout();

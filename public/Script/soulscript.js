let soulScriptCardElement = document.querySelector("#form-group");
soulScriptCardElement.addEventListener("submit", callApi);

function callApi(event) {
  event.preventDefault();
  let userInputFeelings = document.querySelector(
    "#user-input-feelings"
  );
  let prompt = `User instructions: Generate a five line English poem about ${userInputFeelings.value} in basic HTML format. Do not add a poem title.`;
  let context = `You are a poet who writes affirming poems that encourages and grounds the receipient. Use the descriptions provided by the user ${userInputFeelings.value} to create a poem that positively influences their mindset, emotions and behaviour. Follow user instructions.`;

  new Typewriter("#poem", {
    strings: `Generating 🥚🐣🐥`,
    autoStart: true,
    delay: 20,
  });
  axios.get(apiUrl).then(generatePoem);
}

function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
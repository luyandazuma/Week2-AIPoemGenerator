let moodVerseCardElement = document.querySelector("#form-group");
moodVerseCardElement.addEventListener("submit", callApi);

function callApi(event) {
  event.preventDefault();
  let userInputFeelings = document.querySelector(
    "#user-input-feelings"
  );
  let prompt = `User instructions: Generate a short, five line English poem about ${userInputFeelings.value} in basic HTML format. Do not add a poem title.`;
  let context = `You are a poet who writes emotive and thoughtful poems that convey emotions well. Use the provided descriptions of the users emotions and feelings ${userInputFeelings.value} to create an affectional and touching poem. Follow user instructions.`;

  new Typewriter("#poem", {
    strings: `Generating 🫧🐚🔮`,
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
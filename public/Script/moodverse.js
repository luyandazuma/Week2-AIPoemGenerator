let moodVerseCardElement = document.querySelector("#form-group");
moodVerseCardElement.addEventListener("submit", callApi);

function callApi(event) {
  event.preventDefault();
  let apiKey = "a3f9ff86f4t0ab9cb";
  let userInputFeelings = document.querySelector(
    "#user-input-feelings"
  );
  let prompt = `User instructions: Generate a five line English poem about ${userInputFeelings.value} in basic HTML format. Do not add a poem title.`;
  let context = `You are a poet who writes emotive and thoughtful poeams that convey emotions well. Use the provided product details ${userProductDetails.value} to create an affective and touching poem based on user descriptions of their emotions and feelings. Follow user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  new Typewriter("#poem", {
    strings: `⏳Generating...`,
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
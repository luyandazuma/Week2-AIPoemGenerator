let loveLinesCardElement = document.querySelector("#form-group");
loveLinesCardElement.addEventListener("submit", callApi);

function callApi(event) {
  event.preventDefault();
  let userInputFeelings = document.querySelector(
    "#user-input-feelings"
  );
  let prompt = `User instructions: Generate a short 5 line English poem about ${userInputFeelings.value} in basic HTLM format. Do not add a title of the poem.`;
  let context = `You are a love poem expert from Paris, France. You like writing romantic, loving, and sweet poems. Use the provided description of the user's feelings and emotions ${userInputFeelings.value} to create an inspiring and sweet love poem. Follow user instructions.`;

  new Typewriter("#poem", {
    strings: `Generating a love poem for you 🩷💞💌`,
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
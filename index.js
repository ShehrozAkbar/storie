const madLibs = document.getElementById("madlibs");
const storyPart = document.getElementById("article");

const createMadLibs = (event) => {
  let noun1txt = document.querySelector("#noun_1").value;
  let nationalitytxt = document.querySelector("#nationality");
  let adjective1txt = document.querySelector("#adjective_1").value;
  let verb1txt = document.querySelector("#verb_1word");
  let adjective2txt = document.querySelector("#adjective_2word");
  let noun2txt = document.querySelector("#noun_2word");
  let number1txt = document.querySelector("#number_1word");
  let number2txt = document.querySelector("#number_2word");
  let noun3txt = document.querySelector("#noun_3word");
  let verb2txt = document.querySelector("#verb_2word");
  let adjective3txt = document.querySelector("#adjective_3word");

  const badWords = [
    "ass",
    "ass-fucker",
    "asses",
    "assfucker",
    "assfukka",
    "asshole",
    "assholes",
    "asswhole",
    "bitch",
    "bitcher",
    "porno",
    "pornography",
    "pussi",
    "pussies",
    "pussy",
    "rimming",
    "scrotum",
    "semen",
    "slut",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "son-of-a-bitch",
    "vagina",
    "viagra",
    "vulva",
  ];
  let bad = true;
  for (let i = 0; i < badWords.length; i++) {
    // if user don't enter all the filds with appropriate words
    if (
      noun1txt == badWords[i] ||
      nationalitytxt == badWords[i] ||
      adjective1txt == badWords[i] ||
      verb1txt == badWords[i] ||
      adjective2txt == badWords[i] ||
      noun2txt == badWords[i] ||
      number1txt == badWords[i] ||
      number2txt == badWords[i] ||
      noun3txt == badWords[i] ||
      verb2txt == badWords[i] ||
      adjective3txt == badWords[i]
    ) {
      bad = true;
      break;
    } else {
      bad = false;
    }
  }
  if (bad) {
    alert("Please don't use bad words");
  }
  //required to prevent the form from reloading on submit
  else {
    event.preventDefault();
    madLibs.classList.add("hidden");

    const form = new FormData(event.target);
    const playStory = Object.fromEntries(form);

    const history = `
    <h2>Full story</h2>
    <p class="result"> A <span class="addText">${playStory.noun_1}</span> is a type of large tree found in <span class="addText">${playStory.nationality}</span>. It is a <span class="addText">${playStory.adjective_1}</span> tree in the Bombacaceae family. It has adapted to <span class="addText">${playStory.verb_1}</span> in extreme environments ranging from a very <span class="addText">${playStory.adjective_2}</span> wet season to a very arid dry season. Baobabs can live for <span class="addText">${playStory.noun_2}</span> of years and can measure up to <span class="addText">${playStory.number_1}</span> meters in height and <span class="addText">${playStory.number_2}</span> meters  in trunk diameter. Their <span class="addText">${playStory.noun_3}</span> have various food and cosmetic uses. They are unique in that during the dry season, they <span class="addText">${playStory.verb_2}</span> their leaves and store large quantities of water in their trunk. A baobab can hold up to 100,000 liters of water, and in the <span class="addText">${playStory.adjective_3}</span> season people take water from the trunk.</p>`;
    storyPart.innerHTML += history;
    storyPart.classList.remove("hidden");

    const resetButton = `
          <button class="reset" onclick="reset()">Reset</button>
      `;
    storyPart.innerHTML += resetButton;
  }
};

const reset = () => {
  storyPart.classList.add("hidden");
  storyPart.innerHTML = "";
  madLibs.reset();
  madLibs.classList.remove("hidden");
};

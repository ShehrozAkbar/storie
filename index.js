const madLibs = document.getElementById("madlibs");
const storyPart = document.getElementById("article");

const createMadLibs = (event) => {
  //required to prevent the form from reloading on submit
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
};

const reset = () => {
  storyPart.classList.add("hidden");
  storyPart.innerHTML = "";
  madLibs.reset();
  madLibs.classList.remove("hidden");
};

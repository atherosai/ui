const actionList = [
  {
    name: "New document",
    description: "Create a brand new document",
    // icon in svg
    link: "/#new-document",
  },
  // action list
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

const displayResults = (result, input) => {
  if (result.length > 0) {
    const resultHTML = result.map((action) => {
      return `<li><a href="${action.link}">${action.icon}${action.name}</a></li>`;
    });

    return (resultBox.innerHTML = "<ul>" + resultHTML.join("") + "</ul>");
  }

  return (resultBox.innerHTML = `<div class="container">
      <div class="icon-wrapper">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
      </div>
      <p>${input} did not match any results.</p>
    </div>`);
};

inputBox.onkeyup = () => {
  let result = [];

  const input = inputBox.value.toLowerCase();
  if (input.length === 0) {
    resultBox.innerHTML = ``;
  }

  if (input.length) {
    result = actionList.filter((action) => {
      return action.name.toLowerCase().includes(input);
    });

    displayResults(result, input);
  }
};

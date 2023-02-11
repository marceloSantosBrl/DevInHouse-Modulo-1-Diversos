const fetchCharacthers = async (page) => {
  const rawData = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const characthersJson = await rawData.json();
  const returnObject = {};
  characthersJson
    .results
    .forEach((element) => { returnObject[element.name] = element.image; });
  return returnObject;
};

const insertPairNode = (pair, node) => {
  const childNode = document.createElement('li');
  const imageChild = document.createElement('img');
  const textChild = document.createElement('p');
  imageChild.setAttribute('src', pair[1]);
  textChild.innerText = pair[0];
  childNode.append(imageChild, textChild);
  node.append(childNode);
};

const insertCharachtersNode = (obj, node) => {
  Object.entries(obj).forEach((pair) => insertPairNode(pair, node));
};

const renderPage = async (pageNumber) => {
  const obj = await fetchCharacthers(pageNumber);
  const output = document.getElementById('output-ul');
  output.innerHTML = '';
  insertCharachtersNode(obj, output);
};

let currentPage = 1;
renderPage(currentPage);

const nextButtonFunction = () => {
  currentPage += 1;
  renderPage(currentPage);
};

const previousButtonFunction = () => {
  if (currentPage !== 1) {
    currentPage -= 1;
    renderPage(currentPage);
  }
};

const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', previousButtonFunction);

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', nextButtonFunction);

const fetchCharacthers = async () => {
  const rawData = await fetch('https://rickandmortyapi.com/api/character');
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

const main = async () => {
  const obj = await fetchCharacthers();
  const output = document.getElementById('output-ul');
  insertCharachtersNode(obj, output);
};

main();

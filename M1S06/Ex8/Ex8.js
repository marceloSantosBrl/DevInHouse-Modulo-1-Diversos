const fetchUsersData = async (userNumber) => {
  const rawData = await fetch(`https://randomuser.me/api/?results=${userNumber}`);
  const rawJson = await rawData.json();
  return rawJson.results.map((element) => ({
    picture: element.picture.large,
    name: `Nome: ${element.name.title} ${element.name.first} ${element.name.last}`,
    email: `Email: ${element.email}`,
    address: `Endereço: ${element.location.street.name}, numero ${element.location.street.number}`
    + `, ${element.location.city}, ${element.location.state}, ${element.location.country}`,
  }));
};

const createUserCard = (obj) => {
  const elementArray = Object.keys(obj).map((element) => {
    const listItem = document.createElement('li');
    switch (element) {
      case 'picture': {
        const el = document.createElement('img');
        el.setAttribute('src', obj[element]);
        listItem.append(el);
        break; }
      case 'name':
      case 'email':
      case 'address': {
        const el = document.createElement('p');
        el.innerText = obj[element];
        listItem.append(el);
        break; }
      default:
        break;
    }
    return listItem;
  });
  return elementArray;
};

const main = async () => {
  const data = await fetchUsersData(5);
  const mainElement = document.getElementById('main');
  data.forEach((element) => {
    const liElements = createUserCard(element);
    const ulElement = document.createElement('ul');
    ulElement.append(...liElements);
    mainElement.append(ulElement);
  });
};

main();

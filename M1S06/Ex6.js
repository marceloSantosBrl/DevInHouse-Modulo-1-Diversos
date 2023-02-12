const imprimirPessoa = async (nome) => {
  const params = new URLSearchParams({ name: nome, country_id: 'BR' });
  const url = `https://api.agify.io/?${params}`;
  const promessaDados = await fetch(url);
  const objetoDados = await promessaDados.json();
  console.log(`A idade media do nome ${nome} é de ${objetoDados.age} anos`);
};

imprimirPessoa('marcelo');

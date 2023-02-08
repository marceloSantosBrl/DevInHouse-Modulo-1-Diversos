const imprimirPessoa = async (nome) => {
  const params = new URLSearchParams({ name: nome, id: 'BR' });
  const promessaDados = await fetch(`https://api.agify.io?${params}`);
  const objetoDados = await promessaDados.json();
  console.log(`A idade media do nome ${nome} é de ${objetoDados.age} anos`);
};

imprimirPessoa('marcelo');

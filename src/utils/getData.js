const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API;
  try {
    const datos = await fetch(apiUrl);
    const data = await datos.json();
    return data;
  } catch (error) {
    console.log("Feach Error", error);
  }
};

export default getData;

import getData from "../utils/getData";

const Home = async () => {
  const data = await getData();
  const view = `
    <div class="characters">
    ${data.results
      .map(
        (item) =>
          ` <article class="characters-item">
        <a href="#/${item.id}/">
          <img src="${item.image}" alt="${item.name}" />
          <h2>${item.name}</h2>
        </a>
      </article>`
      )
      .join("")}       
    </div>
    
    `;

  return view;
};

export default Home;

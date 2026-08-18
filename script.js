const roads = [{"code":"SP-008","name":"Bragança Paulista / Socorro","route":"Divisa MG – Atibaia – Bragança Paulista – Socorro","type":"transversal"},{"code":"SP-010","name":"Fernão Dias","route":"Divisa MG – Atibaia – Via Fernão Dias","type":"radial"},{"code":"SP-023","name":"Mairiporã","route":"SP-332 – Franco da Rocha – Mairiporã – BR-381","type":"radial"},{"code":"SP-029","name":"Itapevi","route":"SP-280 – Itapevi – SP-270 (Cotia)","type":"radial"},{"code":"SP-050","name":"Campos do Jordão","route":"São José dos Campos – Monteiro Lobato – Campos do Jordão","type":"radial"},{"code":"SP-055","name":"Padre Anchieta / Rio-Santos","route":"Ubatuba – São Sebastião – Cubatão – Itanhaém – BR-116","type":"litoral"},{"code":"SP-063","name":"Itatiba – Bragança Paulista","route":"Louveira – Itatiba – Bragança Paulista – Piracaia","type":"interior"},{"code":"SP-065","name":"Dom Pedro I","route":"Jacareí – Nazaré Paulista – Atibaia – Campinas – SP-330","type":"transversal"},{"code":"SP-066","name":"São José dos Campos","route":"Suzano – Mogi das Cruzes – Jacareí – São José dos Campos","type":"radial"},{"code":"SP-070","name":"Ayrton Senna / Carvalho Pinto","route":"São Paulo – Itaquaquecetuba – Jacareí – Taubaté","type":"radial"},{"code":"SP-075","name":"Santos Dumont","route":"Sorocaba – Salto – Indaiatuba – Campinas","type":"interior"},{"code":"SP-079","name":"Tenente Celestino Amaro","route":"Salto – Sorocaba – Tapiraí – Juquiá","type":"interior"},{"code":"SP-088","name":"Mogi-Salesópolis","route":"Arujá – Mogi das Cruzes – Salesópolis – SP-099","type":"transversal"},{"code":"SP-095","name":"Bragança Paulista – Amparo","route":"Bragança Paulista – Amparo – Jaguariúna – SP-340","type":"interior"},{"code":"SP-098","name":"Mogi-Bertioga","route":"Mogi das Cruzes – Biritiba Ussu – Bertioga","type":"litoral"},{"code":"SP-099","name":"Tamoios","route":"São José dos Campos – Paraibuna – Caraguatatuba","type":"litoral"},{"code":"SP-123","name":"Floriano Rodrigues Pinheiro","route":"Taubaté – Campos do Jordão","type":"radial"},{"code":"SP-125","name":"Oswaldo Cruz","route":"Taubaté – São Luiz do Paraitinga – Ubatuba","type":"litoral"},{"code":"SP-127","name":"Fausto Santomauro","route":"Rio Claro – Piracicaba – Tietê – Itapetininga – Capão Bonito","type":"interior"},{"code":"SP-129","name":"Boituva – Tatuí","route":"Porto Feliz – Boituva – Tatuí – Itapetininga","type":"interior"},{"code":"SP-139","name":"Nequinho Fogaça","route":"Registro – São Miguel Arcanjo – SP-127","type":"interior"},{"code":"SP-141","name":"Francisco da Silva Pontes","route":"SP-270 – Capela do Alto – Tatuí – Cesário Lange – Bofete","type":"interior"},{"code":"SP-147","name":"Engenheiro João Tosello","route":"Socorro – Mogi Mirim – Limeira – Piracicaba – SP-300","type":"interior"},{"code":"SP-150","name":"Anchieta","route":"São Paulo – Santos","type":"litoral"},{"code":"SP-160","name":"Imigrantes","route":"São Paulo – São Vicente","type":"litoral"},{"code":"SP-165","name":"Juquiá – Apiaí","route":"Juquiá – Sete Barras – Eldorado – Iporanga – Apiaí","type":"interior"},{"code":"SP-171","name":"Paulo Virgínio","route":"Guaratinguetá – Cunha – Divisa RJ","type":"transversal"},{"code":"SP-191","name":"Wilson Finardi","route":"Mogi Mirim – Araras – São Pedro – São Manuel","type":"interior"},{"code":"SP-222","name":"Prefeito Casemiro Teixeira","route":"Iguape – Pariquera-Açu – Jacupiranga","type":"litoral"},{"code":"SP-225","name":"Comandante João Ribeiro de Barros","route":"Aguaí – Analândia – Brotas – Jaú – Piratininga – SP-270","type":"interior"},{"code":"SP-230","name":"Régis Bittencourt","route":"São Paulo – Registro – Divisa PR","type":"radial"},{"code":"SP-250","name":"Bunjiro Nakao","route":"Vargem Grande Paulista – Ibiúna – Capão Bonito – Ribeira","type":"interior"},{"code":"SP-255","name":"Comendador João Ribeiro de Barros","route":"Ribeirão Preto – Araraquara – Avaré – SP-281","type":"interior"},{"code":"SP-258","name":"Francisco Alves Negrão","route":"Capão Bonito – Itapeva – Itararé – Divisa PR","type":"interior"},{"code":"SP-261","name":"Osni Mateus","route":"SP-270 – Cerqueira César – Lençóis Paulista – Pederneiras – Bariri","type":"interior"},{"code":"SP-264","name":"Emerenciano Prestes de Barros","route":"Sorocaba – Salto de Pirapora – Pilar do Sul","type":"interior"},{"code":"SP-270","name":"Raposo Tavares","route":"São Paulo – Sorocaba – Ourinhos – Assis – Presidente Prudente – Divisa MS","type":"radial"},{"code":"SP-280","name":"Castello Branco","route":"São Paulo – Itu – Tatuí – SP-225 (Espírito Santo do Turvo)","type":"radial"},{"code":"SP-294","name":"Comandante João Ribeiro de Barros","route":"Bauru – Marília – Tupã – Pacaembu – Panorama","type":"interior"},{"code":"SP-300","name":"Marechal Rondon","route":"Jundiaí – Itu – Tietê – Bauru – Araçatuba – Andradina – Divisa MS","type":"radial"},{"code":"SP-304","name":"Luiz de Queiroz","route":"Americana – Jaú – Novo Horizonte – SP-425","type":"interior"},{"code":"SP-308","name":"Rodovia do Açúcar","route":"Salto – Capivari – Piracicaba – SP-191","type":"interior"},{"code":"SP-310","name":"Washington Luís","route":"Limeira – Araraquara – São José do Rio Preto – Pereira Barreto – Divisa MS","type":"radial"},{"code":"SP-312","name":"Castelo Branco / Barueri","route":"Osasco – Carapicuíba – Barueri – Santana de Parnaíba – SP-300","type":"radial"},{"code":"SP-320","name":"Euclides da Cunha","route":"Mirassol – Votuporanga – Fernandópolis – Santa Fé do Sul – Divisa MS","type":"interior"},{"code":"SP-321","name":"Feliciano Sales Cunha","route":"Bauru – Novo Horizonte – Catanduva","type":"interior"},{"code":"SP-322","name":"Armando de Salles Oliveira","route":"Ribeirão Preto – Sertãozinho – Bebedouro – SP-461","type":"interior"},{"code":"SP-326","name":"Brigadeiro Faria Lima","route":"SP-310 – Matão – Jaboticabal – Barretos – Divisa MG","type":"interior"},{"code":"SP-330","name":"Anhanguera","route":"São Paulo – Jundiaí – Campinas – Ribeirão Preto – Divisa MG","type":"radial"},{"code":"SP-348","name":"Bandeirantes","route":"São Paulo – Jundiaí – Campinas – Limeira","type":"radial"},{"code":"SP-360","name":"Engenheiro Constâncio Cintra","route":"Jundiaí – Itatiba – Amparo – Águas de Lindóia","type":"interior"},{"code":"SP-425","name":"Assis Chateaubriand","route":"Miguelópolis – São José do Rio Preto – Presidente Prudente – Divisa PR","type":"interior"},{"code":"SP-463","name":"Eliezer Montenegro Magalhães","route":"Araçatuba – Jales – SP-543","type":"interior"},{"code":"SP-015","name":"Marginais / Cebolão","route":"Cebolão – Ponte do Morumbi – Cebolão – SP-070","type":"radial"},{"code":"SP-019","name":"Guarulhos","route":"SP-070 – BR-116 (Cumbica)","type":"radial"},{"code":"SP-031","name":"Ribeirão Pires – Suzano","route":"SP-148 – Ribeirão Pires – SP-066","type":"transversal"},{"code":"SP-036","name":"Nazaré Paulista","route":"Cumbica – Nazaré Paulista – Piracaia – Joanópolis","type":"transversal"},{"code":"SP-039","name":"Jundiapeba – Taiaçupeba","route":"SP-066 – SP-043","type":"transversal"},{"code":"SP-042","name":"São Bento do Sapucaí","route":"SP-050 – Divisa MG – São Bento do Sapucaí","type":"transversal"},{"code":"SP-043","name":"Taiaçupeba","route":"SP-031 – SP-102","type":"transversal"},{"code":"SP-046","name":"Santo Antônio do Pinhal","route":"SP-050 – Santo Antônio do Pinhal – SP-123","type":"transversal"},{"code":"SP-048","name":"Piquete","route":"Divisa MG – Piquete – Via Dutra","type":"transversal"},{"code":"SP-052","name":"Cruzeiro","route":"SP-058 – Divisa MG","type":"transversal"},{"code":"SP-054","name":"Queluz","route":"BR-116 – Divisa RJ","type":"transversal"},{"code":"SP-056","name":"Arujá – Igaratá","route":"Itaquaquecetuba – Arujá – Santa Isabel – Igaratá","type":"transversal"},{"code":"SP-058","name":"Cruzeiro","route":"Cachoeira Paulista – Cruzeiro – BR-116","type":"transversal"},{"code":"SP-061","name":"Guarujá – Bertioga","route":"Guarujá – Bertioga","type":"litoral"},{"code":"SP-062","name":"Taubaté – Aparecida","route":"Eugênio de Melo – Taubaté – Aparecida – Cachoeira Paulista","type":"radial"},{"code":"SP-068","name":"Bananal","route":"Cachoeira Paulista – Areias – Bananal – Divisa RJ","type":"transversal"},{"code":"SP-071","name":"Itu – Salto","route":"Via Expressa ligando Itu – Salto","type":"interior"},{"code":"SP-073","name":"Campinas – Indaiatuba","route":"Campinas – Indaiatuba","type":"interior"},{"code":"SP-077","name":"Santa Branca","route":"Jacareí – Santa Branca – SP-088","type":"transversal"},{"code":"SP-081","name":"Sousas","route":"Campinas – Sousas – Cabras","type":"interior"},{"code":"SP-083","name":"Interligação Campinas","route":"Campinas – SP-330 – SP-340","type":"interior"},{"code":"SP-091","name":"Valinhos – Campinas","route":"Valinhos – Campinas","type":"interior"},{"code":"SP-092","name":"Biritiba-Mirim","route":"SP-088 – Casa Grande","type":"interior"},{"code":"SP-101","name":"Campinas – Capivari","route":"Campinas – Monte Mor – Capivari – SP-127","type":"interior"},{"code":"SP-103","name":"Jambeiro","route":"Caçapava – Jambeiro – SP-099","type":"transversal"},{"code":"SP-105","name":"Serra Negra","route":"Serra Negra – Brumado – SP-352","type":"interior"},{"code":"SP-107","name":"Pedreira – Artur Nogueira","route":"Pedreira – Santo Antônio de Posse – Artur Nogueira","type":"interior"},{"code":"SP-113","name":"Tietê – Rafard","route":"SP-300 – SP-101","type":"interior"},{"code":"SP-121","name":"Redenção da Serra","route":"SP-125 – Redenção da Serra – Natividade da Serra","type":"interior"},{"code":"SP-122","name":"Paranapiacaba","route":"Ribeirão Pires – Paranapiacaba","type":"litoral"},{"code":"SP-132","name":"Pindamonhangaba","route":"Pindamonhangaba – SP-123","type":"transversal"},{"code":"SP-133","name":"Cosmópolis","route":"SP-330 – SP-332","type":"interior"},{"code":"SP-135","name":"Santa Bárbara – Piracicaba","route":"Santa Bárbara d'Oeste – Piracicaba","type":"interior"},{"code":"SP-143","name":"Cesário Lange – Pereiras","route":"SP-141 – SP-300","type":"interior"},{"code":"SP-148","name":"Cubatão","route":"Riacho Grande – Cubatão","type":"litoral"},{"code":"SP-151","name":"Limeira – Iracemápolis","route":"SP-147 – Limeira – Iracemápolis – SP-127","type":"interior"},{"code":"SP-153","name":"Lagoinha","route":"São Luiz do Paraitinga – Lagoinha – SP-171","type":"interior"},{"code":"SP-157","name":"Guareí","route":"Itapetininga – Guareí – SP-280","type":"interior"},{"code":"SP-167","name":"Mogi Mirim – Mogi Guaçu","route":"Mogi Mirim – Mogi Guaçu","type":"interior"},{"code":"SP-176","name":"Diadema","route":"Divisa SP/Diadema – Acampamento Engenheiros","type":"radial"},{"code":"SP-181","name":"Capão Bonito","route":"SP-250 – Sumidouro","type":"interior"},{"code":"SP-183","name":"Piquete – Cachoeira Paulista","route":"BR-459 – Vila Embaú","type":"transversal"},{"code":"SP-189","name":"Angatuba – Buri","route":"SP-270 – Buri","type":"interior"},{"code":"SP-193","name":"Eldorado – Jacupiranga","route":"Eldorado – Jacupiranga – SP-226","type":"interior"},{"code":"SP-197","name":"Brotas – Torrinha","route":"SP-225 – SP-304","type":"interior"},{"code":"SP-201","name":"Pirassununga","route":"Pirassununga – Santa Cruz das Palmeiras","type":"interior"},{"code":"SP-207","name":"São Sebastião da Grama","route":"SP-344 – SP-350 – SP-340","type":"interior"},{"code":"SP-209","name":"Botucatu","route":"SP-280 – SP-300","type":"interior"},{"code":"SP-211","name":"Divinolândia","route":"SP-207 – SP-344","type":"interior"},{"code":"SP-214","name":"Embu-Guaçu","route":"Divisa São Paulo – Embu-Guaçu – Santa Rita","type":"radial"},{"code":"SP-215","name":"Vargem Grande do Sul – São Carlos","route":"Vargem Grande do Sul – Porto Ferreira – São Carlos","type":"interior"},{"code":"SP-216","name":"Embu-Guaçu – Mina de Ouro","route":"Embu-Guaçu – Mina de Ouro","type":"radial"},{"code":"SP-221","name":"São José do Barreiro","route":"Bananal – Parque Nacional da Bocaina","type":"transversal"},{"code":"SP-226","name":"Cananéia","route":"Pariquera-Açu – Cananéia","type":"litoral"},{"code":"SP-228","name":"Itapecerica da Serra","route":"Itapecerica da Serra – BR-116","type":"radial"},{"code":"SP-234","name":"Itapecerica da Serra","route":"BR-116 – Itapecerica da Serra – SP-214","type":"radial"},{"code":"SP-245","name":"Avaré – Cerqueira César","route":"Avaré – Cerqueira César","type":"interior"},{"code":"SP-247","name":"Bananal – Bocaina","route":"Bananal – Sertão da Bocaina – Divisa RJ","type":"transversal"},{"code":"SP-249","name":"Apiaí – Fartura","route":"Apiaí – Ribeirão Branco – Itapeva – Fartura – Divisa PR","type":"interior"},{"code":"SP-251","name":"Avaré – São Manuel – Jaú","route":"Avaré – São Manuel – Jaú","type":"interior"},{"code":"SP-252","name":"Guapiara – Ribeirão Branco","route":"Guapiara – Ribeirão Branco","type":"interior"},{"code":"SP-253","name":"Caconde – Luiz Antônio","route":"Caconde – São Sebastião da Grama – Luiz Antônio – Pradópolis","type":"interior"},{"code":"SP-257","name":"Américo Brasiliense","route":"Américo Brasiliense – Rincão","type":"interior"},{"code":"SP-259","name":"Itararé","route":"Bairro Capelinha – Itararé","type":"interior"},{"code":"SP-266","name":"Cândido Mota – Florínea","route":"SP-270 – Cândido Mota – Florínea","type":"interior"},{"code":"SP-267","name":"Itaberá – Engenheiro Maia","route":"Itaberá – Engenheiro Maia","type":"interior"},{"code":"SP-268","name":"Araçoiaba – Paranapanema","route":"SP-270 – Itapetininga – Angatuba – Paranapanema – Itaí","type":"interior"},{"code":"SP-271","name":"Cravinhos – Serrana","route":"Cravinhos – Serrana","type":"interior"},{"code":"SP-272","name":"Pirapozinho – Mirante","route":"Pirapozinho – Mirante do Paranapanema – SP-563","type":"interior"},{"code":"SP-273","name":"Agudos","route":"Agudos – Ribeirão do Barreiro","type":"interior"},{"code":"SP-274","name":"Barueri – Itapevi","route":"Barueri – Itapevi – SP-270","type":"radial"},{"code":"SP-275","name":"Itaberá – Barbosas","route":"Itaberá – Barbosas","type":"interior"},{"code":"SP-276","name":"Chavantes – Divisa PR","route":"Chavantes – Divisa PR","type":"interior"},{"code":"SP-278","name":"Ourinhos – Divisa PR","route":"Ourinhos – Divisa PR","type":"interior"},{"code":"SP-284","name":"Assis – Quatá","route":"Assis – Paraguaçu Paulista – Quatá – Martinópolis","type":"interior"},{"code":"SP-287","name":"Fartura – Óleo","route":"Fartura – Piraju – Manduri – Óleo","type":"interior"},{"code":"SP-291","name":"Ribeirão Preto – Pradópolis","route":"Ribeirão Preto – Dumont – Pradópolis","type":"interior"},{"code":"SP-293","name":"Cabrália Paulista – Duartina","route":"SP-225 – Cabrália Paulista – Duartina","type":"interior"},{"code":"SP-303","name":"Sarutaiá – Bernardino de Campos","route":"Sarutaiá – Timburi – SP-270","type":"interior"},{"code":"SP-305","name":"Jaboticabal – Monte Alto","route":"Jaboticabal – Monte Alto","type":"interior"},{"code":"SP-315","name":"Ubirajara – Duartina","route":"Ubirajara – Lucianópolis – Duartina","type":"interior"},{"code":"SP-316","name":"Cordeirópolis – Rio Claro","route":"SP-330 – Cordeirópolis – Rio Claro","type":"interior"},{"code":"SP-317","name":"Ibitinga – Itápolis","route":"Ibitinga – Itápolis – SP-333","type":"interior"},{"code":"SP-318","name":"São Carlos – SP-255","route":"São Carlos – SP-255","type":"interior"},{"code":"SP-319","name":"SP-310 – Taquaritinga","route":"SP-310 – SP-333","type":"interior"},{"code":"SP-324","name":"Vinhedo – Viracopos","route":"Vinhedo – Viracopos","type":"interior"},{"code":"SP-327","name":"Santa Cruz do Rio Pardo – Ourinhos","route":"SP-225 – Santa Cruz do Rio Pardo – SP-270","type":"interior"},{"code":"SP-331","name":"Ibitinga – Pirajuí","route":"Ibitinga – Pirajuí – Gália","type":"interior"},{"code":"SP-375","name":"Palmital","route":"Divisa PR – Palmital – SP-270","type":"interior"},{"code":"SP-377","name":"Monte Aprazível – Tanabi","route":"SP-310 – SP-320","type":"interior"},{"code":"SP-379","name":"Uchoa – Sales","route":"SP-310 – Ibirá – Urupês – Sales","type":"interior"},{"code":"SP-381","name":"Lins – Sabino","route":"Lins – Sabino","type":"interior"},{"code":"SP-383","name":"Herculândia – Queiroz","route":"Herculândia – Queiroz","type":"interior"},{"code":"SP-385","name":"Ituverava – Miguelópolis","route":"Ituverava – SP-425 – Miguelópolis","type":"interior"},{"code":"SP-387","name":"Transbrasiliana","route":"Divisa MG – Icém – Marília – Ourinhos","type":"interior"},{"code":"SP-413","name":"Volta Grande","route":"SP-425 – Usina Volta Grande – Divisa MG","type":"interior"},{"code":"SP-419","name":"Penápolis – Luiziânia","route":"Penápolis – Alto Alegre – Luiziânia","type":"interior"},{"code":"SP-421","name":"Paraguaçu Paulista – Iepê","route":"Paraguaçu Paulista – Iepê – Divisa PR","type":"interior"},{"code":"SP-423","name":"Nova Granada – Palestina","route":"BR-153 – Palestina","type":"interior"},{"code":"SP-427","name":"São José do Rio Preto – Mirassolândia","route":"São José do Rio Preto – Mirassolândia","type":"interior"},{"code":"SP-437","name":"Maracaí – São José das Laranjeiras","route":"Maracaí – São José das Laranjeiras","type":"interior"},{"code":"SP-457","name":"Iepê – Rancharia – Bastos","route":"Iepê – Rancharia – Bastos","type":"interior"},{"code":"SP-461","name":"Cardoso – Birigui","route":"Piacatu – Birigui – Nhandeara – Cardoso","type":"interior"},{"code":"SP-473","name":"Floreal – Nova Luzitânia","route":"Floreal – Gastão Vidigal – Nova Luzitânia","type":"interior"},{"code":"SP-479","name":"Simonsen – Pontes Gestal","route":"Simonsen – Américo de Campos – Pontes Gestal","type":"interior"},{"code":"SP-483","name":"Taciba","route":"SP-270 – Taciba","type":"interior"},{"code":"SP-487","name":"Indiana","route":"SP-270 – Indiana","type":"interior"},{"code":"SP-501","name":"Presidente Prudente – Santo Expedito","route":"Presidente Prudente – Santo Expedito – Irapuru","type":"interior"}];

const featuredCodes = ["SP-270", "SP-280", "SP-300", "SP-330", "SP-348", "SP-150", "SP-160", "SP-099"];
const featuredGrid = document.getElementById("featuredGrid");
const roadGrid = document.getElementById("roadGrid");
const roadSearch = document.getElementById("roadSearch");
const heroSearch = document.getElementById("heroSearch");
const typeFilter = document.getElementById("typeFilter");
const resultCount = document.getElementById("resultCount");
const totalRoads = document.getElementById("totalRoads");
const loadMore = document.getElementById("loadMore");
const clearFilters = document.getElementById("clearFilters");
const themeToggle = document.getElementById("themeToggle");

let visibleLimit = 18;

const typeLabel = {
  radial: "Radial",
  transversal: "Transversal",
  litoral: "Litoral",
  interior: "Interior"
};

function normalize(text) {
  return text.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getRoad(code) {
  return roads.find(r => r.code === code);
}

function renderFeatured() {
  featuredGrid.innerHTML = featuredCodes.map(code => {
    const r = getRoad(code);
    if (!r) return "";
    return `
      <article class="featured-card" data-code="${r.code}">
        <span class="road-code">${r.code}</span>
        <h3>${r.name}</h3>
        <p>${r.route}</p>
        <span class="arrow">Ver rodovia →</span>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".featured-card").forEach(card => {
    card.addEventListener("click", () => {
      roadSearch.value = card.dataset.code;
      visibleLimit = 18;
      renderRoads();
      document.getElementById("rodovias").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function filteredRoads() {
  const q = normalize(roadSearch.value.trim());
  const type = typeFilter.value;

  return roads.filter(r => {
    const matchesSearch = !q || normalize(`${r.code} ${r.name} ${r.route}`).includes(q);
    const matchesType = type === "all" || r.type === type;
    return matchesSearch && matchesType;
  });
}

function renderRoads() {
  const filtered = filteredRoads();
  const shown = filtered.slice(0, visibleLimit);

  resultCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;
  roadGrid.innerHTML = shown.map(r => `
    <article class="road-card">
      <div class="road-card-top">
        <span class="road-code">${r.code}</span>
        <span class="badge">${typeLabel[r.type]}</span>
      </div>
      <h3>${r.name}</h3>
      <p>${r.route}</p>
    </article>
  `).join("");

  loadMore.style.display = shown.length < filtered.length ? "block" : "none";
}

function searchFromHero(value) {
  roadSearch.value = value;
  visibleLimit = 18;
  renderRoads();
  document.getElementById("rodovias").scrollIntoView({ behavior: "smooth" });
}

heroSearch.addEventListener("keydown", e => {
  if (e.key === "Enter") searchFromHero(heroSearch.value);
});

document.querySelectorAll(".quick-tags button").forEach(btn => {
  btn.addEventListener("click", () => searchFromHero(btn.dataset.search));
});

roadSearch.addEventListener("input", () => {
  visibleLimit = 18;
  renderRoads();
});

typeFilter.addEventListener("change", () => {
  visibleLimit = 18;
  renderRoads();
});

loadMore.addEventListener("click", () => {
  visibleLimit += 18;
  renderRoads();
});

clearFilters.addEventListener("click", () => {
  roadSearch.value = "";
  heroSearch.value = "";
  typeFilter.value = "all";
  visibleLimit = 18;
  renderRoads();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  localStorage.setItem("rodovias-theme", dark ? "dark" : "light");
});

if (localStorage.getItem("rodovias-theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀";
}

totalRoads.textContent = roads.length;
renderFeatured();
renderRoads();

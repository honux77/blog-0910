async function loadPoem() {
  const main = document.getElementById("poem");
  try {
    const res = await fetch("data.json");
    const poem = await res.json();

    const stanzasHtml = poem.stanzas
      .map(lines => `<p>${lines.join("<br>")}</p>`)
      .join("");

    main.innerHTML = `
      <h1>${poem.title}</h1>
      <h2>${poem.author}</h2>
      <img class="illustration" src="azalea.svg" alt="진달래꽃 삽화">
      <hr>
      ${stanzasHtml}
    `;
  } catch (err) {
    main.innerHTML = "<p>시를 불러오지 못했습니다.</p>";
  }
}

loadPoem();

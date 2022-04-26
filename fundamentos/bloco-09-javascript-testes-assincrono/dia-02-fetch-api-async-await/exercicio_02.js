const URL = `https://api.coincap.io/v2/assets`;

const listCrypto = document.getElementById("crypto-list");

const fetchCrypto = async () => {
  await fetch(URL)
    .then((response) => response.json())
    .then((crypto) => {
      crypto.data.forEach((crypto, i) => {
        if (i < 10) {
          const li = document.createElement("li");
          li.innerText = `${crypto.name} ${crypto.symbol}: ${crypto.priceUsd}`;
          listCrypto.appendChild(li);
        }
        return
      });
    });
};

fetchCrypto();

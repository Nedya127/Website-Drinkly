
import { useState } from "react";
import WebsiteDrinkly from "./components/WebsiteDrinkly.jsx";

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const minuman = [
    { nama: "Kopi", kategori: "Kopi" },
    { nama: "Teh", kategori: "Teh" },
    { nama: "Jus Buah", kategori: "Jus Buah" },
    { nama: "Minuman Segar", kategori: "Minuman Segar" },
  ];

  const kategori = [
    "Semua",
    "Kopi",
    "Teh",
    "Jus Buah",
    "Minuman Segar",
  ];

  const minumanTampil =
    kategoriAktif === "Semua"
      ? minuman
      : minuman.filter(
          (item) => item.kategori === kategoriAktif
        );

  return (
    <main>
      <header>
        <h1>Drinkly</h1>
        <p>Temukan minuman favoritmu di sini.</p>
      </header>

      <section>
        <h2>Filter Kategori Minuman</h2>

        {kategori.map((item) => (
          <button
            key={item}
            onClick={() => setKategoriAktif(item)}
            style={{
              margin: "4px",
              padding: "8px 12px",
              cursor: "pointer",
              backgroundColor:
                kategoriAktif === item ? "#287a45" : "#eeeeee",
              color: kategoriAktif === item ? "white" : "#222222",
              border: "none",
              borderRadius: "6px",
            }}
          >
            {item}
          </button>
        ))}

        <ul>
          {minumanTampil.map((item) => (
            <li key={item.nama}>{item.nama}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Kenapa Memilih Drinkly?</h2>
        <p>
          Drinkly membantu kamu menemukan pilihan minuman
          favorit untuk menemani aktivitas sehari-hari.
        </p>
      </section>

      <section>
        <h2>Informasi Drinkly</h2>

        <WebsiteDrinkly
          nama="Website Drinkly"
          peran="Website Minuman"
          tahun={2026}
          aktif={true}
        />

        <WebsiteDrinkly
          nama="Menu Minuman"
          peran="Daftar Menu"
          tahun={2025}
          aktif={true}
        />

        <WebsiteDrinkly
          nama="Promo Drinkly"
          peran="Informasi Promo"
          tahun={2024}
          aktif={false}
        />
      </section>
    </main>
  );
}

export default App;


import WebsiteDrinkly from "./components/WebsiteDrinkly.jsx";

function App() {
  return (
    <main>
      <h1>Drinkly</h1>
      <p>Temukan minuman favoritmu di sini.</p>

      <section>
        <h2>Kategori Minuman</h2>
        <ul>
          <li>Kopi</li>
          <li>Teh</li>
          <li>Jus Buah</li>
          <li>Minuman Segar</li>
        </ul>
      </section>

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
    </main>
  );
}

export default App;

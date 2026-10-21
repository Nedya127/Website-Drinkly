
export default function WebsiteDrinkly({
  nama,
  peran,
  tahun,
  aktif
}) {
  return (
    <section>
      <h2>{nama}</h2>
      <p>Peran: {peran}</p>
      <p>Tahun: {tahun}</p>
      <p>Status: {aktif ? "Aktif" : "Tidak aktif"}</p>
    </section>
  );
}

const baseBenefit = [
  "Background Musik",
  "Kirim Undangan Via Email",
  "Custom Background",
  "Jumlah Tamu Unlimited",
  "Buku Tamu",
];
const premiumBenefit = [
  ...baseBenefit,
  "Album Maximal 3",
  "Costum Slug",
  "Durasi 1 Tahun",
];
const freemiumBenefit = [
  ...baseBenefit,
  "Album Maximal 3",
  "Costum Slug",
  "Durasi 3 Hari",
];
const elegantBenefit = [
  ...baseBenefit,
  "Album Maximal 9",
  "Grup Tamu",
  "Video Prewedding",
  "Durasi Selamanya",
  "Costum Subdomain",
  "Durasi Selamanya",
];
const proBenefit = [
  ...baseBenefit,
  "Album Maximal 12",
  "Grup Tamu",
  "Video Prewedding",
  "Costum Section",
  "Costum Tema",
  "Kirim Undangan Via Wa",
  "Tema Premium",
  "Durasi Selamanya",
  "Costum Subdomain",
  "Costum Domain my.id",
  "Durasi Selamanya",
];
const eksklusifBenefit = [
  ...baseBenefit,
  "Album Maximal 15",
  "Grup Tamu",
  "Video Prewedding",
  "Costum Section",
  "Costum Tema",
  "Kirim Undangan Via Wa",
  "Kirim Undangan Via Email Serentak",
  "Tema Eksklusif",
  "Durasi Selamanya",
  "Costum Subdomain",
  "Costum Domain .com",
  "Durasi Selamanya",
];

const freemiumData = {
  price: 0,
  benefits: freemiumBenefit,
  slug: "fremium",
  name: "Freemium",
  src: "/images/freemium.svg",
};

const pricePremium = 79000;
const premiumData = {
  price: pricePremium,
  benefits: premiumBenefit,
  slug: "premium",
  name: "Premium",
  src: "/images/premium.svg",
};

const benefits = [{ data: freemiumData }, { data: premiumData }];

export default benefits;

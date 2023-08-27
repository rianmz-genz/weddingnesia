const baseBenefit = [
  "Background Musik",
  "Kirim Undangan Via Email",
  "Custom Background",
  "Jumlah Tamu Unlimited",
  "Buku Tamu",
];
const discrimination = ["Quote", "Countdown Timer"];
const premiumBenefit = [
  ...baseBenefit,
  ...discrimination,
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
  ...discrimination,
  "Album Maximal 9",
  "Grup Tamu",
  "Video Prewedding",
  "Durasi Selamanya",
  "Costum Subdomain",
  "Durasi Selamanya",
];
const proBenefit = [
  ...baseBenefit,
  ...discrimination,
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
  ...discrimination,
  "Album Maximal 15",
  "Grup Tamu",
  "Video Prewedding",
  "Costum Section",
  "Costum Tema",
  "Kirim Undangan Via Wa",
  "Kirim Email Serentak",
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

const priceElegant = 210000;
const elegantData = {
  price: priceElegant,
  benefits: elegantBenefit,
  slug: "elegant",
  name: "Elegant",
  src: "/images/elegant.svg",
};

const pricePro = 445000;
const proData = {
  price: pricePro,
  benefits: proBenefit,
  slug: "pro",
  name: "Pro",
  src: "/images/pro.svg",
};

const priceEksklusif = 849000;
const eksklusifData = {
  price: priceEksklusif,
  benefits: eksklusifBenefit,
  slug: "eksklusif",
  name: "Eksklusif",
  src: "/images/eksklusif.svg",
};

const benefits = [
  { data: freemiumData },
  { data: premiumData },
  { data: eksklusifData },
  { data: proData },
  { data: elegantData },
];

export default benefits;

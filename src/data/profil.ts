// Sitedeki tüm kişisel bilgiler burada. Sadece bu dosyayı düzenlemen yeterli.

export const profil = {
  ad: "Beyzanur",
  soyad: "Kaya",
  unvan: "Yazılım Mühendisliği Öğrencisi",
  slogan: "Yapay zeka, IoT ve full-stack ile fikirleri hayata geçiriyorum.",
  konum: "Isparta, Türkiye",
  okul: "Süleyman Demirel Üniversitesi",
  eposta: "ornek@eposta.com",
  cvLinki: "", // örn: "/cv.pdf" (dosyayı public klasörüne koy)

  hakkimda: [
    "Merhaba! Ben Beyzanur. Süleyman Demirel Üniversitesi'nde öğrenciyim ve yazılım geliştirmeye tutkuyla bağlıyım.",
    "Yapay zeka ve siber güvenlikten otonom sistemlere, sensör verisiyle fiziksel modellemeden full-stack mobil uygulamalara kadar geniş bir alanda projeler geliştiriyorum. TEKNOFEST, TÜBİTAK 2209-B ve Climathon gibi yarışma ve programlarda yer alıyorum.",
  ],

  istatistikler: [
    { deger: "7+", etiket: "Proje" },
    { deger: "5", etiket: "Uzmanlık alanı" },
    { deger: "∞", etiket: "Merak" },
  ],

  yetenekler: [
    {
      kategori: "Yapay Zeka & Veri",
      ogeler: ["Python", "scikit-learn", "TF-IDF", "Random Forest", "Isolation Forest", "Bilgisayarlı Görü", "Diferansiyel Denklemler", "Zaman Serisi"],
    },
    {
      kategori: "Full-Stack & Mobil",
      ogeler: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "JWT", "Redis", "Streamlit"],
    },
    {
      kategori: "Donanım & DevOps",
      ogeler: ["Arduino", "LiDAR", "IoT Sensörleri", "Docker", "Vercel", "Git", "Gemini API"],
    },
  ],

  projeler: [
    {
      baslik: "Sensör Verileriyle Kurutma Bitiş Zamanı Tahmini",
      kategori: "Endüstriyel Veri Analitiği & Fiziksel Modelleme",
      aciklama:
        "Kurutma sırasında sıcaklık, nem ve tepsi ağırlığını anlık izleyip kuruma eğrisini diferansiyel denklemlerle ilk saatlerin verisine uyduran akıllı tahmin sistemi. Durdurma kararını otonom verir, tahmin hatasını dakika bazında raporlar. İlk testler elma dilimleriyle yapılıyor.",
      etiketler: ["Python", "Diferansiyel Denklemler", "Sensör Analitiği", "Zaman Serisi", "IoT"],
      link: "",
      github: "",
    },
    {
      baslik: "SQL Injection Saldırı Tespit Sistemi",
      kategori: "Yapay Zeka & Siber Güvenlik",
      aciklama:
        "Yapay zeka ve graf teorisiyle SQL enjeksiyonu saldırılarını tespit eden güvenlik projesi. TF-IDF + Logistic Regression, AST tabanlı Random Forest ve Isolation Forest modellerini birleştirir.",
      etiketler: ["Python", "scikit-learn", "Streamlit", "Docker"],
      link: "https://beyzanur-sql-injection.streamlit.app/",
      github: "https://github.com/Beyzanrkya/SQL_injection",
    },
    {
      baslik: "Kamera Tabanlı Şiddet Tespit Sistemi",
      kategori: "Yapay Zeka & Siber Güvenlik",
      aciklama:
        "TÜBİTAK 2209-B projesi. Çocuk ve yaşlı bakımı alanlarında kamera görüntüleri üzerinden otomatik şiddet tespiti yapan bilgisayarlı görü araştırması ve uygulaması.",
      etiketler: ["Bilgisayarlı Görü", "Derin Öğrenme", "TÜBİTAK 2209-B"],
      link: "",
      github: "",
    },
    {
      baslik: "TEKNOFEST Otonom Araç",
      kategori: "Otonom Sistemler & IoT",
      aciklama:
        "TEKNOFEST yarışması için geliştirilen, LiDAR ile çevresini algılayan otonom araç projesi.",
      etiketler: ["LiDAR", "Arduino", "Python"],
      link: "",
      github: "",
    },
    {
      baslik: "4 Tekerlekli Otonom Robot Araba",
      kategori: "Otonom Sistemler & IoT",
      aciklama:
        "Üniversite yarışmaları ve gösterimler için geliştirilmiş otonom robot araç. Ultrasonik sensörle engellerden kaçar, LDR sensörleriyle ışığa göre LED aydınlatmasını yönetir.",
      etiketler: ["Arduino Uno", "HC-SR04", "L298N", "LDR"],
      link: "",
      github: "",
    },
    {
      baslik: "MBrandev (Randevual)",
      kategori: "Full-Stack Web & Mobil",
      aciklama:
        "Bireylerin hızlıca randevu almasını, işletmelerin ise hizmetlerini ve müsaitliklerini dijital ortamda yönetmesini sağlayan full-stack randevu platformu.",
      etiketler: ["React Native", "Node.js", "Express", "MongoDB", "JWT", "Docker", "Redis"],
      link: "https://randevual-beta.vercel.app",
      github: "https://github.com/Beyzanrkya/randevual",
    },
    {
      baslik: "Yeşil Saat",
      kategori: "Sürdürülebilir Teknolojiler & Yeşil Enerji",
      aciklama:
        "Climathon / COP31 projesi. Yenilenebilir enerjinin en yoğun olduğu yeşil elektrik saatlerini tahmin edip ev aletlerinin kullanımı için öneriler sunan yapay zeka destekli mobil uygulama.",
      etiketler: ["Open-Meteo API", "Gemini API", "Mobil"],
      link: "",
      github: "",
    },
  ],

  sosyal: [
    { ad: "GitHub", url: "https://github.com/Beyzanrkya" },
    { ad: "LinkedIn", url: "https://linkedin.com/in/" },
    { ad: "Instagram", url: "https://instagram.com/" },
  ],
};

# 💸 Expense Tracker App – Harcama Takip Uygulaması

Kişisel harcamalarını kolayca takip edebileceğin sade ve kullanışlı bir mobil uygulamadır. Yeni gider ekle, kategorilere ayır, filtrele ve geçmiş harcamalarını görüntüle.

---

## 📱 Uygulama Görselleri

<table>
  <tr>
    <td align="center">
      <strong>Ana Ekran (Android)</strong><br/>
      <img src="./assets/screenshot/home_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Ana Ekran (iOS)</strong><br/>
      <img src="./assets/screenshot/home_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Filtrelenmiş Harcamalar (Android)</strong><br/>
      <img src="./assets/screenshot/filtered_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Filtrelenmiş Harcamalar (iOS)</strong><br/>
      <img src="./assets/screenshot/filtered_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Gider Ekleme (Tarih - Android)</strong><br/>
      <img src="./assets/screenshot/addExpense_date_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Gider Ekleme (Tarih - iOS)</strong><br/>
      <img src="./assets/screenshot/addExpense_date_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Gider Ekleme (Picker - Android)</strong><br/>
      <img src="./assets/screenshot/addExpense_picker_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Gider Ekleme (Picker - iOS)</strong><br/>
      <img src="./assets/screenshot/addExpense_Picker_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Gider Ekleme (Dolu - Android)</strong><br/>
      <img src="./assets/screenshot/addExpense_filled_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Gider Detay (iOS)</strong><br/>
      <img src="./assets/screenshot/expenseDetails_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Gider Detay (Android)</strong><br/>
      <img src="./assets/screenshot/detailExpense_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Gider Silindikten Sonra (iOS)</strong><br/>
      <img src="./assets/screenshot/expenseDetail_delet_ios.png" width="200"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Kategori Listesi (Android)</strong><br/>
      <img src="./assets/screenshot/addCategory_categoryList_and.png" width="200"/>
    </td>
    <td align="center">
      <strong>Kategori Listesi (iOS)</strong><br/>
      <img src="./assets/screenshot/addCategory_categoryList_ios.png" width="200"/>
    </td>
  </tr>
</table>

## 🚀 Özellikler

- 📂 Harcamaları kategoriye göre filtreleme
- ➕ Yeni harcama ekleme (isim, tutar, tarih, not, kategori)
- 📊 İstatistik görünümü (gider sayısı, toplam tutar)
- 🗃 Kategori oluşturma ve seçim
- 🧾 Detay ekranında gider bilgisi görüntüleme ve silme

## ⚙️ Kurulum

1. Repoyu klonla:

   ```bash
   git clone https://github.com/kaancaman/ExpenseTracker-RN.git
   cd ExpenseTracker-RN
   ```

2. Bağımlılıkları yükle:

   ```bash
   npm install
   # veya
   yarn
   ```

3. Uygulamayı başlat:
   ```bash
   npx react-native start
   npx react-native run-ios
   npx react-native run-android
   ```

---

## 📁 Proje Yapısı

```bash
.
├── assets/              # Icon, logo vb.
├── components/          # Girişler, butonlar, kartlar
├── data/mock/           # Mock gider ve kategori verileri
├── icon/                # Kategori ikonları (SVG)
├── navigation/          # Stack navigation tanımı
├── screen/              # Ekranlar: Home, AddExpense, Category, Detail
├── theme/               # Tema ayarları (renk, spacing, font)
└── utils/               # UI metinleri, yardımcı fonksiyonlar
```

---

## 🧪 Geliştirici Notları

- Veriler mock olarak tutulur, veritabanı entegrasyonu yapılmamıştır.
- Kategori, harcama ve istatistik yönetimi tamamen lokal state üzerinden yönetilir.
- UI yapısı tema desteklidir (light & dark mode uyumlu).

---

Made with ❤️ by [KAAN CAMAN](https://github.com/KaanCaman)

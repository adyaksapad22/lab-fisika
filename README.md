# Panduan Deployment & Build Aplikasi

Dokumen ini berisi panduan langkah demi langkah untuk melakukan build aplikasi (Android & iOS) menggunakan EAS CLI.

## 📋 Prasyarat

Sebelum memulai proses build, pastikan hal-hal berikut sudah terinstall dan terkonfigurasi:

1.  **EAS CLI** sudah terinstall:
    ```bash
    npm install -g eas-cli
    ```
2.  **Login ke Expo** (pastikan akun memiliki akses ke project):
    ```bash
    eas login
    ```
3.  **Konfigurasi Proyek**: Pastikan `eas.json` sudah sesuai dengan environment yang diinginkan.

---

## 🤖 Build untuk Android

### 1. Build APK (Untuk Testing / Internal)
Gunakan profil ini untuk menghasilkan file `.apk` yang bisa langsung diinstal di HP Android tanpa lewat Play Store.

**Perintah:**
```bash
eas build --platform android --profile preview

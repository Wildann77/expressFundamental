# Express & TypeScript Basic Todo API

Proyek sederhana untuk belajar dasar-dasar membuat backend menggunakan **Express.js** dan **TypeScript**.

## Fitur
- **GET** `/todos`: Mengambil semua data todo.
- **POST** `/todo`: Menambah data todo baru (butuh JSON body: `{"text": "Isi Todo"}`).
- **PUT** `/todo/:id`: Mengupdate status `done` (toggle) atau mengubah teks todo.
- **DELETE** `/todo/:id`: Menghapus data todo berdasarkan ID.

## Cara Instalasi

1. Clone atau download folder ini.
2. Buka terminal di folder project ini.
3. Jalankan perintah:
   ```bash
   npm install
   ```

## Cara Menjalankan

### 1. Mode Pengembangan (Development)
Menggunakan **nodemon** dan **tsx** agar server otomatis restart saat ada perubahan kode:
```bash
npm run dev
```

### 2. Mode Normal / Produksi
Kompilasi TypeScript ke JavaScript terlebih dahulu sebelum dijalankan:
```bash
npm run build
npm start
```

## Teknologi yang Digunakan
- [Express.js](https://expressjs.com/) - Web framework untuk Node.js
- [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan syntax tipe data
- [Nodemon](https://nodemon.io/) - Tool untuk monitoring perubahan file
- [TSX](https://github.com/esbuild-kit/tsx) - TypeScript Execute (pengganti ts-node yang lebih cepat)

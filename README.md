# Express & TypeScript Basic Todo API

Proyek sederhana untuk belajar dasar-dasar membuat backend menggunakan **Express.js** dan **TypeScript**.

## Fitur
- **GET** `/todos`: Mengambil semua data todo.
- **POST** `/todo`: Menambah data todo baru (butuh JSON body: `{"text": "Isi Todo"}`).
- **PUT** `/todo/:id`: Mengupdate status `done` (toggle) atau mengubah teks todo.
- **DELETE** `/todo/:id`: Menghapus data todo berdasarkan ID.

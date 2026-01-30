// src/data/modules.js

export const modules = [
  {
    id: 'algoritma-dasar',
    title: 'Pengenalan Logika & Algoritma',
    description: 'Pelajari dasar-dasar pemikiran komputasional dan struktur algoritma.',
    status: 'completed',
    progress: 100,
    icon: '🧠',
    chapters: [
      {
        chapterTitle: 'Bab 1: Konsep Dasar Algoritma',
        subChapters: [
          {
            subChapterTitle: '1.1 Apa itu Algoritma?',
            subChapterContent: 'Algoritma adalah serangkaian instruksi atau langkah-langkah logis yang terdefinisi dengan jelas untuk menyelesaikan suatu masalah atau melakukan suatu tugas. Dalam pemrograman, algoritma adalah fondasi sebelum menulis kode.'
          },
          {
            subChapterTitle: '1.2 Karakteristik Algoritma',
            subChapterContent: 'Algoritma yang baik memiliki beberapa karakteristik utama: Finiteness, Definiteness, Input, Output, dan Effectiveness.'
          }
        ]
      },
      {
        chapterTitle: 'Bab 2: Visualisasi Algoritma',
        subChapters: [
          {
            subChapterTitle: '2.1 Pengenalan Flowchart',
            subChapterContent: 'Flowchart (diagram alir) adalah representasi visual dari sebuah algoritma. Flowchart menggunakan simbol-simbol standar untuk menggambarkan berbagai langkah dan keputusan.'
          }
        ]
      }
    ],
    quiz: [
      { question: 'Apa langkah pertama dalam membuat program?', options: ['Coding', 'Analisis Masalah', 'Testing', 'Deploy'], answer: 'Analisis Masalah' },
      { question: 'Representasi visual dari algoritma disebut...', options: ['Pseudocode', 'Kode Program', 'Flowchart', 'Mind Map'], answer: 'Flowchart' }
    ]
  },
  {
    id: 'variabel-tipe-data',
    title: 'Variabel dan Tipe Data',
    description: 'Pahami cara menyimpan dan mengelola data dalam pemrograman.',
    status: 'in_progress',
    progress: 50,
    icon: '📊',
    chapters: [
      {
        chapterTitle: 'Bab 1: Konsep Variabel',
        subChapters: [
          {
            subChapterTitle: '1.1 Apa itu Variabel?',
            subChapterContent: 'Variabel adalah sebuah "wadah" di memori komputer yang digunakan untuk menyimpan nilai atau data. Nama variabel berfungsi sebagai pengenal unik untuk mengakses data tersebut.'
          },
          {
            subChapterTitle: '1.2 Aturan Penamaan Variabel',
            subChapterContent: 'Penamaan variabel biasanya memiliki aturan, seperti tidak boleh diawali dengan angka dan tidak boleh menggunakan spasi.'
          }
        ]
      },
      {
        chapterTitle: 'Bab 2: Tipe Data',
        subChapters: [
          {
            subChapterTitle: '2.1 Tipe Data Umum',
            subChapterContent: 'Setiap variabel memiliki tipe data. Beberapa tipe data umum adalah: Integer (bilangan bulat), String (teks), dan Boolean (true/false).'
          }
        ]
      }
    ],
    quiz: [
      { question: 'Tipe data untuk "Hello World" adalah...', options: ['Integer', 'Boolean', 'String', 'Float'], answer: 'String' },
      { question: 'Manakah dari berikut ini yang merupakan nama variabel yang valid?', options: ['1nama', 'nama saya', 'nama_saya', 'for'], answer: 'nama_saya' }
    ]
  },
];
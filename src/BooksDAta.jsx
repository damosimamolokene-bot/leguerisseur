 const BOOKS_DATA = [
  {
    id: 1,
    title: "FREE",
    author: "Leina SIDI",
    category: "essais",
    cover: "/covers/bookone.jpg",
    fileUrl: "/books/Free.pdf"
  },

  {
    id: 2,
    title: "Mes Pensées et Philosophies",
    author: "Leina SIDI",
    category: "poesie",
    color: "#3498db",
    fileUrl: "/books/letre.pdf"
  },

  {
    id: 3,
    title: "Poèmes de l'Âme",
    author: "LE GUERISSEUR",
    category: "projets",
    color: "#9b59b6",
    fileUrl: "/books/letre.pdf"
  }
];
<a
  href={book.fileUrl}
  className="download-btn"
  target="_blank"
   rel="noopener noreferrer"
>
  Lire le livre
</a>
import React, { useState, useEffect } from "react";
// 1. IMPORTATION DE REACT-PDF ET DE SON CONFIGURATEUR
import { Document, Page, pdfjs } from "react-pdf";
import "./App.css";

// 2. CONFIGURATION DU WORKER (Indispensable pour éviter la page blanche !)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// LISTE DES LIVRES
const BOOKS_DATA = [
  {
    id: 1,
    title: "FREE",
    author: "Leina SIDI",
    category: "essais",
    cover: "/covers/bookone.jpg",
    fileUrl: "/books/Free.pdf",
  },
  {
    id: 2,
    title: "Mes Pensées et Philosophies",
    author:  "Leina SIDI",
    category: "projets",
    color: "#3498db",
    fileUrl: "/books/lettre.pdf",
  },
  {
    id: 3,
    title: "Poèmes de l'Âme",
    author: "LE GUERISSEUR",
    category: "projets",
    color: "#9b59b6",
    fileUrl: "/books/letre.pdf",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedBook, setSelectedBook] = useState(null);

  // ÉTATS POUR LA GESTION DES PAGES DU PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Empêche le scroll quand le PDF est ouvert
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedBook]);

  // Réinitialise la page à 1 quand on change de livre
  useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
  }, [selectedBook]);

  // Fonction appelée dès que le PDF est chargé correctement
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // FILTRE
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* SI AUCUN LIVRE OUVERT → AFFICHER L'ACCUEIL */}
      {!selectedBook && (
        <div className="app-container">
          {/* HEADER */}
          <header>
            <h1>LE GUERISSEUR</h1>
            <p className="subtitle">Découvrez mes œuvres gratuitement</p>
            <div className="author-bio">
              <p>
                Bienvenue sur ce site où vous avez accès à des livres et des articles gratuits
                ainsi que des projets qui me tiennent à cœur.
              </p>
            </div>

            {/* RECHERCHE */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Rechercher une œuvre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>

          {/* FILTRES */}
          <div className="filters">
            {["all", "essais", "poesie", "projets"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "all"
                  ? "Toutes les œuvres"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* LIVRES */}
          <main className="library-grid">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                {/* COUVERTURE */}
            <div
             className="book-cover">
             <img
                src={book.cover}
               alt={book.title}
               className="book-cover-image"  />
              </div>
                {/* INFOS */}
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">Par {book.author}</p>
                  <button
                    className="read-btn"
                    onClick={() => setSelectedBook(book)}
                  >
                    Lire maintenant
                  </button>
                </div>
              </div>
            ))}

            {filteredBooks.length === 0 && (
              <p className="no-results">
                Aucune œuvre ne correspond à votre recherche.
              </p>
            )}
          </main>

          {/* SECTION AUTEUR */}
          <section className="author-section">
            <div className="author-container">
              {/* IMAGE */}
              <div className="author-image">
                <img src="/Profil SIDI.jpg" alt="Leina SIDI" />
              </div>
              {/* TEXTE */}
              <div className="author-text">
                <h2>À propos de l'auteur</h2>
                <h3>Leina SIDI (LE GUERISSEUR)</h3>
                <p>
                  Je suis Leina Sidi, écrivaine, consultante en marketing et communication,
                  philanthrope.
                </p>
                <p>Amusez-vous bien et n’hésitez pas à me faire un retour sur  mail sidinsumbuleina@gmail.com.</p>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer>
            <p>© 2026 - LE GUERISSEUR. Tous droits réservés.</p>
          </footer>
        </div>
      )}

      {/* LECTEUR PDF CORRIGÉ ET INTERACTIF */}
      {selectedBook && (
        <div className="pdf-viewer" style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#333" }}>
          {/* HEADER PDF */}
          <div className="viewer-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px", backgroundColor: "#222", color: "#fff" }}>
            <h2>{selectedBook.title}</h2>
            
            {/* CONTRÔLES DE NAVIGATION */}
            {numPages && (
              <div className="pdf-controls" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button 
                  disabled={pageNumber <= 1} 
                  onClick={() => setPageNumber(pageNumber - 1)}
                  style={{ padding: "5px 15px", cursor: "pointer" }}
                >
                  Précédent
                </button>
                <span>Page {pageNumber} sur {numPages}</span>
                <button 
                  disabled={pageNumber >= numPages} 
                  onClick={() => setPageNumber(pageNumber + 1)}
                  style={{ padding: "5px 15px", cursor: "pointer" }}
                >
                  Suivant
                </button>
              </div>
            )}

            <button
              className="close-btn"
              onClick={() => setSelectedBook(null)}
              style={{ padding: "8px 16px", backgroundColor: "#e74c3c", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
            >
              Fermer
            </button>
          </div>

          {/* ZONE D'AFFICHAGE DU PDF */}
          <div className="pdf-body" style={{ flex: 1, overflowY: "auto", display: "flex", justifyContent: "center", padding: "20px", backgroundColor: "#555" }}>
            <Document
              file={selectedBook.fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("Erreur de chargement du PDF :", error)}
              loading={<div style={{ color: "white" }}>Chargement du document...</div>}
            >
              <Page 
                pageNumber={pageNumber} 
                renderTextLayer={false} 
                renderAnnotationLayer={false} 
              />
            </Document>
          </div>
        </div>
      )}
    </>
  );
}


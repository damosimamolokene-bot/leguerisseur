

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// 1. IMPORTATION DES STYLES (Crucial pour que le texte et les sélections s'affichent correctement)
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// 2. CONFIGURATION DU WORKER (Indispensable pour décoder et afficher le texte du PDF)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfViewer() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Fonction appelée lorsque le PDF est chargé avec succès
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Revenir à la page 1 au chargement
  }

  // Fonctions de navigation
  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      
      {/* Barre de navigation */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Précédent</button>
        <span style={{ margin: '0 15px' }}>
          Page {pageNumber} sur {numPages || '...'}
        </span>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Suivant</button>
      </div>

      {/* Zone d'affichage du PDF */}

      <div style={{ border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Document
          file="/Healed_Updated_Book dernière version.pdf" // Chemin vers votre fichier (voir Étape 3)
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Chargement du document...</div>}
          error={<div>Erreur lors du chargement du PDF.</div>}
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>

      </div>

    </div>
  );
}

export default PdfViewer;

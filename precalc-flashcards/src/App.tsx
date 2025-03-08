import { useState } from 'react';
import { flashcardData, categories } from './data';
import Sidebar from './components/Sidebar';
import FlashcardList from './components/FlashcardList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter cards based on category and search term
  const filteredCards = flashcardData.filter(card =>
    (selectedCategory ? card.category === selectedCategory : true) &&
    (searchTerm
      ? card.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.definition.toLowerCase().includes(searchTerm.toLowerCase())
      : true)
  );

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12 app-header text-center">
          <h1 className="display-5">Precalculus Flashcards</h1>
          <p className="lead">Master precalculus concepts with these interactive flashcards</p>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 mb-4">
          <div className="sticky-top pt-3" style={{ top: '1rem' }}>
            <Sidebar 
              categories={categories} 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Main content */}
        <main className="col-md-9 col-lg-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">
              {selectedCategory ? `${selectedCategory} Flashcards` : 'All Flashcards'}
            </h2>
            <div className="input-group" style={{ maxWidth: '300px' }}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search flashcards..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="btn btn-outline-secondary" 
                  type="button"
                  onClick={() => setSearchTerm('')}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {filteredCards.length > 0 ? (
            <FlashcardList flashcards={filteredCards} />
          ) : (
            <div className="alert alert-info">
              No flashcards found. Try changing your search or category filter.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
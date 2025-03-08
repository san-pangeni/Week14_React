import React from 'react';
import { Flashcard as FlashcardType } from '../data';
import Flashcard from './Flashcard';

interface FlashcardListProps {
  flashcards: FlashcardType[];
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {flashcards.map((flashcard) => (
        <div className="col" key={flashcard.id}>
          <Flashcard flashcard={flashcard} />
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
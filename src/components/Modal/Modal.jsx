'use client';
import { useContext } from 'react';
import { AnimeContext } from '@/hooks/Context';
import ModalContent from './ModalContent.jsx';

const Modal = ({synopsis, title}) => {
  const { closeModal, isOpen } = useContext(AnimeContext);
  return (
    <div>
      <ModalContent isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{synopsis ? synopsis : 'Acá va la sinopsis y weas' }</p>
      </ModalContent>
    </div>
  );
};

export default Modal;




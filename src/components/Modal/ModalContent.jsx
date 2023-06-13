'use client';

export default function ModalContent({ isOpen, onClose, children }) {
    if (!isOpen) return null;

  return (
    <div className="fixed bg-black/60  inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        <div className="fixed inset-0 "></div>
      <div className="bg-white fixed rounded-lg p-8">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-corp-500 transition duration"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={6}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
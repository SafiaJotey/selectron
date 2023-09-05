import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto'
    : 'hidden';

  return (
    <div className={modalClasses}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-600 z-10">
          <FaTimes onClick={onClose} size={24} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from './Modal';

const AddReviewModal = ({ open, onClose, onAddReview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    // setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return open ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-basebackground p-6 rounded-lg max-w-md">
        <div className="flex justify-between ">
          {' '}
          <h2 className="text-xl font-bold cursor-pointer mb-4">Add Review</h2>
          <AiOutlineClose
            className="text-red-600 text-xl font-bold cursor-pointer"
            onClick={() => onClose()}
          ></AiOutlineClose>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Reviewer"
            required
          />

          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Rating (1-5)"
            required
          />

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Comment"
            required
          />

          <button
            type="submit"
            className="bg-primary py-1 px-5 text-white rounded-sm border border-primary "
            onClick={handleSubmit}
          >
            Add Review
          </button>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal Content */}
        <div className="py-10 px-10">
          <div className="border border-baseColor p-5">
            {' '}
            <div className="flex justify-start items-center">
              {' '}
              <h1 className="text-xl font-semibold  mr-2">Review Added</h1>
              {/* <FaThumbsUp className="text-review text-2xl mb-2"></FaThumbsUp> */}
            </div>
            <p>Thanks for your valuable time! </p>
          </div>
          <button
            onClick={closeModal}
            className="border my-5  border-red py-2 px-3 cursor-pointer text-white rounded-sm bg-red"
          >
            {' '}
            Close
          </button>
        </div>
      </Modal>
    </div>
  ) : null;
};

export default AddReviewModal;

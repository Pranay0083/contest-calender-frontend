// interface DeleteModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: () => void;
//   }

export function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Delete User</h2>
          <p className="modal-description">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </p>
        </div>
        <div className="modal-footer">
          <button className="button button-secondary" onClick={onClose}>
            <span>Cancel</span>
          </button>
          <button className="button button-danger" onClick={onConfirm}>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

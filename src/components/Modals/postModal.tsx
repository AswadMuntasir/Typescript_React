import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface PostModalProps {
  show: boolean;
  onHide: () => void;
  onPost: (postData: { title: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ show, onHide, onPost }) => {
  const [title, setTitle] = useState('');

  const handlePost = () => {
    if (title.trim() === '') {
      return;
    }

    // Post the data
    onPost({ title });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handlePost}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
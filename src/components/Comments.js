// src/components/Comments.js
import { useState } from 'react';
import styles from '../styles/Comments.module.css';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className={styles.comments}>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

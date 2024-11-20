// src/app/posts/[id]/page.js
"use client"; // Mark as client component
import { useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import Link from 'next/link'; // For navigating back to home
import styles from '../../../styles/Post.module.css';

const PostPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Post {id} - Hina Salman</h1>
      </header>
      <main className={styles.main}>
        <p className={styles.postContent}>
          This is the details of the post with ID: {id}.
        </p>
        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <label htmlFor="comment" className={styles.label}>
            Leave a Comment:
          </label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            className={styles.commentInput}
            placeholder="Write your comment here..."
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <div className={styles.comments}>
          <h2 className={styles.commentsTitle}>Comments</h2>
          {comments.length > 0 ? (
            <ul className={styles.commentsList}>
              {comments.map((cmt, index) => (
                <li key={index} className={styles.commentItem}>
                  {cmt}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
        <div className={styles.backButtonContainer}>
          <Link href="/" className={styles.backButton}>Back to Home</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Hina Salman. All rights reserved</p>
      </footer>
    </div>
  );
};

export default PostPage;

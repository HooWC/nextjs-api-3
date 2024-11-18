// components/PostCard.js
import styles from '../styles/Home.module.css';

const PostCard = ({ post }) => (
    <div className={styles.card}>
        <h2 className={styles.cardHeader}>{post.title}</h2>
        <p className={styles.cardContent}>{post.body}</p>
    </div>
);

export default PostCard;

// pages/index.js
import { fetchPosts } from './api/fetchPosts';
import PostCard from '../components/PostCard';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Posts</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts } };
};

export default Home;

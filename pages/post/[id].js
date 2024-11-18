// pages/post/[id].js
import { useRouter } from 'next/router';
import { fetchPosts } from '../api/fetchPosts';
import Header from '../../components/Header';

const PostDetail = ({ post }) => {
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const posts = await fetchPosts();
    const post = posts.find((p) => p.id === parseInt(params.id));
    return { props: { post } };
}

export default PostDetail;

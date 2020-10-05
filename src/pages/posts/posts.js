import React, {
    useEffect,
    useState
} from 'react';
import {
    fetchPosts
} from '../../services/services';
import Card from '../../components/card/card';
import Search from '../../components/search/search';
import Pagination from '../../components/pagination/pagination';
import { useHistory } from "react-router-dom";


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    //For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    

    //filter posts by title
    const filterPosts = (value) => {
        const fiteredPosts = posts.filter(post => post.title.includes(value));
        setPosts([...fiteredPosts]);
    }

    //Redirect to post details page
    const postHandle = (pData) => {
        history.push(`/post/${pData.id}`);
    }

    
    useEffect(() => {

        setLoader(true);

        //fetch all posts
        fetchPosts().then(response => {
            setPosts([...response]);
            setLoader(false);
        })
        .catch(error => {
            setError(`${error}`);
            setLoader(false);
        });

    }, []);

    //get current posts
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    //Change page
    const paginate = number => setCurrentPage(number);

    return (
        loader ? 
        <h2>Loading...</h2> : 
        error ? 
        <h2 className="text-danger">{error}</h2> :
        <section className="posts">
            <Search searchInput={filterPosts} placeholder="Search posts by title..."/>
            <div className="row">
                {currentPosts.length && currentPosts.map(post => 
                    <div className="col-md-4" key={post.id}>
                        <Card cardData={{...post, imgSrc: `https://loremflickr.com/420/240?random=${post.id}`}} postHandle={postHandle}/>
                    </div>
                )}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
        </section>
    )
}
export default Posts;
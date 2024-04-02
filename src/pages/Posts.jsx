import React, {useEffect, useMemo, useRef, useState} from "react";
import Counter from "../components/Counter";
import "../styles/App.css";
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal"
import {usePosts} from "../hooks/usePosts";
import axios from "axios";
import Loader from "../components/UI/Loader/Loader"
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: "", query: "", defaultSort: "id"})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query, filter.defaultSort)

    const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}} ><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;

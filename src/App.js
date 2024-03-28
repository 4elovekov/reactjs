import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript 1", body: "Description"},
        {id: 2, title: "JavaScript 2", body: "Description"},
        {id: 3, title: "JavaScript 3", body: "Description"},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <MySelect
                defaultValue="Сортировка"
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"}
                ]}
            />
            <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        </div>
    );
}

export default App;

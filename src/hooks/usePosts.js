import {useMemo} from "react";

export const useSortedPosts = (posts, sort, defaultSort) => {
    const sortedPosts = useMemo(() => {
        if(sort && sort !== defaultSort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts, defaultSort])

    return sortedPosts;
}

export const usePosts = (posts, sort, query, defaultSort) => {
    const sortedPosts = useSortedPosts(posts, sort, defaultSort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}
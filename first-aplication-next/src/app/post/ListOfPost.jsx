const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export async function ListOfPost(){
    const post = await fetchPost()
    return post.map(post => (
        <article key={post.id}>
            <h2 style={{color: '#09f'}}>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    ))
}
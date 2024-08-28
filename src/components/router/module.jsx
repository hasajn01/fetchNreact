import "./module.css";



function ModuleRouter({data, module}) {
  let posts = data || []

  return (
    <ul className="module-list">
      {posts.map((post) => {
        return (
          <li key={post.id} className="module-item">


            {/* POSTS */}
            {module === 'posts' ? (
              <> 
                <b>Title</b>: {post.title} <br/>
                <b>Body</b>: {post.body}
              </>
            ) : null}


            {/* COMMENTS */}
            {module === 'comments' ? (
              <>
              <b>Name</b>: {post.name} <br/>
              <b>E-mail</b>: <u>{post.email}</u> <br/>
              <b>Body</b>: {post.body}

              </>
            ) : null}


            {module === 'albums' ? (
              <> 
                <b>Title</b>: {post.title} <br/>
              </>
            ) : null}
            
            {module === 'photos' ? (
              <> 
                <div className="photo-block">
                <div><b>Title</b>: {post.title} <br/></div>
                <img src={post.thumbnailUrl} alt="" className="img" />
                </div>
              </>
            ) : null}
            </li>
        );
      })}
    </ul>
  );
}

export default ModuleRouter

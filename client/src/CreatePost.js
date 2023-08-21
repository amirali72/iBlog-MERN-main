import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {

        const data = new FormData();
        data.set('title',title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        ev.preventDefault();
        const response = await fetch("https://iblog-dz12.onrender.com/post",{
            method: 'POST',
            body: data,
            credentials: 'include',
        })

        if(response.ok){
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <form onSubmit={createNewPost}>
                <div className="formbox m-auto max-width">
                    <h2>Create a Blog</h2>

                    <div className="forminput">
                        <input
                            type="title"
                            placeholder="Title"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>

                    <div className="forminput">
                        <input
                            type="summary"
                            placeholder="Summary"
                            value={summary}
                            onChange={(e)=>setSummary(e.target.value)}
                        />
                    </div>
                    <div className="forminput">
                        <input
                            type="file"
                            placeholder="Summary"
                            className='file'
                            onChange={ev=> setFiles(ev.target.files)}
                        />
                    </div>
                    <div className="forminput">
                        <div className='quillInput'>
                            <ReactQuill value={content} 
                            onChange={newValue=>setContent(newValue)}/>
                        </div>
                    </div>
                    <button className="btn2">Create Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;

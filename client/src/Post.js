import React from 'react'
import {formatISO9075} from "date-fns";
import { Link } from 'react-router-dom';
import './css/mobile.css';

const Post = ({_id, title, summary, cover, content, createdAt, author}) => {
  return (
    <>
    <div className="article max-width m-auto">
        <div className="box">
            <Link to={`/post/${_id}`}>
            <img src={'https://iblog-dz12.onrender.com//'+cover} alt="err"/>
            </Link>
            <div className="boxtext">
                <h3> <Link to={`/post/${_id}`}>{title}</Link>
                </h3>
                <p className='info'>
                    <span className='author'> {author.username} | </span>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <span className='summary'>
                {summary}
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post

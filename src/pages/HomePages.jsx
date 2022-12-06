import React from "react";
import { useNavigate } from 'react-router-dom';
import './assets/css/HomePages.style.css';
const HomePage = () => {

    const navigate = useNavigate();

    const posts = [
        {
            id: 1,
            post : "React JS React Js adalah library javascript yang dikembangkan oleh facebook dan diperkenalkan pertama kali pada tahun 2013. React JS digunakan untuk membuat frontend website. Pada React JS terdapat istilah yang disebut dengan “component”. component sendiri merupakan potongan kode kecil yang terisolasi. Dengan menggunakan component-component inilah nantinya kita membuat frontend website pada Reacts JS",
        },
        {
            id: 2,
            post: "antara apapun dan apa pun, penulisan yang benar adalah apa pun.",
        },
        {
            id:3,
            post: "Cari entri dan contoh kalimat di Wikipedia untuk: apa saja · Wikisource-logo.svg. Cari entri dan contoh kalimat di Wikisource untuk: apa saja.",
        },
        {
            id: 4,
            post : "Repobaru",
        },
        {
            id: 5,
            post: "antara apapun dan apa pun, penulisan yang benar adalah apa pun.",
        },
        {
            id:6,
            post: "Cari entri dan contoh kalimat di Wikipedia untuk: apa saja · Wikisource-logo.svg. Cari entri dan contoh kalimat di Wikisource untuk: apa saja.",
        }
    ]


    const Post = ({post}) => {
        return (
            <div>
                <h1 className="post" onClick={() => {navigate(`/post/${post.id}`, {state : { content :  post.post}})}}>Post {post.id}</h1>
            </div>
        )
    }


    return (
        <div className="Home-post">
            {
                posts.map((post, id)=>
                    <Post key = {id} post={post}/>
                )
            }
        </div>
    )
}

export default HomePage;
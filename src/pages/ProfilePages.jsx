import React from "react";
import './assets/css/ProfilePages.style.css';
import foto from './assets/img/YosiKesuma.jpg';

const ProfilePage = () => {
    const stylInk = {
        color: 'white', 
        textDecoration: 'none',
    }
    return (
        <div
        style = {{
            color : 'white',
            padding : '50px',
        }}
        >
    
            <h1 className="about" style={{textAlign: 'center'}}>About Me</h1>

            <div className="desc">
                <div className="img-wrap">
                    <img src={foto} alt="profle" width={"100px"} className="foto"/>
                    <p>Yosi Kesuma</p>
                </div>
                <p className="content">
                    Lulusan SMKN 1 Karawang Teknik Elektronika Industri. Saya sering kali ditunjuk
                    sebagai ketua di beberapa kegiatan lomba dan organisasi. Saya sangat tertarik dengan
                    perkembangan dunia digital dan teknologi.
                </p>
            </div>
        </div>
    )
}

export default ProfilePage;
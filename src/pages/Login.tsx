*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#ececf8;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    width:1200px;
    max-width:95%;
    height:650px;
    background:#fff;
    border-radius:20px;
    overflow:hidden;
    display:flex;
    box-shadow:0 20px 50px rgba(0,0,0,.15);
}

.left{
    width:45%;
    padding:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    color:#6c2cf5;
    font-weight:bold;
    margin-bottom:80px;
}

.logo i{
    font-size:22px;
}

.left h1{
    font-size:42px;
    color:#333;
    margin-bottom:10px;
}

.left p{
    color:#999;
    margin-bottom:40px;
}

.input-box{
    background:#f3f3fd;
    border-radius:30px;
    display:flex;
    align-items:center;
    padding:0 18px;
    height:55px;
    margin-bottom:20px;
}

.input-box i{
    color:#777;
}

.input-box input{
    flex:1;
    border:none;
    background:none;
    outline:none;
    padding:15px;
    font-size:15px;
}

.options{
    display:flex;
    justify-content:space-between;
    margin-bottom:35px;
    font-size:14px;
}

.options a{
    color:#888;
    text-decoration:none;
}

.buttons{
    display:flex;
    align-items:center;
    gap:25px;
}

button{
    width:170px;
    height:50px;
    border:none;
    border-radius:30px;
    background:#6c2cf5;
    color:#fff;
    font-size:16px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    background:#5520d5;
}

.buttons a{
    color:#444;
    text-decoration:none;
}

.right{
    width:55%;
    position:relative;
    overflow:hidden;
    background:linear-gradient(135deg,#8b3dff,#5f0cff);
    display:flex;
    justify-content:center;
    align-items:center;
}

.circle{
    position:absolute;
    width:700px;
    height:700px;
    background:rgba(255,255,255,.15);
    border-radius:50%;
    left:-80px;
    top:-80px;
}

.right img{
    width:80%;
    position:relative;
    z-index:2;
    border-radius:15px;
    transform:rotate(-15deg);
    box-shadow:0 20px 50px rgba(0,0,0,.25);
}

@media(max-width:900px){

.container{
    flex-direction:column;
    height:auto;
}

.left,.right{
    width:100%;
}

.left{
    padding:40px;
}

.right{
    height:350px;
}

.left h1{
    font-size:32px;
}

}

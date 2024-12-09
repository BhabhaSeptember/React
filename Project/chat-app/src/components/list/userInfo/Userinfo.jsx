import "./userInfo.css";

const Userinfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.jpg" alt=""/>
                <h2>Bhabha</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt=""/>
                <img src="./video.png" alt=""/>
                <img src="./edit.png" alt=""/>
            </div>
        </div>
    )
}
export default Userinfo;
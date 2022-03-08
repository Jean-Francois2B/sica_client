import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"


export default function Profile() {
    const DP = process.env.REACT_APP_DOSSIER_PUBLIC
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${DP}/person/3.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${DP}/person/7.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Jeff</h4>
                            <span className="profileInfoDesc">Hello friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>

        </>
    )
}

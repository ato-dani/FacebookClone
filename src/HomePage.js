
import "./HomePage.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function HomePage() {
return (
    <div className="home_page">
    <div className = "header" >
        <Header/>
      </div>
      
      <div className = "content">
        <div className = "sidebar">
          <Sidebar />
        </div>
        <div className = "feed">
          <Feed/>
        </div>
        <div>
          <p> Birthday's</p>
        </div>
      </div>
          
        </div>
    )
}

export default HomePage

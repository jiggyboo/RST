import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./Components/nav.component";
import Main from "./Components/main.component";
import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Forgot from "./Components/forgot.component";
import Footer from "./Components/footer.component";

function App() {

  const [login, setLogin] = React.useState(false);
  const [stockData, setStockData] = React.useState({});
  const [following, setFollowing] = React.useState([]);
  const [needMore, setNeedMore] = React.useState(false);
  // const loadData = () => JSON.parse(JSON.stringify(lcnt));
  // setStockData(loadData());

  // Load smaller JSON file.
  React.useEffect(() => {
    const fetchLCNT = async () => {
      await fetch('lcnt.json')
        .then(response => response.json())
        .then(data => setStockData(data))
        .then(() => console.log('Loaded LCNT'))
        .catch(err => console.log(err));
    };
    console.log("Fetching Light Stock Data...");
    fetchLCNT();
  }, []);

  // Load larger JSON file when page number goes beyond 4.
  React.useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching Stock Data...");
      await fetch('stockdata.json')
        .then(res => res.json())
        .then(result =>{
          setStockData(result);
          console.log(result);
        });
    }
    if (needMore) {
      fetchData()
        .catch(err => console.log(err));
    }
  }, [needMore]);  
  
  // See if user is logged in(sessionStorage).
  React.useEffect(() => {
    console.log("Login after Refresh");
    if (sessionStorage.getItem("token")) {
      setLogin(true);
    }
  }, []);
  
  const follow = (id) => {
    axios.post("/rst/api/follow", {
      'ticker': id
    }, {
      headers: {
        'Authorization': sessionStorage.getItem("token")
    }}).then(res => {
      console.log(res);
      setFollowing(prevList => [...prevList, id]);
    }).catch(err => {
      console.log(err);
    });
  };

  const unfollow = (id) => {
    axios.post("/rst/api/unfollow", {
      'ticker': id
    }, {
      headers: {
        'Authorization': sessionStorage.getItem("token")
    }}).then(res => {
      console.log(res);
      setFollowing(prevList => prevList.filter(item => item !== id));
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <Router>
      <div className="app">
        <Nav login={login} logout={() => setLogin(false)} />
        <Routes>
          <Route path="/rst" element={<Main login={login} follow={follow} unfollow={unfollow} following={following} stockData={stockData} />} />
          <Route path="/rst/login" element={<Login login={()=>setLogin(true)} setFollowing={setFollowing} />} />
          <Route path="/rst/register" element={<Register />} />
          <Route path="/rst/forgot" element={<Forgot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

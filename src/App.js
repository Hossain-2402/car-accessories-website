import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Products from "./Products"
import SpecificCatagory from "./SpecificCatagory";
import SingalProduct from "./SingalProduct";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  const [positionOfMenuArea,setPositionOfMenuArea] = useState("-200vw");
  const [positionOfExpandedArea,setPositionOfExpandedArea] = useState("-200vw");
  const [opacityOfMenuArea,setOpacityOfMenuArea] = useState("0");

  const [catagoriesList,setCatagoriesList] = useState([{name: "Beauty",slug: "beauty",url: "https://dummyjson.com/products/category/beauty"}]);

  const [firstCatagorylist,setFirstCatagoryList] = useState([{name: "Beauty",slug: "beauty",url: "https://dummyjson.com/products/category/beauty"}]);
  const [secondCatagorylist,setSecondCatagoryList] = useState([{name: "Beauty",slug: "beauty",url: "https://dummyjson.com/products/category/beauty"}]);
  const [thirdCatagorylist,setThirdCatagoryList] = useState([{name: "Beauty",slug: "beauty",url: "https://dummyjson.com/products/category/beauty"}]);
  const [forthCatagorylist,setForthCatagoryList] = useState([{name: "Beauty",slug: "beauty",url: "https://dummyjson.com/products/category/beauty"}]);

  const [heightOfExpandedCatagoryArea,setHeightOfExpandedCatagoryArea] = useState("0vh");
  const [fontsizeOfExpandedCatagoryArea,setFontsizeOfExpandedCatagoryArea] = useState("0");
  const [expandedCatagoryAreaIsOPEN,setExpandedCatagoryAreaIsOPEN] = useState(false);


  useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories')
        .then((res)=>{ setCatagoriesList(res.data) })
        .catch((err)=>{console.log(err);})
  },[]);

  const showMenuArea = ()=>{
    setPositionOfMenuArea("0vw");
    setOpacityOfMenuArea("1")
  }
  const hideMenuArea = ()=>{
    setPositionOfMenuArea("-200vw");
    setOpacityOfMenuArea("0");
  }
 const showExpandedArea = ()=>{

    setFirstCatagoryList([catagoriesList[0],catagoriesList[1],catagoriesList[2],catagoriesList[3],catagoriesList[4],catagoriesList[5]]);
    setSecondCatagoryList([catagoriesList[6],catagoriesList[7],catagoriesList[8],catagoriesList[9],catagoriesList[10],catagoriesList[11]]);
    setThirdCatagoryList([catagoriesList[12],catagoriesList[13],catagoriesList[14],catagoriesList[15],catagoriesList[16],catagoriesList[17]]);
    setForthCatagoryList([catagoriesList[18],catagoriesList[19],catagoriesList[20],catagoriesList[21],catagoriesList[22],catagoriesList[23]]);
    setPositionOfExpandedArea("22vh");
  }
  const hideExpandedArea = ()=>{
    setPositionOfExpandedArea("-200vh");
    setFirstCatagoryList([]);
    setSecondCatagoryList([]);
    setThirdCatagoryList([]);
    setForthCatagoryList([]);
  }

  const showExpandedCatagoryArea = ()=>{
    if(!expandedCatagoryAreaIsOPEN){
      setHeightOfExpandedCatagoryArea("50vh");
      setFontsizeOfExpandedCatagoryArea("20px");
      setExpandedCatagoryAreaIsOPEN(true);
    }
    else{      
      setHeightOfExpandedCatagoryArea("0");
      setFontsizeOfExpandedCatagoryArea("0");
      setExpandedCatagoryAreaIsOPEN(false);
    }
  }

  return (
    <div className="App">
    <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <BrowserRouter>


        <div style={{ left:positionOfMenuArea , opacity : opacityOfMenuArea }} className="menu_area">
          <div className="close_menu_btn" onClick={()=>{hideMenuArea()}}> <i className="fa fa-times" aria-hidden="true"></i> </div>
          <div className="menus">
            <div className="all_catagories_btn_in_menu_area" onClick={()=>{ showExpandedCatagoryArea() }}>All Catagories <span> </span> <span ><i className="fa fa-angle-down" aria-hidden="true"></i></span></div>
            <div style={{ height: heightOfExpandedCatagoryArea, fontSize: fontsizeOfExpandedCatagoryArea }} className="expanded_catagory_area_btn">
              {catagoriesList.map((catagory,index)=>{
                return (
                    <Link to={`/products/catagory/${catagory.slug}`} className="catagory_in_menu_area" key={index} onClick={()=>{ setPositionOfMenuArea("-200vw");setOpacityOfMenuArea("0"); }}>{catagory.name}</Link>
                  );
              })}
            </div>
            <Link to="/" className="home_btn_in_menu_area" onClick={()=>{ setPositionOfMenuArea("-200vw");setOpacityOfMenuArea("0"); }}>Home</Link>
            <div className="shop_btn_in_menu_area">Shop <span> </span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></div>
            <div className="compare_products_btn_in_menu_area">Compare products</div>
          </div>

        </div>
        

        <div className="nevigation_area">

          <div className="nev_1">
            <Link to="/about-us" className="btn about_us">About us</Link>
            <Link to="/contact-us" className="btn contact_us">Contact us</Link>
            <div className="gap_in_nev_1"></div>
            <div className="language">English <i class="fa fa-angle-down" aria-hidden="true"></i> </div>
            <div className="currancy">BDT <i class="fa fa-angle-down" aria-hidden="true"></i> </div>
          </div>

          <div className="nev_2">
            <div className="menu_btn" onClick={()=>{ showMenuArea() }}><i class="fa fa-bars" aria-hidden="true"></i></div>
            <div className="gap_in_nev_2"></div>
            <div className="search_area">
              <div className="catagory_selecter" >All <span className="all"><i class="fa fa-angle-down" aria-hidden="true"></i></span></div>
              <input type="text" placeholder="search for parts & accessories" className="search_field"/>
              <div className="search_btn"><i class="fa fa-search" aria-hidden="true"></i> </div>
            </div>
            <Link to="/cart" className="cart_btn"><i class="fa fa-heart" aria-hidden="true"></i></Link>
            <Link to="/signIn" className="sign_in_btn">Sign In</Link>
          </div>

          <div className="nev_3">
            <div className="all_catagories_btn" onClick={()=>{showExpandedArea()}}>All catafories <span><i class="fa fa-angle-down" aria-hidden="true"></i></span></div>
            <Link to="/" className="home_btn">Home</Link>
            <div className="shop_btn">Shop <span><i class="fa fa-angle-down" aria-hidden="true"></i></span></div>
            <div className="compare_products_btn">Compare products</div>
            <div className="gap_in_nev_3"></div>
          </div>

          <div className="nev_4"></div>

        </div>

        <div style={{ top:positionOfExpandedArea }} className="expanded_area">
          <div className="close_expanded_btn" onClick={()=>{hideExpandedArea()}}> <i class="fa fa-times" aria-hidden="true"></i> </div>
          <div className="catagoryListArea">
            <div className="catagoryList">
              <span className="catagory_header"> Catagory </span>
              {firstCatagorylist.map((catagory,index)=>{
                return ( <Link to={`/products/catagory/${catagory.slug}`} className="singalCatagory" onClick={()=>{ hideExpandedArea() }}>{catagory.name}</Link> )
              })}
            </div>
            <div className="catagoryList">
              <span className="catagory_header"> Catagory </span>
              {secondCatagorylist.map((catagory,index)=>{
                return ( <Link to={`/products/catagory/${catagory.slug}`} className="singalCatagory" onClick={()=>{ hideExpandedArea() }}>{catagory.name}</Link> )
              })}
            </div>
            <div className="catagoryList">
              <span className="catagory_header"> Catagory </span>
              {thirdCatagorylist.map((catagory,index)=>{
                return ( <Link to={`/products/catagory/${catagory.slug}`} className="singalCatagory" onClick={()=>{ hideExpandedArea() }} >{catagory.name}</Link> )
              })}
            </div>
            <div className="catagoryList">
              <span className="catagory_header"> Catagory </span>
              {forthCatagorylist.map((catagory,index)=>{
                return ( <Link to={`/products/catagory/${catagory.slug}`} className="singalCatagory" onClick={()=>{ hideExpandedArea() }}>{catagory.name}</Link> )
              })}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<SingalProduct/>} />
          <Route path="/products/catagory/:id" element={<SpecificCatagory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = ()=>{

	const [products,setProducts] = useState([]);
	const [pageNumber,setPageNumber] = useState(0);
	const [totalPages,setTotalPages] = useState([]);

	useEffect(()=>{
		axios.get(`https://dummyjson.com/products?limit=24&skip=${pageNumber}`)
		.then((res)=>{
			setProducts(res.data.products);
			let number = 194/24;
			let remainingPage = 194%24;
			let n = number;
				if(remainingPage === 0){
					n = number;
				}
				else{
					n = n+1;
				}
			let currentPageNumber = (pageNumber/24) + 1;
			for(let i = 1; i<=n ; i++){
				if(i === currentPageNumber){
					totalPages[i] = {bgColor: "grey", pageNumberText : i};
				}
				else{
					totalPages[i] = {bgColor: "white", pageNumberText : i};
				}
			}
		})
		.catch((err)=>{
			console.log(err);
		})
	},[pageNumber,totalPages]);



const handlePageNumber = (page)=>{
	setPageNumber((page-1)*24);
}

	return(
		<div className="Products">

			<div className="All_products_header_text">
				<div className="title">All Products </div>
			</div>
			<div className="Products_area">
				{products.map((product,index)=>{
					return (
						<div className="Product" key={index}>
							<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="product_image"></div>
							<div className="Product_name">{product.title}</div>
							<Link to={`/products/catagory/${product.category}`} className="Product_catagory">{product.category}</Link>
							<div className="Product_brand">Brand : {product.brand}</div>
							<div className="Product_price">${product.price}</div>
							<Link to={`/products/${product.id}`} className="View_detail_btn">View Detail</Link>
						</div>
						);
				})}
			</div>

			<div className="pageNevBtns">
				{totalPages.map((page,index)=>{
					return (
						<div style={{ background: page.bgColor }} className="page" key={index} onClick={()=>{ handlePageNumber(page.pageNumberText) }}>{page.pageNumberText}
						</div>
						);
				})}
			</div>
		</div>
		);
}

export default Products;
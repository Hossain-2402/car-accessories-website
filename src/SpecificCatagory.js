import "./SpecificCatagory.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SpecificCatagory = ()=>{

	const [products,setProducts] = useState([]);
	const {id} = useParams();

	useEffect(()=>{
		axios.get(`https://dummyjson.com/products/category/${id}`)
		.then((res)=>{
			setProducts(res.data.products)
		})
		.catch((err)=>{
			console.log(err);
		})

	},[id]);


	return (
		<div className="SpecificCatagory">
			<div className="All_products_header_text">
				<div className="title">All {id} Products </div>
			</div>
			<div className="catagory_Products_area">
				{products.map((product,index)=>{
					return (
						<div className="catagory_Product" key={index}>
							<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="catagory_Product_image"></div>
							<div className="catagory_Product_name">{product.title}</div>
							<Link to={`/products/catagory/${product.category}`} className="catagory_Product_catagory">{product.category}</Link>
							<div className="catagory_Product_brand">Brand : {product.brand}</div>
							<div className="catagory_Product_price">${product.price}</div>
							<Link to={`/products/${product.id}`} className="catagory_View_detail_btn">View Detail</Link>
						</div>
						);
				})}
			</div>
		</div>
	);
}

export default SpecificCatagory;
import "./Home.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ()=>{

	const [demoProducts,setDemoProducts] = useState([{
  id: 1,
  title: "Essence Mascara Lash Princess",
  description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: [
    "beauty",
    "mascara"
  ],
  brand: "Essence",
  sku: "RCH45Q1A",
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01
  },
  warrantyInformation: "1 month warranty",
  shippingInformation: "Ships in 1 month",
  availabilityStatus: "Low Stock",
  reviews: [
    {
      "rating": 2,
      "comment": "Very unhappy with my purchase!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "John Doe",
      "reviewerEmail": "john.doe@x.dummyjson.com"
    },
    {
      "rating": 2,
      "comment": "Not as described!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Nolan Gonzalez",
      "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    },
    {
      "rating": 5,
      "comment": "Very satisfied!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Scarlett Wright",
      "reviewerEmail": "scarlett.wright@x.dummyjson.com"
    }
  ],
  returnPolicy: "30 days return policy",
  minimumOrderQuantity: 24,
  meta: {
    "createdAt": "2024-05-23T08:56:21.618Z",
    "updatedAt": "2024-05-23T08:56:21.618Z",
    "barcode": "9164035109868",
    "qrCode": "..."
  },
  thumbnail: "...",
  images: ["...", "...", "..."]}]);

	useEffect(()=>{
		axios.get('https://dummyjson.com/products?limit=4&skip=40')
		.then((res)=>{
			setDemoProducts(res.data.products);
		})
		.catch((err)=>{
			console.log(err);
		})
	},[])


	return (
		<div className="Home">
	    <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
			{/*<div className="header_image"></div>*/}
			<div className="advertisement_slider"></div>

			<div className="Latest_deals_header_text">
				<div className="title">Latest Deals</div>
				<div className="gap_in_latest_deal_header"></div>
				<Link to="/products" className="view_all_btn"> View All <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
			</div>
			<div className="Latest_deals_area">
				{demoProducts.map((product,index)=>{
					return (
						<div className="product" key={index}>
							<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="product_image"></div>
							<div className="product_name">{product.title}</div>
							<Link to={`/products/catagory/${product.category}`} className="product_catagory">{product.category}</Link>
							<div className="product_brand">Brand : {product.brand}</div>
							<div className="product_price">${product.price}</div>
							<Link to={`/products/${product.id}`} className="view_detail_btn">View Detail</Link>
						</div>
						);
				})}
			</div>

			<div className="first_advertisement_area">
				<div className="advertisement_area"></div>
				<div className="feature_area">
					<div className="feature_1">
						<div className="feature_1_header">Interior Accessories</div>
						<div className="view_feature_btn">View</div>
					</div>
					<div className="feature_2">
						<div className="feature_1_header">Interior Accessories</div>
						<div className="view_feature_btn">View</div>
					</div>
				</div>
			</div>


			<div className="Latest_deals_header_text">
				<div className="title">Essential Items</div>
				<div className="gap_in_latest_deal_header"></div>
				<Link to="/products" className="view_all_btn"> View All <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
			</div>
			<div className="Latest_deals_area">
				{demoProducts.map((product,index)=>{
					return (
						<div className="product" key={index}>
							<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="product_image"></div>
							<div className="product_name">{product.title}</div>
							<Link to={`/products/catagory/${product.category}`} className="product_catagory">{product.category}</Link>
							<div className="product_brand">Brand : {product.brand}</div>
							<div className="product_price">${product.price}</div>
							<Link to={`/products/${product.id}`} className="view_detail_btn">View Detail</Link>
						</div>
						);
				})}
			</div>


			<div className="Latest_deals_header_text">
				<div className="title">Top selling</div>
				<div className="gap_in_latest_deal_header"></div>
				<Link to="/products" className="view_all_btn"> View All <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
			</div>
			<div className="Latest_deals_area">
				{demoProducts.map((product,index)=>{
					return (
						<div className="product" key={index}>
							<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="product_image"></div>
							<div className="product_name">{product.title}</div>
							<Link to={`/products/catagory/${product.category}`} className="product_catagory">{product.category}</Link>
							<div className="product_brand">Brand : {product.brand}</div>
							<div className="product_price">${product.price}</div>
							<Link to={`/products/${product.id}`} className="view_detail_btn">View Detail</Link>
						</div>
						);
				})}
			</div>



			<div className="ending_text_area">
				<div className="text t1">
					<div className="ending_text_title">Leading Battaries</div>
					<div className="ending_text_body">MetroRail in Bangladesh is an exciting development in the country’s transportation system. It’s like a big train that runs on elevated tracks above the ground, making it faster and avoiding traffic jams. This modern mode of transport aims to make travelling around cities like Dhaka much easier for people. The MetroRail project plans to connect different parts of the city, reducing travel time and making commuting more comfortable. With spacious trains and air-conditioned compartments, it offers a comfortable ride, especially during hot days. People are excited about this project because it promises to ease road congestion, provide a quicker way to get around and make daily commuting smoother for many. It’s a big step towards modernizing transportation and improving the quality of life for residents in Bangladesh’s bustling cities. The hope is that it will save time and contribute to reducing pollution and making cities more livable. Overall, the MetroRail in Bangladesh is an important and ambitious initiative that holds the potential to transform urban transportation in the country positively.</div>
				</div>
				<div className="text t2">
					<div className="ending_text_title">Best Car Accessories</div>
					<div className="ending_text_body">MetroRail in Bangladesh is an exciting development in the country’s transportation system. It’s like a big train that runs on elevated tracks above the ground, making it faster and avoiding traffic jams. This modern mode of transport aims to make travelling around cities like Dhaka much easier for people. The MetroRail project plans to connect different parts of the city, reducing travel time and making commuting more comfortable. With spacious trains and air-conditioned compartments, it offers a comfortable ride, especially during hot days. People are excited about this project because it promises to ease road congestion, provide a quicker way to get around and make daily commuting smoother for many. It’s a big step towards modernizing transportation and improving the quality of life for residents in Bangladesh’s bustling cities. The hope is that it will save time and contribute to reducing pollution and making cities more livable. Overall, the MetroRail in Bangladesh is an important and ambitious initiative that holds the potential to transform urban transportation in the country positively.</div>
				</div>
				<div className="text t3">
					<div className="ending_text_title">Largest Engine Parts</div>
					<div className="ending_text_body">MetroRail in Bangladesh is an exciting development in the country’s transportation system. It’s like a big train that runs on elevated tracks above the ground, making it faster and avoiding traffic jams. This modern mode of transport aims to make travelling around cities like Dhaka much easier for people. The MetroRail project plans to connect different parts of the city, reducing travel time and making commuting more comfortable. With spacious trains and air-conditioned compartments, it offers a comfortable ride, especially during hot days. People are excited about this project because it promises to ease road congestion, provide a quicker way to get around and make daily commuting smoother for many. It’s a big step towards modernizing transportation and improving the quality of life for residents in Bangladesh’s bustling cities. The hope is that it will save time and contribute to reducing pollution and making cities more livable. Overall, the MetroRail in Bangladesh is an important and ambitious initiative that holds the potential to transform urban transportation in the country positively.</div>
				</div>
			</div>


			<div className="footer">
				<div className="section1">
					<h2 className="footer_intro_text">MetroRail in Bangladesh is an exciting development in the country’s transportation system</h2>
					<div className="footer_media_icons"></div> {/* media icons */}
				</div>
				<div className="section2">
					<h4 className="section_header">Company</h4>
					<Link to="/about-us" className="about_us_in_footer">About us</Link>
					<Link to="/contact-us" className="contact_us_in_footer">Contact us</Link>
				</div>
				<div className="section3">
					<h4 className="section_header">Help</h4>
					<Link to="/about-us" className="payments_in_footer">Payments</Link>
					<Link to="/about-us" className="shipping_in_footer">Shipping</Link>
					<Link to="/about-us" className="orders_in_footer">Orders</Link>
					<Link to="/about-us" className="faq_in_footer">FAQ</Link>
				</div>
				<div className="section4">
					<h4 className="section_header">Consumers Policy</h4>
					<Link to="/about-us" className="cancellation_in_footer">Cancellation & Returns</Link>
					<Link to="/about-us" className="p_policies_in_footer">Payment Policies</Link>
					<Link to="/about-us" className="terms_in_footer">Terms of Services</Link>
				</div>
			</div>

		</div>
	);
}

export default Home;


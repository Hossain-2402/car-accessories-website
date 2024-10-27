import "./SingalProduct.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingalProduct = ()=>{

	const [product,setProduct] = useState({
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
  images: ["...", "...", "..."]});
	const [leading_image,setLeadingImage] = useState("");
	const [zIndexOfDescriptionArea,setzIndexOfDescriptionArea] = useState("1");
	const [zIndexOfSpecificationArea,setzIndexOfSpecificationArea] = useState("0");
	const [zIndexOfReviewArea,setzIndexOfReviewArea] = useState("0");
	const [zIndexOfFaqArea,setzIndexOfFaqArea] = useState("0");


	const {id} = useParams();

	useEffect(()=>{
		axios.get(`https://dummyjson.com/products/${id}`)
		.then((res)=>{
			setProduct(res.data);
			setLeadingImage(res.data.images[0]);
			console.log(res.data.images[0])
		})
		.catch((err)=>{
			console.log(err);
		})
	},[id]);




	return (
			<div className="SingalProduct">
				<div className="product_display_area">

					<div className="product_image_area">
						<div className="product_images">
							<div style={{ backgroundImage: "url("+leading_image+")"}} className="leading_image"></div>
							<div className="supporting_images">
								<div style={{ backgroundImage: "url("+product.images[0]+")"}} className="more_image i1" onClick={()=>{ setLeadingImage(product.images[0]) }}></div>
								<div style={{ backgroundImage: "url("+product.images[1]+")"}} className="more_image i2" onClick={()=>{ setLeadingImage(product.images[1]) }}></div>
								<div style={{ backgroundImage: "url("+product.images[2]+")"}} className="more_image i3" onClick={()=>{ setLeadingImage(product.images[2]) }}></div>
								<div style={{ backgroundImage: "url("+product.images[3]+")"}} className="more_image i4" onClick={()=>{ setLeadingImage(product.images[3]) }}></div>
							</div>
						</div>
					</div>

					<div className="product_info_area">
						<div className="product_infos">
							<Link to={`/products/catagory/${product.category}`}  className="catagory">{product.category}</Link>
							<div className="name">{product.title}</div>
							<div className="brand">Brand : {product.brand}</div>
							<div className="price">${product.price}</div>
						</div>
					</div>
					
				</div>

				<div className="extra_infos_area">
					<div className="extra_info_nevigation_area">
						<div className="nev_btn" onClick={()=>{ setzIndexOfDescriptionArea("1"); setzIndexOfSpecificationArea("-1"); setzIndexOfReviewArea("-1"); setzIndexOfFaqArea("-1")  }}>Description</div>
						<div className="nev_btn" onClick={()=>{ setzIndexOfDescriptionArea("-1"); setzIndexOfSpecificationArea("1"); setzIndexOfReviewArea("-1"); setzIndexOfFaqArea("-1")  }}>Specification</div>
						<div className="nev_btn" onClick={()=>{ setzIndexOfDescriptionArea("-1"); setzIndexOfSpecificationArea("-1"); setzIndexOfReviewArea("1"); setzIndexOfFaqArea("-1")  }}>Review</div>
						<div className="nev_btn" onClick={()=>{ setzIndexOfDescriptionArea("-1"); setzIndexOfSpecificationArea("-1"); setzIndexOfReviewArea("-1"); setzIndexOfFaqArea("1")  }}>FAQ</div>
						<div className="gap_in_extra_info_nev"></div>
					</div>
					<div className="extra_details_area">
						<div style={{ zIndex : zIndexOfDescriptionArea}} className="extra_detail_btn description_area">
							{product.description}
						</div>
						<div style={{ zIndex : zIndexOfSpecificationArea}} className="extra_detail_btn specification_area"></div>
						<div style={{ zIndex : zIndexOfReviewArea}} className="extra_detail_btn review_area"></div>
						<div style={{ zIndex : zIndexOfFaqArea}} className="extra_detail_btn faq_area"></div>
					</div>
				</div>
			</div>
		);
}

export default SingalProduct;
'use client'
import { Image } from "react-bootstrap";
import "./product.css";
import { useState } from "react";

export const page = () => {

  const [counter,setCounter] = useState(1)
  return (
    <div className="container">

     
        {/* Breadcrums */}
     <div className="otherdetails my-4 d-flex gap-3">
      Home   <span style={{color:"#000"}}>&gt;</span>   Shop   <span style={{color:"#000"}}>&gt;</span>  <b className="productId">Asgaard sofa</b>
     </div>

      {/* Product details */}
      <div className=" row  ">

        {/* Images */}
        <div className="row col-md-7 col-12 ">

           {/* side images */}
          <div className="col-md-2 col-4 d-flex flex-column row-gap-3">

            <div>
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "76", height: "80px" ,backgroundColor:"#FFF9E5"}}
            />
            </div>

            <div>
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "76", height: "80px" ,backgroundColor:"#FFF9E5"}}
            />
            </div>

            <div>
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "76", height: "80px" ,backgroundColor:"#FFF9E5"}}
            />
            </div>

            <div>
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "76", height: "80px" ,backgroundColor:"#FFF9E5"}}
            />
            </div>
          </div>

          {/* main image */}
          <div className="col-md-6 col-8" >
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "481", height: "391px",backgroundColor:"#FFF9E5" }}
            
            />
          </div>
        </div>


        {/* product Details */}
        <div className="col-md-5 col-12">
          {/* heading */}
          <p className="heading">Asgaard sofa</p>
          {/* price */}
          <p className="Detailprice">Rs. 250,000.00</p>

          {/* Reviews */}
          <div className="d-flex gap-2">
            <p>*****</p>
            <p className="reviews">5 customer reviews</p>
          </div>
          {/* description */}
          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* size */}
          <div className="d-flex flex-column">
            <div>
              <p className="size">size</p>
            </div>
            <div className="d-flex gap-3">
              <p className="sizeSelected">L</p>
              <p className="sizeOptions">XL</p>
              <p className="sizeOptions">XLL</p>
            </div>

            
          </div>

          {/* color */}
          <div className="d-flex flex-column">
              <div>
                <p className="size">color</p>
              </div>
              <div className="d-flex gap-3">
                <p className="purple color"></p>
                <p className="black color"></p>
                <p className="peach color"></p>
              </div>

            </div>


            {/* counter and ADD to cart */}
            <div className="d-flex gap-2">
                {/* counter */}
                <div className="counter d-flex justify-content-around align-items-center">
                  <p onClick={() => {{(counter < 1)}setCounter(counter-1)}}>-</p>
                  <p>{counter}</p>
                  <p onClick={() => {setCounter(counter+1)}}>+</p>
                </div>

                {/* Add to cart */}
                <div className="addToCart d-flex justify-content-around align-items-center">
                  <p>Add to Cart</p>
                </div>
              </div>


              <p className="my-3">
                <hr />
              </p>

             {/* other Details */}
             <div>
                <p className="otherdetails">SKU         : S5001 </p>
                <p className="otherdetails">Category    : Sofas </p>
                <p className="otherdetails">Tags        : Sofa,Chair,Home,Shop </p>
                <p className="otherdetails">Share       : S5001 </p>

              </div>
        </div>


      </div>


      <hr />
     

      {/* description */}

      <div>

       <div className="d-flex justify-content-center gap-5 my-4">
        <p className="descriptionHeading" style={{color:"#000"}}>Description</p>
        <p className="descriptionHeading">Additonal Information</p>
        <p className="descriptionHeading">Reviews [5]</p>
       </div>

      <div>
       <p className="otherdetails">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
       
       <p className="otherdetails">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>


      {/* Images */}

      <div className="d-flex gap-3">

        <div className="sofaImages">
        <Image src="/SingleProduct/Mask group (6).png" alt="" />
        </div>

        <div className="sofaImages">
          <Image src="/SingleProduct/Mask group (7).png" alt="" />
        </div>
        

      </div>


      </div>




       {/*Related Products */}

       <div className="p-3 pt-5" >
        <div style={{textAlign:"center"}}>
          <h3>Related Products</h3>
        </div>

          {/* Top pics posts */}
        <div className="d-flex justify-content-center gap-2 mt-5 ">
          <div className="mycards p-2">
            <div style={{height:"287px"}}>
            <Image src="/ToppicsForyou/TrentorSofa.png" alt="" />
            </div>
            <p className="title">Trentor Modular sofa-3</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2">
          <div style={{height:"287px"}}>
            <Image src="/ToppicsForyou/Granite dining table with dining chair 1.png" alt=""  />
            </div>
            <p className="title">Granite dining table with dining chair</p>
            <p className="price">Rs. 25,000</p>
          </div>


          <div className="mycards p-2">
          <div style={{height:"287px"}}>
            <Image src="/ToppicsForyou/Mask group (1).png" alt="" />
          </div>
          <p className="title">Outdoor bar table and stool</p>
          <p className="price">Rs. 25,000</p>
          </div>


          <div className="mycards p-2">
          <div style={{height:"287px"}}>
            <Image src="/ToppicsForyou/Mask group (2).png" alt="" />
          </div>
          <p className="title">Plain console with teak mirror</p>
          <p className="price">Rs. 25,000</p>
          </div>

        </div>

         <div className="mt-5" style={{textAlign:'center'}}>
         <span className="underButton">View More</span>
         </div>

        </div>

      



    </div>
  );
};

export default page;

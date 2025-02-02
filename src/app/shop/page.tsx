import { Image } from "react-bootstrap";
import "./shop.css";
import { HeroSection } from "../components/HeroSection";
import { Properties } from "../components/properties";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
const Shop = () => {

  return (
    <div>

    
       {/* Hero Section */}
        <HeroSection pageHeading={'Shop'} navigate={'Shop'}/>
      

      {/* filter div */}
      <div className="filter mt-5 d-flex justify-content-center align-items-center">
        <div
          className="container row "
        >
          {/* filter icons div */}
          <div className="d-flex align-items-center justify-content-evenly col-12 col-md-6 gap-4">
            <div className="d-flex gap-3">
              <p className="filterIcons"><HiAdjustmentsHorizontal/></p>
              <p className="whiteDiv">Filter</p>
              <p className="filterIcons"><  HiViewGrid/></p>
              <p className="filterIcons"><BsViewList/></p>
            </div>

            <div>
              <p className="showing ">Showing 1-16 of 32 results </p>
            </div>
          </div>

          {/* show & sort div */}
          <div className="d-flex align-items-center justify-content-evenly col-12 col-md-6 gap-5">
            <div className="d-flex column-gap-3 align-items-center">
              <p>Show</p>
              <p className="whiteDiv">16</p>
            </div>
            <div className="d-flex  column-gap-3 align-items-center">
              <p>Short By</p>
              <p className="whiteDiv">Default</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container">
        <div className="mt-5 grid-container  ">
          
          <div className="mycards p-2 "> 
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/TrentorSofa.png" alt="" className="ImageHeight"  />
            </div>
            <p className="title">Trentor Modular sofa-3</p>
            <p className="price">Rs. 25,001</p>
          </div>

          <div className="mycards p-2 ">
            <div className="ImageDiv" >
            <Image
              src="/ToppicsForyou/Granite dining table with dining chair 1.png"
              alt=""
              className="ImageHeight"
            />
            </div>
            
            <p className="title">Granite dining table with dining chair</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2 ">

          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (1).png" alt="" className="ImageHeight"/>
          </div>
            <p className="title">Outdoor bar table and stool</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (2).png" alt="" className="ImageHeight" />
          </div>
            <p className="title">Plain console with teak mirror</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2 ">
           
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Mask group (3).png" alt="" className="ImageHeight" />
           </div>
            <p className="title">Grain coffee table</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2 ">

          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Kent coffee table 1.png" alt="" className="ImageHeight"  />
            
            </div>
            <p className="title">Kent coffee table</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Round coffee table_color 2 1.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Round coffee table_color 2</p>
            <p className="price">Rs. 25,000</p>
          </div>


          <div className="mycards p-2 ">

          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Reclaimed teak coffee table 1.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Reclaimed teak coffe table</p>
            <p className="price">Rs. 25,200.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Mask group (3).png" alt="" className="ImageHeight" />
          </div>
            <p className="title">Plain Console_</p>
            <p className="price">Rs. 258,000.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Reclaimed teak Sideboard 1.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Reclaimed teak Sideboard</p>
            <p className="price">Rs. 20,000.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/SJP_0825  1.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">SJP_0825</p>
            <p className="price">Rs. 20,0000.00</p>
          </div>

          <div className="mycards p-2 ">

          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Granite dining table with dining chair 1.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Bella Chair & table</p>
            <p className="price">Rs. 100,000.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Mask group (4).png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Granite square side table</p>
            <p className="price">Rs. 258,800.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ShopImages/Products/Mask group (5).png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Asgard sofa</p>
            <p className="price">Rs. 250,000.000</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (1).png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Maya sofa three seater</p>
            <p className="price">Rs. 115,000.00</p>
          </div>

          <div className="mycards p-2 ">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (2).png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Outdoor sofa set</p>
            <p className="price">Rs. 25,000</p>
            
          </div>

        </div>


        {/* pages Button */}
        <div className="d-flex gap-4 justify-content-center m-3">
          <p className="page">1</p>
          <p className="otherPages">2</p>
          <p className="otherPages">3</p>
          <p className="otherPages">Next</p>
        </div>
      </div>



      {/* Properties div */}
     
      <Properties />

    </div>
  );
};


export default Shop

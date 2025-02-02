import React from 'react'
import { Image } from 'react-bootstrap'
import './component.css'
export const TopPics = () => {
  return (
    <div>
         <div className="mt-5 grid-container ">
          <div className="mycards p-2">
            <div className="ImageDiv">
            <Image src="/ToppicsForyou/TrentorSofa.png" alt="" className="ImageHeight" />
            </div>
            <p className="title">Trentor Modular sofa-3</p>
            <p className="price">Rs. 25,000</p>
          </div>

          <div className="mycards p-2">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Granite dining table with dining chair 1.png" alt="" className="ImageHeight"  />
            </div>
            <p className="title">Granite dining table with dining chair</p>
            <p className="price">Rs. 25,000</p>
          </div>


          <div className="mycards p-2">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (1).png" alt="" className="ImageHeight" />
          </div>
          <p className="title">Outdoor bar table and stool</p>
          <p className="price">Rs. 25,000</p>
          </div>


          <div className="mycards p-2">
          <div className="ImageDiv">
            <Image src="/ToppicsForyou/Mask group (2).png" alt="" className="ImageHeight" />
          </div>
          <p className="title">Plain console with teak mirror</p>
          <p className="price">Rs. 25,000</p>
          </div>

        </div>
    </div>
  )
}

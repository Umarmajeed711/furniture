'use client'
import { Image } from "react-bootstrap";
import './component.css'

export const HeroSection = (props) => {
  return (
    <div>
        {/* Front Image */}
      <div className="d-flex justify-content-center align-items-center hero">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Image src="/ShopImages/mablelogo/Meubel House_Logos-05.png" alt="" />
          <p className="pageHeading">{props.pageHeading}</p>
          <p className="breadcrums">
            <span style={{ fontWeight: "500" }}>Home &gt;</span> {props.navigate}
          </p>
        </div>
      </div>

    </div>
  )
}

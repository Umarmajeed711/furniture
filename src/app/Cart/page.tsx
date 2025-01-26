
import { Image } from 'react-bootstrap'
import './cart.css'
export default function page  () {
  return (
    <div>


{/* Front Image */}
<div className="d-flex justify-content-center align-items-center shop">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Image src='/ShopImages/mablelogo/Meubel House_Logos-05.png' alt="" />
          <p className="pageHeading">Cart</p>
          <p className="breadcrums">
            <span style={{ fontWeight: "500" }}>Home &gt;</span> cart
          </p>
        </div>
      </div>


      <div className='container  p-3 mt-5'>

        <div className='row gap-5'>

         {/* add to cart items */}
        <div className='col-8  '>

            <div>

                 {/* cart header */}
                <div className='row  cartHeader p-3'>
                    <div className='col-2'></div>
                    <div className='col-3'>Product</div>
                    <div className='col-2'>Price</div>
                    <div className='col-2'>Quantity</div>
                    <div className='col-2'>Subtotal</div>
                    <div className='col-1'></div>
                    </div>

                  {/* cart items details */}
                    <tr className='row  border d-flex align-items-center'>
                    <div className='col-2 cartImage'>
                        <Image src="/Asgaard sofa 1.png" alt="" width={100} />
                    </div>
                    <div className='col-3 otherdetails'>Asgaard Sofa</div>
                    <div className='col-2 otherdetails'> Rs.250,000.00</div>
                    <div className='col-2  d-flex justify-content-center'>
                        <div className='border px-2 py-1 title'>1</div></div>
                    <div className='col-2 title'>250,000.00</div>
                    <div className='col-1'>&</div>

                    </tr>
            </div>

        </div>

        {/* Cart Total */}
        <div className='col-3 px-5 py-3 cartHeader d-flex justify-content-center'>


        <div className='d-flex flex-column align-items-center  p-2'>

            {/* heading cart total */}
            <p className='cartTotal'>Cart Totals</p>

            {/* Sub total of each product */}
            <div className='d-flex column-gap-5'>
                <p className='title'>Subtotal</p>
                <p className='otherdetails'>Rs.250,000.00</p>
            </div>

            {/* total amount div */}
            <div className='d-flex column-gap-5'>
                <p className='title'>Total</p>
                <p className='shoppingTotal'>Rs.250,000.00</p>
            </div>

            {/* cheack out button */}
            <div className='my-3'>
                <button type='submit' className='loginButton'>
                    check out
                </button>
            </div>
         </div>

        </div>

        
        </div>
        
      </div>




       {/* Properties div */}
       <div className="property d-flex justify-content-center ">
        <div className="row container ">
          <div className="col-4">
            <p className="propertyHeading">Free Delivery</p>
            <p className="propertypara">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>

          <div className="col-4">
            <p className="propertyHeading">90 Days Return</p>
            <p className="propertypara">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          <div className="col-4">
            <p className="propertyHeading">Secure Payment</p>
            <p className="propertypara">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>

        
    </div>
  )
}


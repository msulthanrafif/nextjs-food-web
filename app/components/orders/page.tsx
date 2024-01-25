const Orders = () => {

  return (
    <>
      <div className="d-flex flex-column align-item-start p-2 rounded-3 h-100" style={{ backgroundColor: "#1F1D2B" }}>
        <div className="p-2 fw-semibold fs-3">Order Number</div>
        <div className="p-2 d-flex">
          <div className="btn btn-outline-warning btn-sm me-2">Dine In</div>
          <div className="btn btn-outline-warning btn-sm me-2">Take It</div>
          <div className="btn btn-outline-warning btn-sm">Delivery</div>
        </div>
        <div className="p-2">
          <div className="d-flex border-bottom">
            <div className="me-auto p-0">Item</div>
            <div className="p-0 me-3">Qty</div>
            <div className="p-0">Price</div>
          </div>
        </div>
        <div className="p-2 mt-auto">
          <div className="d-flex justify-content-between mb-2">
            <div>Discount</div>
            <div>price</div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div>Subtotal</div>
            <div>price</div>
          </div>
          <div className="btn btn-warning text-light fw-bolder w-100">
            Continue to Payment
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
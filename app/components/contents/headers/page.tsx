const Headers = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pb-0 fw-semibold fs-3">
                Made Resto
              </div>
              <div className="row fs-5">
                <div className="col">Tuesday, 2 Feb 2021</div>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <div className="container"></div>
            <div className="container col-6">
              <form role="search">
                <input className="form-control" type="search" placeholder="Search for food, coffe, etc.." />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Headers
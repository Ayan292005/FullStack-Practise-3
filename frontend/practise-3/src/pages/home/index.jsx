
function Home() {

  return (
    <>
    <div>
      <img src="https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg" alt="" className='relative' />
      <div className="flex  flex-col items-start gap-8 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <h6>Spring / Summer Collection 2017</h6>
        <h1 className='text-7xl'>Get up to 30% Off <br /> New Arrivals</h1>
        <button className='hero-btn'>shop now</button>
      </div>
    </div>
    <div className="flex container gap-7" style={{margin:"25px auto"}}>
      <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
      <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
      <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
    </div>
    </>
  )
}

export default Home
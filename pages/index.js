export default function Home() {
  return (
		<>
			<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://itdevbox.com/wp-content/uploads/2019/10/software-development-banner-1024x347.jpg" className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.dlapiper.com/~/media/images/news/2018/programming_code_technology_computerwebsite_banner_432008923.jpg?h=257&la=it&w=759&hash=1F28887FDDA2E2B4B6D148615F6EC0D81A1891BA" className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2so3rrsBwvY8d9rLEB4jGLKsbP8Tzo1MRCjsGEa0E7I6nAOj-3w4CUHKapvQ54XPXvOA&usqp=CAU" className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://anayacybertech.com/wp-content/uploads/2018/07/cstmswft-1170x341.jpg" className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
		</>
  )
}
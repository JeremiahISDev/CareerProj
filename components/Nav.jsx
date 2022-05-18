import Link from 'next/link'
export default function Nav(){
	return(
		<>
		<div className="navbar bg-base-700">
  <div className="flex-1 px-2">
    <Link href="/" className="text-lg font-bold">Developers</Link>
  </div> 
  <div className="invisible md:visible"><div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <div className="btn btn-ghost rounded-btn"><Link href="/">Home</Link></div>
      <div className="dropdown dropdown-end">
        <label tabindex="0" className="btn btn-ghost rounded-btn">About</label>
        <ul tabindex="0" className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><Link href="/About/Qualities">Qualities</Link></li> 
          <li><Link href="/About/Benefits">Benefits</Link></li>
					<li><Link href="/About/Challanges">Challanges</Link></li>
					<li><Link href="/About/Stats">Statistics</Link></li>
        </ul>
      </div>
    </div>
  </div></div>
			<div className="visible md:invisible">
			<div className="dropdown dropdown-end">
 <label className="btn btn-circle swap swap-rotate">
  
  <input type="checkbox" />

  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
</label>
  <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
  <ul className="menu bg-base-100 w-56 p-2 rounded-box">
  <li><Link href="/">Home</Link></li>
  <li className="menu-title">
    <span>About</span>
  </li>
  <li><Link href="/About/Qualities">Qualities</Link></li>
  <li><Link href="/About/Benefits">Benefits</Link></li>
	<li><Link href="/About/Challanges">Challanges</Link></li>
	<li><Link href="/About/Stats">Statistics</Link></li>
		
</ul>
  </ul>
</div>
			</div>
</div>
		</>
	)
}
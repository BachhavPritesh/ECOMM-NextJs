import Link from "next/link";

const navData = [
    {label:"Home",href:"/",id:1},
    {label:"products",href:"/products",id:2},
    {label:"conatcts",href:"/contact",id:4},
    {label:"categories",href:"/categories",id:5},
    {label:"api",href:"/api",id:6}
]

const NavBar = ()=>{



    return(
        <div>
            <nav className="flex gap-3 justify-center m-2">
               {navData.map((data)=>(<Link key={data.id} className="border-2 rounded p-2" href={data.href}>{data.label}</Link>))}
            </nav>
        </div>
    )
}

export default NavBar
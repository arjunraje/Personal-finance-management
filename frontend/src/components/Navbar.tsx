import { useNavigate } from "react-router-dom"
import { logoutApi } from "../service/authApi"
import { useAuthStore } from "../store/authStore"


const Navbar = () => {
    const {user,logout,login}=useAuthStore()
    const navigate=useNavigate()
    const handleLogout=async()=>{
        const res=await logoutApi()
        logout()
        console.log(res)

    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Logo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    
                    <li>
                        <details>
                            <summary>Accounts</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a>Account1</a></li>
                                <li><a>Account2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Transactions</a></li>
                    {user?.name?(<a className="btn btn-ghost text-xl" onClick={handleLogout}>Logout</a>):(<a className="btn btn-ghost text-xl" onClick={()=>navigate('/login')}>Login</a>)}
                </ul>
            </div>
        </div>
    )
}

export default Navbar

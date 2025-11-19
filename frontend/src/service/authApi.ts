import api from "./api"

export const loginApi =async(email:string,password:string)=>{
    const res=await api.post("/auth/login",{email,password})
    return res.data;
}

export const logoutApi=async()=>{
    const res=await api.post("/auth/logout")
    return res
}
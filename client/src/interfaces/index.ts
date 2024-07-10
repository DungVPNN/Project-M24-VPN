export interface Product {
    id: number,
    name: string,
    status: string
    category: string,
    price: number
    date: string
    description: string
    stock: number
    image: string
    created_at: string // Thời gian được tạo, Mặc định là ngày hiện tại, format dạng dd/mm/yyyy
    updated_at: string // Thời gian cập nhật gần nhất, Mặc định là ngày hiện tại, format dạng dd/mm/yyyy
}
export interface Category {
    id: number
    name: string
    description: string
    status: boolean
    products: [] // Mảng các sản phẩm của danh mục 
}

export interface User {
    id:number,
    name:string,
    email:string,
    status:boolean,
    password:string,
    role:boolean  //True - Quản trị viên False - User
    phone:string,
    address:string,
    date:string,
    updated_date:string,
}
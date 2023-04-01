const apiConstants = {
    auth: {
        addNew: 'users/add',
        loginIn: 'auth/login'
    },
    products: {
        getAll: 'products/category/home-decoration',
        retrieve: 'products/',
        addProductToCart: 'carts/add',
        createProduct: 'products/add',
    }
}

export const headers = { "Content-Type": "application/json" }

export default apiConstants
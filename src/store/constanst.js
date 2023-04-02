const apiConstants = {
    auth: {
        addNew: 'users/add/',
        loginIn: 'auth/login/'
    },
    products: {
        getAll: 'products/category/home-decoration/',
        retrieve: 'products/',
        addProductToCart: 'carts/add/',
        createProduct: 'products/add/',
    },
    todos: {
        getAll: 'todos/',
        update: 'todos/',
        remove: 'todos/',
        addNewOne: 'todos/add/',
    },
    cart: {
        getCart: 'carts/user/',
        removeCart: 'carts/'
    }
}

export const headers = { "Content-Type": "application/json" }

export default apiConstants
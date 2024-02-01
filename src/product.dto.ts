export type productDto = {
    name: string,
    price: number
}
export const isValid = (product: productDto): boolean => {
    if (Object.keys(product).length !== 2)
        return false
    return product.name !== undefined && product.price !== undefined
}
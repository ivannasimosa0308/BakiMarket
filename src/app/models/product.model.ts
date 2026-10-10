export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    }
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;

}

export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}


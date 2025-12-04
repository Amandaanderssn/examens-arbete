export interface UserApiResponse {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    qrCode: string;
}

export interface DrinksApiResponse {
    name: string,
    category: string,
    image: string,
    description: string,
    price: number,
    restaurant: string,
    likes: number
    location: string
}

export interface FoodApiResponse {
    name: string,
    category: string,
    image: string,
    description: string,
    price: number,
    restaurant: string,
    likes: number
    location: string
}

export interface ApiResponseWrapper {
    drinks: DrinksApiResponse[],
    food: FoodApiResponse[],
    users: UserApiResponse[]
}
export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    BASE_URL: "https://www.luxurylrpcosmetics.com",
    SUPPORT_EMAIL: "support@luxurylrpcosmetics.com",
    PHONE_NUMBER: "+1-800-555-0199",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://www.instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://www.facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
};

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Interface representing a customer in the luxury LRP cosmetics system.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

/
 * Function to create a new product for luxury LRP cosmetics.
 * 
 * @param product - The product details to be added.
 * @returns The newly created product.
 */
export function createProduct(product: Product): Product {
    // Business logic to add the product to the inventory
    return product; // Placeholder return
}

/
 * Function to register a new customer for luxury LRP cosmetics.
 * 
 * @param customer - The customer details to be registered.
 * @returns The newly registered customer.
 */
export function registerCustomer(customer: Customer): Customer {
    // Business logic to register the customer
    return customer; // Placeholder return
}
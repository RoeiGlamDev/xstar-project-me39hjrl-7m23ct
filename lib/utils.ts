import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Represents a product in the luxury LRP cosmetics line.
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {number} price - Price of the product.
 * @property {string} category - Category of the product (e.g., skincare, makeup).
 * @property {string} imageUrl - URL of the product image.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Represents a customer in the luxury LRP cosmetics application.
 * @interface Customer
 * @property {string} id - Unique identifier for the customer.
 * @property {string} name - Name of the customer.
 * @property {string} email - Email address of the customer.
 * @property {string} phone - Phone number of the customer.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
}

/
 * Formats a product's price to a currency string.
 * @param {number} price - The price to format.
 * @returns {string} The formatted price string.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price, 'USD');
}

/
 * Generates a unique identifier for a new product.
 * @returns {string} A unique identifier.
 */
export function generateProductId(): string {
    return luxuryLRP-${Date.now()}-${Math.floor(Math.random() * 1000)};
}

/
 * Generates a unique identifier for a new customer.
 * @returns {string} A unique identifier.
 */
export function generateCustomerId(): string {
    return customer-${Date.now()}-${Math.floor(Math.random() * 1000)};
}

/
 * A utility function to create a new product for luxury LRP cosmetics.
 * @param {string} name - The name of the product.
 * @param {string} description - The description of the product.
 * @param {number} price - The price of the product.
 * @param {string} category - The category of the product.
 * @param {string} imageUrl - The URL of the product image.
 * @returns {Product} The newly created product.
 */
export function createProduct(name: string, description: string, price: number, category: string, imageUrl: string): Product {
    return {
        id: generateProductId(),
        name,
        description,
        price,
        category,
        imageUrl,
    };
}

/
 * A utility function to create a new customer for luxury LRP cosmetics.
 * @param {string} name - The name of the customer.
 * @param {string} email - The email of the customer.
 * @param {string} phone - The phone number of the customer.
 * @returns {Customer} The newly created customer.
 */
export function createCustomer(name: string, email: string, phone: string): Customer {
    return {
        id: generateCustomerId(),
        name,
        email,
        phone,
    };
}

/
 * A utility function to format a product description for luxury LRP cosmetics.
 * @param {string} description - The description to format.
 * @returns {string} The formatted description.
 */
export function formatProductDescription(description: string): string {
    return Experience the luxury of ${description} with luxury LRP cosmetics.;
}
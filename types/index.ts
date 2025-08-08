import { Product, Category, User } from './models';

/
 * Represents a product in the luxury LRP cosmetics line.
 * @interface
 */
export interface LuxuryLRPProduct extends Product {
    /
     * The name of the product.
     * @type {string}
     */
    name: string;

    /
     * The description of the product.
     * @type {string}
     */
    description: string;

    /
     * The price of the product in USD.
     * @type {number}
     */
    price: number;

    /
     * The category the product belongs to.
     * @type {LuxuryLRPCategory}
     */
    category: LuxuryLRPCategory;

    /
     * The URL of the product image.
     * @type {string}
     */
    imageUrl: string;

    /
     * The rating of the product.
     * @type {number}
     */
    rating: number;

    /
     * The stock availability of the product.
     * @type {boolean}
     */
    inStock: boolean;
}

/
 * Represents a category of products in luxury LRP cosmetics.
 * @interface
 */
export interface LuxuryLRPCategory extends Category {
    /
     * The name of the category.
     * @type {string}
     */
    name: string;

    /
     * The description of the category.
     * @type {string}
     */
    description: string;

    /
     * The products under this category.
     * @type {LuxuryLRPProduct[]}
     */
    products: LuxuryLRPProduct[];
}

/
 * Represents a user of the luxury LRP cosmetics website.
 * @interface
 */
export interface LuxuryLRPUser extends User {
    /
     * The user's first name.
     * @type {string}
     */
    firstName: string;

    /
     * The user's last name.
     * @type {string}
     */
    lastName: string;

    /
     * The user's email address.
     * @type {string}
     */
    email: string;

    /
     * The user's password (hashed).
     * @type {string}
     */
    password: string;

    /
     * The user's preferred payment method.
     * @type {string}
     */
    paymentMethod: string;

    /
     * The user's shipping address.
     * @type {string}
     */
    shippingAddress: string;
}

/
 * Represents the shopping cart for luxury LRP cosmetics.
 * @interface
 */
export interface LuxuryLRPCart {
    /
     * The products added to the cart.
     * @type {LuxuryLRPProduct[]}
     */
    items: LuxuryLRPProduct[];

    /
     * The total price of items in the cart.
     * @type {number}
     */
    totalPrice: number;

    /
     * Adds a product to the cart.
     * @param {LuxuryLRPProduct} product - The product to add.
     */
    addItem(product: LuxuryLRPProduct): void;

    /
     * Removes a product from the cart.
     * @param {LuxuryLRPProduct} product - The product to remove.
     */
    removeItem(product: LuxuryLRPProduct): void;

    /
     * Clears the cart.
     */
    clearCart(): void;
}

/
 * Represents the checkout process for luxury LRP cosmetics.
 * @interface
 */
export interface LuxuryLRPCheckout {
    /
     * The user making the purchase.
     * @type {LuxuryLRPUser}
     */
    user: LuxuryLRPUser;

    /
     * The shopping cart being checked out.
     * @type {LuxuryLRPCart}
     */
    cart: LuxuryLRPCart;

    /
     * Processes the payment for the order.
     * @returns {Promise<boolean>} - Returns true if the payment is successful.
     */
    processPayment(): Promise<boolean>;

    /
     * Confirms the order after payment.
     * @returns {Promise<void>}
     */
    confirmOrder(): Promise<void>;
}
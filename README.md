## DineFlow Restaurant App

#### Links

- [GitHub Repository Link](https://github.com/ChalaniDissanayaka/dineflow-restaurant-app-hackathon)

#### Author

Chalani Dissanayaka

### 1. Setup and How to Run the App

#### Backend Setup:

##### 1. Clone the Repository:

```
git clone git@github.com:ChalaniDissanayaka/dineflow-restaurant-app-hackathon.git
cd react-restaurant-backend
```

##### 2. Install Dependencies: Ensure you have Node.js and npm installed. Then run:

```
npm install
```

##### 3. Ensure - Environment Variables: Create a .env file in the root directory with the following content:

```
PORT=4200
```

##### 4. Start the Server: Run the following command to start the backend server:

```
npm run dev
```

or

```
npm start
```

#### Frontend Setup:

##### 1. Clone the Frontend Repository:

```
git git@github.com:ChalaniDissanayaka/dineflow-restaurant-app-hackathon.git
cd react-restaurant-frontend
```

##### 2. Install Dependencies: Ensure you have Node.js and npm installed. Then run:

```
npm install
```

##### 3. Start the React App: Run the following command to start the frontend:

```
npm start
```

### 2. Problem Significance of the Restaurant App

In today's fast-paced world, restaurants face challenges in managing orders, inventory, and customer satisfaction efficiently. This restaurant app addresses these issues by streamlining order management, enabling seamless communication between customers and restaurant staff, and providing insights into menu performance. By enhancing operational efficiency, the app ultimately aims to improve customer experience and satisfaction, which is critical in a competitive dining environment.

The significance of the restaurant app is to showcase my frontend and backend development skills for potential hiring managers. This project also serves as a practical test of my knowledge gained at Coder Academy during hackathon week, providing an opportunity to apply what I’ve learned in a real-world scenario.

### 3. Features and Functionality of the App

- User Cart and Ordering:

  - Users can browse the menu, add items to their cart, modify quantities, and place orders without needing to register or log in.

- Admin Authentication:

  - Only admins need to register and log in to access management functionalities.

- Menu Management:

  - Admins have full control over menu items, with the ability to add, edit, or delete items. Each item can include name, prices, and images.

- Order Tracking and Management:

  - Admins can view all placed orders, track their status, and mark orders as complete, effectively managing the restaurant's operations.

- Notifications:

  - Users receive notifications for successful actions, such as placing an order.
  - Admins receive a notification upon successfully registering, provided their chosen username is unique and not already in the database. This ensures that no duplicate admin accounts are created.

- Responsive Design:
  - The app is built with a responsive layout, ensuring usability across devices.

### 4. User Stories for the Restaurant App

1. **As a user**, I don't need to register or log in to the app, and I can place my order without any login required.

2. **As a user**, I can browse the menu, so I can choose items that I want to order.

3. **As a user**, I can add items to my cart and adjust the quantities, so I can customize my order. I can only add each item to the cart once. If I want more than one plate of the same item, I can modify the quantity using the "+" or "×" buttons instead of adding the same item twice.

4. **As a user**, I want to place my order easily, so I can receive my meals.

5. **As an admin**, I need to register and log in to manage menu items and orders, so I can maintain the restaurant's offerings and keep the system secure.

6. **As an admin**, As an admin, I can view the orders, and after completing an order, I can press the "Complete" button, which will mark the order as completed. so I can ensure timely service and track customer satisfaction.

### 5. Tech Stack for DineFlow Restaurant App (Third-Party Services, Packages, and Dependencies)

##### Backend:

- **Node.js:** JavaScript runtime for handling the server-side operations of the app.
- **Express:** A web framework for Node.js to handle server routing and middleware.
- **SQLite3 (via Knex.js):** Lightweight SQL database to store and manage data like users, items, and orders.
- **Knex.js:** A SQL query builder used for database migrations, queries, and connecting to SQLite3.
- **Express-Session (SQLite3 storage):** To handle user sessions for login, authentication, and maintaining session state.
- **Bcrypt:** For encrypting user passwords to ensure secure authentication.
- **Multer:** Middleware for handling file uploads (e.g., images for menu items).
- **dotenv:** To manage environment variables.

##### Frontend:

- **React:** JavaScript library for building user interfaces, handling the app's dynamic components and routing.
- **Chakra UI:** Component library for styling and creating responsive layouts with minimal effort.
- **Axios:** For making HTTP requests to the backend API.
- **React Router:** Library for managing navigation and routing in the app.
- **React Hot Toast:** For providing user-friendly toast notifications to users (e.g., success or error messages).

- **CSS Modules:** To manage and modularize component-specific styles.

### 6. Endpoints in the App

#### User Authentication:

1. **POST** `/auth/register`

   - Registers a new admin user.

1. **POST** `/auth/login`

   - Logs in an admin user and initiates a session.

1. **POST** `/auth/logout`

   - Logs out the admin user and ends the session.

1. **GET** `/auth/me`

   - Retrieves the logged-in admin user's profile information.

##### Menu Items:

1. **POST** `/item/add`

   - Adds a new menu item (admin only).

2. **GET** `/item/all`

   - Retrieves all available menu items (accessible to users and admins).

3. **GET** `/item/:id`

   - Retrieves details for a specific menu item by its ID.

4. **PUT** `/item/edit/:id`

   - Edits a specific menu item by its ID (admin only).

#### Orders:

1. **POST** `/item/place-order`

   - Places an order (regular users without registration).

2. **GET** `/item/orders`

   - Retrieves all placed orders (admin only).

3. **POST** `/item/order-complete/:id`

   - Marks a specific order as completed by its ID (admin only).

### 6. Entity-Relationship Diagram (ERD) for the Restaurant App:

The ERD for the entities User, Item, Order (with Order_Main and Order_Item). The ERD describes the relationships between these tables and the fields they contain.

![ERD for DineFlow Restaurent App](../dineflow-restaurant-app-hackathon/react-restaurant-frontend/public/DineFlow-Restaurent-App.drawio.png "sea color theme-1")

#### Entities and Attributes:

1. **User**

   - `id` (PK, Integer, Auto-increment)
   - `email` (String, 255)
   - `password` (String, 255)
   - `is_admin` (Boolean): A flag to distinguish whether a user is an admin (`true` for admin, `false` for regular users). - ( further development )
   - `created_at` (Timestamp): Date and time the user was created. - ( further development )
   - `updated_at` (Timestamp): Date and time the user’s details were last updated. - ( further development )

2. **Item**

   - `id` (PK, Integer, Auto-increment)
   - `name` (String, 255)
   - `price` (Decimal, 2)
   - `image` (Text)
   - `created_at` (Timestamp): Date and time the item was created - ( further development )
   - `updated_at` (Timestamp): Date and time the item’s details were last updated. - ( further development )

3. **Order_Main**

   - `id` (PK, Integer, Auto-increment)
   - `code` (String, 255)
   - `complete` (Boolean)
   - `total` (Decimal, 2)
   - `created_at` (Timestamp): Date and time the order was placed. - ( further development )
   - `updated_at` (Timestamp): Date and time the order’s status was last updated. - ( further development )

4. **Order_Item**
   - id (PK, Integer, Auto-increment)
   - orderid (FK to Order_Main)
   - itemid (FK to Item)
   - qty (Decimal, 0)

#### Explanation of the Relationships:

1. **Users Table:**

   - Contains `id`, `email`, `password`, and `is_admin` to differentiate between regular users and admins.
   - `is_admin`: a boolean field, where `true` represents an admin user and `false` represents a normal user.

2. **Items Table:**

   - Contains `id`, `name`, `price`, `image`, `created_at`, and `updated_at`.
   - Admin users can perform CRUD operations (Create, Read, Update, Delete) on items.

3. **Order_Main Table:**

   - Represents the order details placed by users with `id`, `code`, `complete` (boolean to track whether the order is completed or not), `total`, `created_at`, and `updated_at`.
   - Admin users can view all orders and mark an order as complete.

4. **Order_Item Table:**

   - Tracks which items are part of a specific order by linking `orderid` (foreign key to `Order_Main`) and itemid (foreign key to `Items`).
   - The `qty` field represents the quantity of each item ordered.

#### Admin Functionality:

- Admin User Registration & Login: Admins must register and log in to the app with an `is_admin` flag set to `true`. Once logged in, admins can:
  - **Manage Items:**
    - Add new menu items (with name, price, image).
    - Edit existing items.
    - Delete items if necessary. ( further development )
  - **Manage Orders:**
    - View all customer orders.
    - Mark an order as "complete" by updating the complete status in the `Order_Main` table based on the `id`.

#### Relationships:

- A User can place multiple Orders. (one-to-many).
- Each Order can contain multiple Items (many-to-many relationship via the Order_Item table).
- Each Item can be part of many Orders (many-to-many relationship via Order_Item).
- Admins have the ability to manage both Items and Orders, whereas regular users can only place orders without authentication.

### 7. Feature Development Part for the App

#### User Management:

- **Role-based Access Control (RBAC)**: Implement a system to differentiate between regular users and admins, where admins can access additional features like adding, updating, and deleting menu items, as well as viewing all orders.
- **Password Recovery**: Enhance the system by adding a "Forgot Password" option, allowing users to reset their passwords securely.

#### Menu and Order Enhancements:

- **Search and Filter Functionality**: Add the ability for users to search and filter menu items based on categories like item_type (e.g., rice, noodles, pasta). This improves usability by helping users quickly find what they want.
- **Real-time Order Status Updates**: Implement WebSockets to provide real-time updates on order status (e.g., pending, completed) to users and admins.

#### Improved UI/UX:

- **Animations and Transitions**: Add smooth animations and transitions for a more engaging and interactive experience when users navigate through the app.
- **Performance Optimization**: Enhance the app’s performance, making it faster and more responsive.

#### Database Updates:

- **Delete Item (CRUD)**: Implement the ability for admins to delete items from the Items table using the existing database setup.
- **Timestamps**: Add the following timestamp attributes to track record changes:

  - `created_at`: Captures when users, items, or orders are created.
  - `updated_at`: Captures when users, items, or orders are last modified.

- **New Attribute for Items Table**:
  - **Item Type**: Add an `category` field in the Items table to categorize menu items (e.g., rice, noodles, pasta), enabling easier filtering and menu management.

### Conclusion

The DineFlow restaurant app is designed to provide a smooth and efficient experience for both customers and admins. Customers can browse the menu, place orders, and track their order status in real-time. Admins have the ability to manage menu items, view orders, and mark them as completed. The app includes features like role-based access control, filtering menu items by category, and a user-friendly interface with animations for an engaging experience.

With future enhancements like an add the ability for users to search and filter menu items, DineFlow aims to improve performance and deliver a more interactive and easy-to-use platform for restaurant management. The app is a strong showcase of both front-end and back-end development skills.

# eLearning Platform
![photo](https://www.pixelmattic.com/wp-content/uploads/2016/12/10-elearning-website-features.jpg)

## Overview
This project is an eLearning platform built using **Next.js** and **TypeScript**. The platform provides users with the ability to purchase courses, track their learning progress, and access daily analytics. The application also features a robust authentication system to ensure secure access to the platform's features.

## Features

### 1. **Course Purchase**
- Users can browse available courses, view details, and purchase courses directly from the platform.
- Integration with payment gateways to securely process transactions.

### 2. **Course Management**
- Users can manage their purchased courses, including starting, pausing, or resuming them.
- Course progress is tracked and saved, allowing users to pick up where they left off.

### 3. **Daily Analytics**
- Users have access to daily analytics, providing insights into their learning habits and progress.
- Visual representation of data to help users better understand their performance over time.

### 4. **Authentication**
- Secure authentication system implemented using **Next.js**'s built-in authentication features.
- Supports user registration, login, logout, and password management.
- Role-based access control to ensure that only authorized users can access certain features.

## Tech Stack

- **Frontend:** 
  - [Next.js](https://nextjs.org/) - React framework for building fast, user-friendly interfaces.
  - [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing to reduce errors and improve code quality.
  
- **Backend:** 
  - [Express.js](https://expressjs.com/) - Minimalist web framework for Node.js, used to create the server and APIs.
  - [Node.js](https://nodejs.org/) - JavaScript runtime that powers the backend of the application.

- **Database:**
  - [MongoDB](https://www.mongodb.com/) - NoSQL database used to store user data, course details, and analytics.

- **Authentication:**
  - [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js that supports various providers and strategies.
  
- **Payment Processing:**
  - [Stripe](https://stripe.com/) (or any other payment gateway) - To handle secure payment transactions.

## Installation

### Prerequisites
- Node.js v14.x or higher
- npm or yarn
- MongoDB instance (local or cloud)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/elearning-platform.git
    cd elearning-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    Create a `.env.local` file in the root directory and add your configuration values:

    ```bash
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-public-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    MONGODB_URI=your-mongodb-uri
    NEXTAUTH_SECRET=your-nextauth-secret
    NEXTAUTH_URL=http://localhost:3000
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss improvements or features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any queries or issues, feel free to contact the project maintainer at [bineetpradhan03@gmail.com](mailto:bineetpradhan03@gmail.com).

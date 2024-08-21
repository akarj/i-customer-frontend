# iCustomer Frontend

Welcome to the iCustomer frontend project. This repository contains the client-side code for the iCustomer application, handling all the API requests, database interactions, and authentication processes.

## Getting Started

Follow these steps to set up and run the iCustomer frontend on your local machine.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/akarj/i-customer-frontend.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using your preferred package manager. You can use `bun` or `npm`:

```bash
bun i
# or
npm i
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
VITE_API_GOOGLE_CLIENT_ID={{Google OAuth2.0 Client ID}}
VITE_API_GOOGLE_CLIENT_SECRET={{Google OAuth2.0 Client ID}}
VITE_API_BASE_URL={{Backend Application Running URL}}
VITE_API_VERSION=v1
VITE_API_LOCAL_STORAGE_KEY={{Your JWT Secret}}
```

-   For generating GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET, please visit [medium](https://medium.com/@tony.infisical/guide-to-using-oauth-2-0-to-access-google-apis-dead94d6866d)

### 4. Run the Application

To start the client server, use the following command:

```bash
bun run dev
# or
npm run dev
```

### 5. Access the Application

Once the server is running, you can access the application at [http://localhost:5173](http://localhost:5173) (or the respective `PORT` you've set).

## Live Application URL

Visit [this](https://i-customer-frontend.vercel.app/) for live site.

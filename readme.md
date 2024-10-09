# Mapbox Routes Manager - Backend
Welcome to the Mapbox Routes Manager Backend! This Node.js application serves as the backend for managing Mapbox routes. It handles API requests, retrieves and serves data, and manages the interaction between the frontend and Mapbox services.

## 🛠️ Tech Stack
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, providing an efficient and scalable platform for network applications.
- **Express**: A minimal and flexible Node.js web application framework, providing a robust set of features for building RESTful services and APIs.
- **Mapbox**: The backend integrates with Mapbox to provide mapping and geolocation services.

## 🚀 Getting Started
### Prerequisites
Before starting the backend application, ensure you have the following installed:

- Node.js: Version 14 or above
- npm: Node package manager
- Mapbox Access Token: Required to access Mapbox services. You can obtain one by creating an account on Mapbox.

### Step 1: Install Dependencies
Navigate to the root directory of the backend and run:

```
npm install
```
This command installs all necessary dependencies listed in the package.json file.

### Step 2: Set Up Environment Variables
Create a .env file in the root of the backend directory. Add your Mapbox access token as follows:

```
MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
```
Replace your_mapbox_access_token with your actual Mapbox access token.

### Step 3: Start the Backend Application
Run the following command to start the backend server:

```
npm start
```

### Step 4: Access the Backend
Once the server is running, you can access the backend API at:

```
http://localhost:3000
```
If the application starts successfully, you should see a confirmation message in the terminal indicating that the backend is running.

## 📋 API Endpoints
The backend exposes the following endpoints:

1. ```GET /mapbox-token```
Returns the Mapbox access token.
2. **Other Endpoints**
Additional endpoints for handling routes, waypoints, and other functionalities can be added as needed.

## ⚙️ Error Handling
The backend includes basic error handling for common issues, such as missing tokens or invalid requests. Ensure that the Mapbox token is correctly set up in the .env file to avoid errors when accessing Mapbox services.

## 🔍 Troubleshooting
Error: Mapbox token not available: Ensure that the MAPBOX_ACCESS_TOKEN is correctly set in the .env file.
Port Conflict: If port 3000 is already in use, change the port number in the server.js file or set a different port number in the .env file using PORT=your_preferred_port.
# FaveFlix

## Introduction

FaveFlix is a web application that allows users to search for movies, create personalized movie lists, and share them with others. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and uses the OMDB API for fetching movie data.

## Features

- User authentication (Sign Up/Sign In)
- Movie search functionality
- Create, view, and manage movie lists
- Public and private list options

## Installation

### Prerequisites

- Node.js
- MongoDB

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kubra16/FaveFlix-backend.git
   cd FaveFlix-backend
   ```

2. **Backend Setup:**

   - Install dependencies:

   ```bash
   npm install
   ```

   - Create a `.env` file with the following variables:
     ```
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

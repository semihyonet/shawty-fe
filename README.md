# Shawty - URL Shortener

**Shawty** is a URL shortening application built using Next.js and Node.js (v18). This app allows users to shorten long URLs into manageable, easy-to-share links.

## Features

- **URL Shortening**: Shorten long URLs into short, unique links.
- **URL Redirection**: Redirect users to the original URL when they visit the short link.
- **URL Expiration**: Set an expiration date for short links.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js v18**: This app requires Node.js version 18 or later.
- **NPM or Yarn**: To manage dependencies.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/semihyonet/shawty-fe
   cd shawty
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env.local` file**:
   Create a `.env.local` file in the root directory and add necessary environment variables (e.g., database connection strings, API keys).
```.dotenv
BASEURL=http://localhost:80
```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Building for Production

To build and run the application in production mode:

1. **Build the application**:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the application**:
   ```bash
   npm start
   # or
   yarn start
   ```

## DOCKER

You can also run the application using Docker. To build and run the application in a Docker container:

1. **Build the Docker image**:
   ```bash
   docker build -t shawty .
   ```
2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 shawty
   ```

## License

This project is licensed under the MIT License.

---

Happy shortening with Shawty! 🎉
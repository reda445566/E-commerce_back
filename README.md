├── README.md               # Documentation
├── package.json            # Package management
├── server.js               # Entry point
├── .env                    # Environment variables
├── /config                 # DB and other configuration
├── /controllers            # Route controllers (business logic)
├── /middlewares            # Error handling, async handler
├── /models                 # Mongoose schemas
├── /routers                # Express routes
├── /utils                  # Utility library (ApiError etc.)
Tech Stack

Node.js ≥ 20

Express.js

MongoDB + Mongoose

slugify (URL-friendly slugs)

express-async-handler (Async error handling)

Development Guidelines
How to edit code locally?

You can use VSCode or any IDE you prefer. You only need to have Node.js and npm installed.

Environment Requirements
# Node.js ≥ 20
# npm ≥ 10

# Example:
node -v   # v20.x.x
npm -v    # 10.x.x
Installing Node.js on Windows

Visit the Node.js official website
 and download the recommended version.

Run the installer and follow the prompts.

Verify installation: open Command Prompt and type node -v and npm -v.

Installing Node.js on macOS

Using Homebrew:

brew install node

Or use the official installer from Node.js official website
.

Verify installation: node -v and npm -v.

Getting Started

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

Install dependencies:

npm install

Create a .env file in the root directory:

MONGO_URI=mongodb://localhost:27017/yourDB
PORT=5000

Start the development server:

npm run dev

Server runs at: http://localhost:5000

API Endpoints
Get all categories
GET /api/category?page=1&limit=5
Get category by ID
GET /api/category/:id
Create category
POST /api/category
Body: { "name": "Laptops" }
Delete category
DELETE /api/category/:id
Notes

Make sure MongoDB is running or use a cloud MongoDB URI.

Error handling is implemented with ApiError and express-async-handler.

Slugs are generated automatically from category names.

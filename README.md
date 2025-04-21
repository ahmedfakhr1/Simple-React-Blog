# Dojo Blog

A simple blog application built with React that allows users to create, read, and delete blog posts.

## Features

- View all blog posts
- Filter blogs by author
- Create new blog posts
- Delete existing posts
- View individual blog posts
- Responsive design

## Technologies Used

- React 19.1.0
- React Router DOM 7.5.1
- JSON Server (for mock backend)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd dojo-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON Server (mock backend):
```bash
json-server --watch db.json --port 8000
```

4. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## API Endpoints

- GET    `/blogs`     - Fetch all blogs
- GET    `/blogs/:id` - Fetch a single blog
- POST   `/blogs`     - Create a new blog
- DELETE `/blogs/:id` - Delete a blog

## Project Structure

```
src/
├── App.js           # Main application component
├── Home.js          # Home page component
├── BlogList.js      # Blog list component
├── SingleBlog.js    # Single blog view component
├── CreateBlog.js    # Blog creation form
├── Navbar.js        # Navigation component
├── useFetch.js      # Custom hook for data fetching
└── index.css        # Global styles
```

## Contributing

Feel free to submit issues and pull requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)
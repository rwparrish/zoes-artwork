# Colorful Blobs

**Colorful Blobs** is a website I built for my daughter Zoë to showcase her artwork online, with the potential to sell her creations in the future. The platform features an About page to learn more about the artist, a Gallery section displaying her artwork, and a Contact section with a form to get in touch. Future enhancements include AI-generated artwork combinations and automated email notifications using `smtplib`.

---

## Features

- **About Page**: Learn about Zoë and her artistic journey.
- **Gallery Section**: View a curated selection of her artwork.
- **Contact Section**: Fill out a form to get in touch with Zoë.
- **Upcoming Features**:
  - **AI Image Generation**: Users will be able to combine two artworks and generate a unique, blended image.
  - **Automated Emailing**: Send automated emails using Python’s `smtplib`.

---

## Tech Stack

### Client

- **Framework**: React
- **Styling**: Tailwind CSS
- **State Management**: Formik for form handling
- **Routing**: React Scroll for smooth navigation

### Server

- **Framework**: Flask (Python)
- **Database**: PostgreSQL with Flask-SQLAlchemy
- **API**: Flask-RESTful for building RESTful APIs
- **Cross-Origin Support**: Flask-CORS
- **Migrations**: Flask-Migrate
- **Environment Management**: Python-dotenv

---

## Installation

Follow these steps to set up the project locally.

### Clone the Repository

```bash
git clone [your-repository-url]
```

### Client Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

### Server Setup

```bash
# Navigate to server directory
cd server

# Create virtual environment
pipenv install

# Activate virtual environment
pipenv shell

# Install dependencies
pipenv install

# Set up environment variables
cp .env.example .env
```

### Development

```bash
# Run client development server
npm run dev

# Run server
python app.py
```

---

## Contributing

I welcome contributions to **Colorful Blobs**! Whether you have ideas for new features, found a bug, or want to enhance the existing code, here’s how you can get involved:

1. **Fork the repository**  
2. **Clone your fork**  
   ```bash
   git clone [your-fork-url]
   ```
3. **Create a new branch for your feature or bugfix**  
   ```bash
   git checkout -b feature-or-bug-name
   ```
4. **Make your changes and commit**  
   Ensure your code follows the existing style and conventions.  
   ```bash
   git commit -m "Describe your changes"
   ```
5. **Push your branch**  
   ```bash
   git push origin feature-or-bug-name
   ```
6. **Open a pull request**  
   Provide a clear description of your changes and link any relevant issues.

I look forward to your contributions!

---

## License

This project is licensed under the MIT License. 
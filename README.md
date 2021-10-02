# StoryBooks

> Create public and private stories from your life

This app uses Node.js/Express/MongoDB with Google OAuth for authentication, implemented MVC application design model. 

## Usage

### Add a default.json file in config folder with the following

```
  mongoURI: "<your_mongoDB_Atlas_uri_with_credentials>",
  googleClientID: "googleClientID",
  googleClientSecret: "your_googleClientSecret"
```

```
# Install dependencies
npm install

# Run in production
npm start
```

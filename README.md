# Movie App

## Project Description

Movie App is a React + TypeScript application that displays the latest released movies and TV series using [The Movie Database (TMDb)](https://www.themoviedb.org/) API.  
Users can browse previews, search for movies, add them to a watchlist, and leave reviews.

### Key functionality

- The homepage displays previews (latest 4 cards) of both movies and series.
- Dedicated pages: `Movies`, `Series`, `CardDetails`, `Search`, `Watchlist`, `Reviews`, `Error Page`.
- Clicking on a card opens a `CardDetails` page with additional information.
- Items can be added or removed from the Watchlist. Data is stored in Global Context and LocalStorage.
- Real-time search functionality with feedback message if no results are found.
- Reviews page allows users to submit reviews via a form and stores them in LocalStorage.
- Error Page displays a message when an invalid route is accessed.

---

## Setup Instructions

1. **Clone the repository:**
   git clone https://github.com/your-username/movie-app.git
   cd movie-app

2. **Install dependencies:**
   npm install

3. **Run the development server:**
  npm run dev

## Features List

- Homepage displaying previews of latest movies and TV series
- Separate pages for Movies and Series
- CardDetails page with:
- Add to Watchlist / Remove from Watchlist functionality
- Close button and overlay click to exit detail view
- Search page with live movie search and no-results handling
- Watchlist page showing saved items from Global Context and LocalStorage
- Reviews page with a form to submit reviews (using React Hook Form) and display them
- Error page for handling invalid routes

## Technologies Used

- React + TypeScript
- Custom hooks for data fetching
- TMDb API integration
- LocalStorage for persistent data
- React Router for client-side routing
- React Context API for global Watchlist state
- React Hook Form for form handling
- Eslint for code style


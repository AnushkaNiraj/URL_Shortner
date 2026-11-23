URL Shortener

A full-stack URL Shortener service that takes a valid long URL and generates a short URL. When the short URL is visited, the user is redirected to the original URL.
The application also tracks the total number of visits/clicks for each shortened URL.

->Features

-Generate a unique shortened URL from a valid URL
-Redirect users from the shortened URL to the original URL
-Track the total number of clicks/visits
-View analytics for a shortened URL
-REST API based backend

->API Routes

1.Create Short URL
POST /url
Generates a new short URL for the provided original URL.

Request:
{
  "url": "https://example.com/very-long-url"
}

Response:
{
  "shortId": "aB12xY",
  "shortUrl": "http://localhost:3000/aB12xY"
}

2. Redirect to Original URL
GET /url/:id
Redirects the user to the original URL associated with the provided short ID.

Example:
GET /aB12xY
The user is redirected to:
https://example.com/very-long-url
Each successful visit increases the click/visit count.

3. URL Analytics
GET /url/analytics/:id
Returns the number of clicks/visits for the provided short ID.

Example:
GET /url/analytics/aB12xY

Response:
{
  "totalClicks": 5
}

->Data Model

A URL record can contain:
-shortId
-redirectUrl
-visitHistory
-createdAt

Example:
{
  "shortId": "aB12xY",
  "redirectUrl": "https://example.com",
  "visitHistory": [
    {
      "timestamp": "2026-10-03T18:30:00.000Z"
    }
  ]
}

->Tech Stack

-Node.js
-Express.js
-MongoDB
-Mongoose
-REST API

->How It Works

Client sends a long URL to POST /url.
Server validates the URL and generates a unique short ID.
The short ID and original URL are stored in MongoDB.
Server returns the shortened URL.
When someone visits /:id, the server finds the corresponding original URL.
The visit is recorded for analytics.
The user is redirected to the original URL.
GET /url/analytics/:id can be used to view the total number of visits.
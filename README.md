# Timestamp Microservice

A timestamp microservice built with Express, a freeCodeCamp APIs and Microservices project.

## About The Project

The service exposes a single endpoint, `/api/:date?`, which returns the Unix timestamp and UTC string for the given date (a date string or a Unix timestamp in milliseconds). With no date, it returns the current time. An invalid date returns `{ "error": "Invalid date" }`.

A static page is served at `/`.

### Course

freeCodeCamp - [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice), from the Back End Development and APIs certification.

### Built With

- Node.js
- Express

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Dyrits/TIMESTAMP-MICROSERVICE.git
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm start
   ```

   The service listens on the port defined by the `PORT` environment variable.

## License

No license file is present in this repository.

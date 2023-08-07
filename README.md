# Node.js Campaign API

This project is an API built using Node.js, designed to be used by a matching site for campaigns. The API provides functionality for matching campaigns, managing groups, donors, and donations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository: git clone https://github.com/your/repository.git
2. Install the dependencies: npm install
3. Configure the environment variables by creating a .env file based on the provided .env.example file.
4. Set up the database by running the necessary migrations and seeds. You can use the provided scripts for this purpose.

## Usage

To start the server, run the following command:

npm start


The server will start running on http://localhost:3000 by default. You can change the port by modifying the .env file.

## API Endpoints

The API provides the following endpoints:

1. **Campaigns**
   - GET /campaigns: Get a list of campaigns.
   - POST /campaigns: Create a new campaign.
   - GET /campaigns/:id: Get details of a specific campaign.
   - PUT /campaigns/:id: Update a specific campaign.
   - DELETE /campaigns/:id: Delete a specific campaign.
2. **Groups**
   - GET /groups: Get a list of groups.
   - POST /groups: Create a new group.
   - GET /groups/:id: Get details of a specific group.
   - PUT /groups/:id: Update a specific group.
   - DELETE /groups/:id: Delete a specific group.
3. **Donors**
   - GET /donors: Get a list of donors.
   - POST /donors: Create a new donor.
   - GET /donors/:id: Get details of a specific donor.
   - PUT /donors/:id: Update a specific donor.
   - DELETE /donors/:id: Delete a specific donor.
4. **Donations**
   - GET /donations: Get a list of donations.
   - POST /donations: Create a new donation.
   - GET /donations/:id: Get details of a specific donation.
   - PUT /donations/:id: Update a specific donation.
   - DELETE /donations/:id: Delete a specific donation.

For detailed information on each endpoint, including request and response examples, please refer to the API documentation.

## Authentication

The API uses token-based authentication. To access the protected endpoints, you need to include a valid JWT token in the Authorization header of your requests.

To obtain a token, send a POST request to the /auth/login endpoint with valid credentials. The response will include a JWT token that you can use for subsequent requests.

## Error Handling

The API follows a consistent error handling approach. If an error occurs, the response will include an appropriate status code along with a JSON object containing an error field and a message describing the error.

For example:

{
  "error": true,
  "message": "Campaign not found"
}


## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.

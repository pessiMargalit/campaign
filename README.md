# Node.js Campaign API

This project is an API built using Node.js and MongoDB, designed to be used by a matching site for campaigns. The API provides functionality for matching campaigns, managing groups, fundraisers, and donations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository: git clone https://github.com/pessiMargalit/nodejs-campaign.git
2. Install the dependencies: npm install
3. Configure the environment variables by creating a .env file based on the provided .env .
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
   - GET /campaigns/:id: Get details of  the current campaign.
   - PUT /campaigns/:id: Update a specific campaign.
   - DELETE /campaigns/:id: Delete a specific campaign.
2. **Groups**
   - GET /groups: Get a list of all groups with their fundraisers.
   - POST /groups: Create a new group.
   - GET /groups/:id: Get details of a specific group.
   - PUT /groups/:id: Update a specific group.
   - DELETE /groups/:id: Delete a specific group.
3. **Fundraisers**
   - GET /donors: Get a list of all fundraisers with their donations.
   - POST /donors: Create a new fundraiser.
   - GET /donors/:id: Get details of a specific fundraiser.
   - PUT /donors/:id: Update a specific fundraiser.
   - DELETE /donors/:id: Delete a specific fundraiser.
4. **Donations**
   - GET /donations: Get a list of donations.
   - POST /donations: Create a new donation.
   - GET /donations/:id: Get details of a specific donation.
   - PUT /donations/:id: Update a specific donation.
   - DELETE /donations/:id: Delete a specific donation.

For detailed information on each endpoint, including request and response examples, please refer to the API documentation.


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

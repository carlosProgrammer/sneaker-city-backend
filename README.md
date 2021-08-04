#Requisites

- Node, NestJS, MongoDB

# Instructions
- Step 1
Clone this repo

- Step 2
CD into repo and `npm i`

- Step 3
change database connection string and import the database seeder file

- Step 4
Run `npm run start:dev`

# Usage

- Query api endpoints with Postman/Insomnia
  - `localhost:5000/sneakers` <- Returns all available documents in DB.
  - `localhost:5000/sneakers/{id}` <- Returns single document by id
  - `localhost:5000/sneakers/category/{gender_category}` <- Returns all db documents by category
- You can query the api endpoints directly with swagger integration
  - `localhost:5000/api` and use the interface. 

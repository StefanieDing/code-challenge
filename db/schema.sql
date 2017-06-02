CREATE DATABASE websignia_db;

--- Set Up Sequelize index.js and config/config.json
` sequelize init `

--- Create Category.js model and Migrations
` sequelize model:create --name Category --attributes "title:string description:string icon:string" `

--- Creates List.js model and Migrations
` sequelize model:create --name List --attributes "title:string description:string type:string icon:string" `

--- Run migration to get it into MySQL database
` sequelize db:migrate `

--- Create a seed file for category and list 
` sequelize seed:create --name category-seed `
` sequelize seed:create --name list-seed `

--- Run the Database seeder files
` sequelize db:seed:all `
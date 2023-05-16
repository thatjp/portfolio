This is a sample Wordpress Gatsby Project

Usage
_______

1. Create a new project in Local
  a. Once created copy then paste the site domain from Local to the gatsby-source-wp url options key in gatsby-config.js
  b. install Advanced Custom Fields, WP Gatsby, WPGraphQL and WPGraphQL for Advanced Custom Fields in your running Local Wordpress instance
2. Spin up the Gatsby project
  a. ensure you have gatsby installed on your machine to run the necessary project scripts
  b. Run 'npm install'
  c. Run 'gatsby develop' to run the development build of your fresh Gatsby project 
3. Confirming setup
  a. confirm WPGraphQL is setup correctly by navigating to `http://localhost:8000/___graphql` in your browser. You should be able to run Graphql queries so long as your Local WP instance is running, your local gatsby project is running and both are connected via the gatsby-source-wp configuration in gatsby-config.js as seen in step 1-a. 
  b. Confirm WPGraphQL for Advanced Custom Fields is working correctly by creating a new field group and field with 'Show in GraphQL' on. Then query for this data at `http://localhost:8000/___graphql`. 
  c. If all this data is query able then you should have: 
    - A running Wordpress instance with Advanced Custom Fields, WP Gatsby, WPGraphQL and WPGraphQL for Advanced Custom Fields plugins installed
    - A running Gatsby instance with tailwind installed, connected to the wordpress instance and is ready for you to fetch data from. 
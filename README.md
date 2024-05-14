## 🚀 Quick start
1.  **Build and Run**
    ### Setup
    Environment Variables:
    A `.env` file is required to build this project locally, the `env-cmd` handles the parsing of the environment file to populate certain variables; like a Github Personal Access Token for querying my repo data. Check out the `.env.example` for how to build one. 

    GraphQl Queries:
    If you've replaced your Github Personal Access Token with your own, you'll likely want to replace my username with your own. This should ensure some repository data is pulled down for the projects page. (assuming you have some pinned repositories!)

    `npm install`
    `npm run develop`

    The site should now be running at http://localhost:8000

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **On GraphQL**
    `source plugins` can be used to pull data into the data layer, sometimes using GraphQL queries to pull in that data.
    GraphQL queries can be used to pull data into the data layer via `source` plugins,
    In addition, you also use graphQL queries via page queries or useStaticQuery to pull data out of 
    the data layer

    GraphQL => DataLayer => GraphQl => React Components

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start
Data Layer TODOs:
* 
* Set each game jam social preview to desired gif image
* Parse the title of the game via now unified description format (substring stopping at |)

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

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

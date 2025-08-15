import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SoulPadBeta`,
    siteUrl: `https://www.thesoulpad.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },

      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Spicy Rice\:400,700, 800`, // You can specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/fontAwesome/css/all.min.css",
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Staatliches",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Staatliches",
          },
          {
            name: "Spicy Rice",
            file: "https://fonts.googleapis.com/css2?family=Spicy+Rice",
          },
          {
            name: "Afacad Flux",
            file: "https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap",
          },
          {
            name: "Barrio",
            file: "https://fonts.googleapis.com/css2?family=Galindo&display=swap",
          },
          {
            name: "Quantico",
            file: "https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap",
          },
          {
            name: "Gaegu",
            file: "https://fonts.googleapis.com/css2?family=Gaegu&family=Quicksand:wght@300..700&display=swap",
          },
          {
            name: "Turret Road",
            file: "https://fonts.googleapis.com/css2?family=Turret+Road:wght@200;300;400;500;700;800&display=swap",
          },
          {
            name: "Fredoka",
            file: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap",
          },
                {
            name: "Waterlily",
            file: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap",
          },
        ],
      },
    },
  ],
};

export default config;

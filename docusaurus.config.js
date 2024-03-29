// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Modern Portfolio",
  tagline: "Modern, Cool and Clean",
  url: "https://docs.modern-portfolio.deri.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "deri-kurniawan", // Usually your GitHub org/user name.
  projectName: "modern-portfolio-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Deri-Kurniawan/modern-portfolio-docs/tree/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Deri-Kurniawan/modern-portfolio-docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Portfolio",
        logo: {
          alt: "Portfolio Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://modern-portfolio.deri.my.id",
            label: "Live Demo",
            position: "right",
          },
          {
            href: "https://github.com/Deri-Kurniawan/modern-portfolio",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
              {
                label: "Installation",
                to: "/docs/getting-started/installation",
              },
              {
                label: "Configuration",
                to: "/docs/getting-started/configuration",
              },
              {
                label: "Environment Variables",
                to: "/docs/getting-started/configuration/environment-variables",
              },
              {
                label: "Modifying Data",
                to: "/docs/getting-started/configuration/modifying-data",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/19716588/deri-kurniawan/",
              },
              {
                label: "Github",
                href: "https://github.com/deri-kurniawan/",
              },
              {
                label: "linkedIn",
                href: "https://www.linkedin.com/in/deri-kurniawan/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/deri561/",
              },
              {
                label: "Twitter",
                href: "https://www.twitter.com/derii561/",
              },
              {
                label: "Medium",
                href: "https://deri-kurniawan.medium.com/",
              },
              {
                label: "Dev",
                href: "https://dev.to/deri_kurniawan/",
              },
            ],
          },
          {
            title: "Support Me",
            items: [
              {
                label: "Buy Me a Coffee",
                href: "https://www.buymeacoffee.com/derikurniawan",
              },
              {
                label: "PayPal",
                href: "https://www.paypal.com/paypalme/derikurniawan5?country.x=ID&locale.x=en_US",
              },
              {
                label: "Ko-fi",
                href: "https://ko-fi.com/derikurniawan",
              },
            ],
          },
          {
            title: "Blogs",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Medium",
                href: "https://deri-kurniawan.medium.com/",
              },
              {
                label: "Dev",
                href: "https://dev.to/deri_kurniawan/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deri Kurniawan Portfolio, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/portfolio.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/img/apple-touch-icon.png",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            sizes: "32x32",
            href: "/img/favicon-32x32.png",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            sizes: "16x16",
            href: "/img/favicon-16x16.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/safari-pinned-tab.svg",
            color: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};

module.exports = config;


/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */

const config = {
    /** Without additional '/' on the end, e.g. https://fthozdemir.github.io */
  siteUrl: "https:/fthozdemir.github.io",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
}

export default config
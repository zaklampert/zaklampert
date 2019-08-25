module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Zak Lampert - Website Maker', // Navigation and Site Title
  titleAlt: 'Zak Lampert.com', // Title for JSONLD
  description: 'Family man, avid golfer, javascript fella',
  headline: 'This is where I keep my stuff', // Headline for schema.org JSONLD
  url: 'https://zaklampert.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: '', // Used for manifest favicon generation
  shortName: 'Zak', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Zak LAmpert', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@zaklampert', // Twitter Username
  facebook: 'zaklampert', // Facebook Site Name
  github: 'zaklampert',
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}

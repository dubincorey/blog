
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Corey\\Desktop\\blog\\src\\pages\\404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("C:\\Users\\Corey\\Desktop\\blog\\src\\pages\\blog\\index.js")),
  "component---src-pages-blog-mdx-slug-js": preferDefault(require("C:\\Users\\Corey\\Desktop\\blog\\src\\pages\\blog\\{mdx.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Corey\\Desktop\\blog\\src\\pages\\index.js"))
}


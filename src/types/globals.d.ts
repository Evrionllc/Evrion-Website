// Ambient declaration so TypeScript accepts side-effect imports of CSS
// (e.g. `import "./globals.css"`), which Next's bundled types don't cover.
declare module "*.css";

const esbuild = require("esbuild");
const deps = require("./package.json");

const peerDependencies = deps.peerDependencies || {};

const shared = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  treeShaking: true,
  platform: "browser",
  target: ["es2018"],
  external: Object.keys(peerDependencies),
  logLevel: "warning",
};

esbuild
  .build({ ...shared, format: "cjs", outfile: "index.js" })
  .then(() =>
    esbuild.build({ ...shared, format: "esm", outfile: "index.mjs" })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
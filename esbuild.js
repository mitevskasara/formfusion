const esbuild = require("esbuild");
const deps = require("./package.json");

const peerDependencies = deps.peerDependencies || {};

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outdir: ".",
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: "node",
    format: "cjs",
    target: "node14",
    external: Object.keys(deps.devDependencies).concat(
      Object.keys(peerDependencies),
    ),
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

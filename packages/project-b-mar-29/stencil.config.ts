import { Config } from "@stencil/core";
// import watch from 'rollup-watch';

export const config: Config = {
  namespace: "project-b-mar-29",
  globalScript: "src/global.ts",
  enableCache: false,
  // rollupPlugins: [
  //   alias({
  //     entries: [
  //       {
  //         find: 'project-a-mar-29',
  //         replacement: '../project-a-mar-29'
  //       },
  //     ]
  //   })
  // ],
  // excludeSrc: [],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};

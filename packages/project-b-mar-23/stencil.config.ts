import { Config } from '@stencil/core';
import alias from 'rollup-plugin-alias';
// import watch from 'rollup-watch';

export const config: Config = {
  namespace: 'project-b-mar-23',
  globalScript: 'src/global.ts',
  enableCache: false,
  // rollupPlugins: [
  //   alias({
  //     entries: [
  //       {
  //         find: 'project-a-mar-23',
  //         replacement: '../project-a-mar-23'
  //       },
  //     ]
  //   })
  // ],
  // excludeSrc: [],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
};

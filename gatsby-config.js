/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Creative Cloud Apis',
        path: '/'
      },
      {
        title: 'guides',
        path: '/guides/'
      }
    ],
    subPages: [
      {

        title: 'Getting Started',
        path: '/guides/',
        header: true,
        pages: [
          {
            title: 'Get Credentials',
            path: '/guides/create-credentials/'
          },
          {
            title: 'Redocly API Block',
            path: '/guides/api/'
          },
          {
            title: 'Quickstart',
            path: '/guides/'
          },
          {
            title: 'Authentication',
            path: '/guides/authentication/'
          },
          {
            title: 'Image Model Styles',
            path: '/guides/styles/'
          }
        ]
      }

    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/redocly-test/'
};

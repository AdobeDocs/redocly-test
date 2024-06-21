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
      },
      {
        title: 'api full page',
        path: '/api-full/'
      }
    ],
    subPages: [
      {

        title: 'Getting Started',
        path: '/guides/',
        header: true,
        pages: [
          {
            title: 'Quickstart',
            path: '/guides/'
          },
          {
            title: 'API',
            path: '/guides/api/',
            pages: [
              {
                title: "Upload Image",
                path: "/guides/api/upload_image"
              },
              {
                title: "Text to Image",
                path: "/guides/api/image_generation"
              },
              {
                title: "Generative Expand",
                path: "/guides/api/generative_expand"
              },
              {
                title: "Generative Fill",
                path: "/guides/api/generative_fill"
              }
            ]
          },
          {
            title: 'JSON',
            path: '/guides/json/',
            pages: [
              {
                title: "Upload Image",
                path: "/guides/json/upload_image"
              },
              {
                title: "Text to Image",
                path: "/guides/json/image_generation"
              },
              {
                title: "Generative Expand",
                path: "/guides/json/generative_expand"
              },
              {
                title: "Generative Fill",
                path: "/guides/json/generative_fill"
              }
            ]
          },
          {
            title: 'Usage Limits',
            path: '/guides/usage_limits/'
          },
          {
            title: 'Image Model Styles',
            path: '/guides/styles/'
          },

        ]
      }


    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/redocly-test/'
};

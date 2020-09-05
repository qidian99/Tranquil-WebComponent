# Web Components

## Author
Dian Qi, qidian990107@163.com

## TLDR
State-of-the-art 100% portable web component bundled in Preact (Fast 3KB!!!).

## Features
Support every use case, for
instance:

1. Developers can import the original components in React / Preact

2. Can be used for Server-Side Rendering (SSR)

3. Can be used in Chrome extensions

4. Works seemlessly with DOM API, cause it is leveraging the [Web Component
   Spec](https://www.webcomponents.org/specs)

5. Material UI, Ant Design

6. SASS, LESS

Although there are two drawbacks

1. It requires high efficiency with DOM API, especifically with respect to event listeners

2. There is some Gatchas in prop passing. No function as props. Only emitting and listening for.

   * Noteworthily, developers should define ALL possible event triggers and emissions with their web
     components

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

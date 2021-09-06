# react-PSone

React version of PSone.css CSS framework.

## Resources

[PSone.css demo](https://98mprice.github.io/PSone.css/)
[PSone.css repository](https://github.com/98mprice/PSone.css)

## Storybook

https://alessandropisu.github.io/react-PSone

## Installation

```bash
yarn add react-psone
npm install --save react-psone
```

## Usage

Add to your index.html the PSone.css stylesheet (currently available only from CDN).

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/98mprice/PSone.css@master/PSone.min.css"
/>
```

Use the components inside your files.

```tsx
import React from 'react';
import { Container, Button } from 'react-psone';

function Component() {
  return (
    <Container label="Example">
      <Button>Example</Button>
    </Container>
  );
}
```

## License

[MIT](https://github.com/alessandropisu/react-PSone/blob/master/LICENSE)

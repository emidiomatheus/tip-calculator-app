# Tip calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Remove the arrows in input number:

```css
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}

input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
}
```

## Author

- Frontend Mentor - [@emidiomatheus](https://www.frontendmentor.io/profile/emidiomatheus)

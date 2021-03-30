
╭━━━━╮╱╱╭╮╱╱╱╱╱╱╱╱╱╱╭╮╭━━━┳━━━┳━━━╮  
┃╭╮╭╮┃╱╱┃┃╱╱╱╱╱╱╱╱╱╱┃┃┃╭━╮┃╭━╮┃╭━╮┃  
╰╯┃┃┣┻━┳┫┣╮╭╮╭┳┳━╮╭━╯┃┃┃╱╰┫╰━━┫╰━━╮  
╱╱┃┃┃╭╮┣┫┃╰╯╰╯┣┫╭╮┫╭╮┃┃┃╱╭╋━━╮┣━━╮┃  
╱╱┃┃┃╭╮┃┃╰╮╭╮╭┫┃┃┃┃╰╯┃┃╰━╯┃╰━╯┃╰━╯┃  
╱╱╰╯╰╯╰┻┻━┻╯╰╯╰┻╯╰┻━━╯╰━━━┻━━━┻━━━╯  

## Intro
- is a package full of pre-build classes to style your components
    - so flexible you can do anything with them
- uses a lot of abbreviations (like, a lot  😅)

## Bootstrap?
- It looks a lot like bootstrap
    - Tailwind takes a lot of the semantics of bootstrap and almost extended them so much
    that you never have to use media queries in direct css
  - you can do something like this
    
```html
<div class="pb-10 sm:pb-12 md:pb-8 lg:pb-4">
    Hello world
</div>
```
- Looks like a lot of classes...
    - can easily cause things like useless classes remaining on elements that don't need it
    - [classnames](https://www.npmjs.com/package/classnames) is a package that is able to fix this
        - quick example
```js
const classNames = require("classnames");

const Button = ({ label }) => {
    // ...
    
    const btnClass = classNames({
        btn: true,
        'btn-pressed': isPressed,
        'btn-over': !isPressed && isHovered
    });
    
    return <button className={btnClass}>{label}</button>;
};
```

## Functions and Directives
- Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `screens` styles into your CSS.
```css
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;

/**
 * Use this directive to control where Tailwind injects the responsive
 * variations of each utility.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */
@tailwind screens;
```

- Use `@apply` to inline any existing utility classes into your own custom CSS.
```css
/* Input */
.btn {
  @apply py-2 p-4;
}

/* Output */
.btn {
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
```

- Use the `@layer` directive to tell Tailwind which "bucket" a set of custom styles belong to. Valid layers are a `base`, 
  `components`, and `utilities`.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}

@layer components {
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}

@layer utilities {
  @variants hover, focus {
    .filter-none {
      filter: none;
    }
    .filter-grayscale {
      filter: grayscale(100%);
    }
  }
}
```

- You can generate responsive, hover, focus, active, and other variants of your own utilities by wrapping their definitions
  in the `@variants` directive.
```css
/* Input */
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}

/* Output */
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-90 {
  transform: rotate(90deg);
}

.focus\:rotate-0:focus {
  transform: rotate(0deg);
}
.focus\:rotate-90:focus {
  transform: rotate(90deg);
}

.hover\:rotate-0:hover {
  transform: rotate(0deg);
}
.hover\:rotate-90:hover {
  transform: rotate(90deg);
}
```

It's important to note that variants are generated in the order you specify them.

- You can generate responsive variants of your own classes by wrapping their definitions in the `@responsive` directive
```css
@responsive {
  .bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
}
```

This is a shortcut for writing out 
```css
@variants responsive { ... }
```
which works as well.

- The @screen directive allows you to create media queries that reference your breakpoints by name instead of duplicating
  their values in your own CSS.

For example, say you have a sm breakpoint at 640px and you need to write some custom CSS that references this breakpoint.
Instead of writing a raw media query that duplicates that value like this:
```css
@media (min-width: 640px) {
  /* ... */
}
```
...you can use the @screen directive and reference the breakpoint by name:
```css
@screen sm {
  /* ... */
}

```

- Use the `theme()` function to access your Tailwind config values using dot notation.
```css
.content-area {
  height: calc(100vh - theme('spacing.12'));
}
```

## Custom config
By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define
any customizations.

```js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
```

Every section of the config file is optional, so you only have to specify what you'd like to change. Any missing sections
will fall back to Tailwind's default configuration.


## Plugin
### [VSCode](vscode:extension/bradlc.vscode-tailwindcss)
- Autocomplete: Intelligent suggestions for class names, as well as CSS functions and directives.
- Linting: Highlights errors and potential bugs in both your CSS and your markup.
- Hover Previews: See the complete CSS for a Tailwind class name by hovering over it.
- Syntax Highlighting: Provides syntax definitions so that Tailwind features are highlighted correctly.

### WebStorm
- Support for directives and functions, including `@tailwind` and `@apply`
- Completion for Tailwind CSS class names after @apply and in HTML
- Support for customization via `tailwind.config.js`
- Preview of the resulting CSS for classes on hover and in the code completion popup

## TailwindCSS vs Styled Components
Tailwind reduces the lines of code that needs to be written.

- Styled Components
```js
const Wrapper = styled.div`
padding-bottom: 10px;
@media (min-width: 768px) {
    padding-bottom: 20px;
}
`;

const TestComponent = () => (
    <Wrapper>
        Hello world!
    </Wrapper>
);
```

- TailwindCSS
```js
const TestComponent = () => (
    <div className="pb-10 md:pb-20">
        Hello World!
    </div>
);
```

This is all good in small components, but let's compare more heavily styled components

- SC
```js
const Button = styled.button`
    font-size: 1rem;
    margin: 1rem;
    padding: 1rem 1rem;
    @media (min-width: 768px) {
        padding: 2rem 2rem;
    }
    border-radius: 0.25rem;
    border: 2px solid blue;
    background-color: blue;
    color: white;
`;

const TestComponent = () => (
    <Button>
        Hello world!
    </Button>
);
```

- TCSS
```js
const TestComponent = () => (
    <div className="text-base mg-1 pt-1 pr-1 md:pt-2 md:pr-2 rounded border-solid border-2 border-light-blue-500 bg-blue-500 text-white-500">
        Hello World!
    </div>
);
```

As you can see from the above comparisons, styled-components really does take the lead now as our component has grown in
styling rules. Tailwind's implementation is so verbose in classNames and without using a package like 
[classnames](https://www.npmjs.com/package/classnames) it really makes our lines a lot longer than they should be.

The styled component's approach also allows us to easily read what styling a component has. In comparison to the Tailwind
approach, you would most likely have to lookup in the docs some util classes so that you get a precise
understanding of what it does.

### Moral of the Story
There isn't really a winner in my opinion. Both have their advantages and disadvantages.
I feel like Tailwind just scream simplicity. But in order to keep your code clean, you might have to install additional
packages, whereas Styled Components feels more robust most also requires more code to be written.

Tailwind may have a bit of a steeper learning curve (bcs of the directives and functions) than Styled Components, even though there aren't that many of them. But in my experience, the plugins do help a lot. Also, the official documentation has a neat search functionality that gives you info on what you need in no time.

## Tailwind in React Native
Install Tailwind in React Native applications using this [package](https://github.com/vadimdemedes/tailwind-rn).
Basically, the same rules apply for React Native as it does for React, although creating your own custom configuration
is a bit harder. But the documentation guides you through it easily :smile: .


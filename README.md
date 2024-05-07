# feather-icons-nojs

Welcome to the repository housing a comprehensive collection of icons in SVG format, meticulously tailored for seamless integration without reliance on JavaScript, bundled conveniently within a single CSS file. The icons in this pack were collected from [Feather Icons](https://feathericons.com/), an open-source icon pack.

## Usage

To integrate these icons into your project, simply link the provided CSS file within the `<head>` section of your HTML:

```html
<link rel="stylesheet" href="feather-icons.css">
```

Once linked, you can effortlessly utilize any icon by applying the appropriate class. Each icon is represented by the class `.fe`, followed by the specific icon's name using the format `.fe-icon-name`. Here's an example of how to incorporate an icon into your project:

```html
<i class="fe fe-icon-name"></i>
```

## Customization

Tailor this icon pack to your project's requirements by either adding your own icons to the `./dist/icons` directory or removing existing ones. Afterward, regenerate the CSS pack using the provided `build.js` script in conjunction with Node.js.

Feel empowered to explore and adapt this versatile icon pack to perfectly complement your project!
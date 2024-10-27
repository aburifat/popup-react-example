# Live Website Link

[https://popup-react.aburifat.com/](https://popup-react.aburifat.com/)

# NPM Package Link

https://www.npmjs.com/package/popup-react

# How to run the project?
This `React.js` project is a showcase of the usage of the package `popup-react`, a collection of beautiful react popup components.

To run this project, download (and extract) or clone this project to your local machine. Open terminal in the root directory of the project and run the following commands:

```bash
npm i
```

```bash
npm run dev
```

# popup-react

`popup-react` is a lightweight collection of React components designed to enhance user experience. Currently, it features the `ImageQuickView` component, with more components planned for future releases.

## Installation

To install the package, run the following command:

```bash
npm install popup-react
```

or using yarn:

```bash
yarn add popup-react
```

## Available Components

### 1. ImageQuickView

`ImageQuickView` allows users to quickly view a larger version of an image in a modal popup. It enhances the browsing experience for image-heavy applications such as e-commerce websites or galleries.

#### Usage

```tsx
import { useState } from 'react'
import sea from './assets/sea.jpg'
import { ImageQuickView } from 'popup-react'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const closeQuickView = () => {
    setSelectedImage(undefined);
  }

  return (
    <div>
      <img
        src={sea}
        onClick={() => setSelectedImage(sea)}
      />
      <ImageQuickView
        src={selectedImage}
        alt={"image alt"}
        bgWrapper={true}
        isVisible={!!selectedImage}
        onClose={closeQuickView}
      />
    </div>
  )
}

export default App
```

#### Props

- `src`: (string) **Required**. The URL of the image to be displayed in the quick view.
- `alt`: (string) Optional. The alt text for the image.
- `bgWrapper`: (boolean) Optional. Show or hide background wrapper. (default: true)
- `isVisible`: (boolean) Optional. Show or hide the quick view. (default: false)
- `onClose`: (function) **Required**. Callback function triggered when the modal is closed.

#### Example

```tsx
const closeQuickView = () => {
    setSelectedImage(undefined);
}
<ImageQuickView
  src={selectedImage}
  alt={"image alt"}
  bgWrapper={true}
  isVisible={!!selectedImage}
  onClose={closeQuickView}
/>
```

## Future Components

We plan to extend `popup-react` with more utility-focused components that integrate seamlessly into modern React applications.

## License

This project is licensed under the MIT License.

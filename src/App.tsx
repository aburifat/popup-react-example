import { useState } from 'react'
import sea1 from './assets/sea1.jpg'
import sea2 from './assets/sea2.jpg'
import sea3 from './assets/sea3.jpg'
import sea4 from './assets/sea4.jpg'
import { ImageQuickView } from 'popup-react'

function App() {
  const images = [sea1, sea2, sea3, sea4];

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const closeQuickView = () => {
    setSelectedImage(undefined);
  }

  return (
    <div style={{
      display: 'flex',
      alignContent: 'space-between'
    }}>
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={"grid-image-" + index}
          height="200px"
          width="300px"
          onClick={() => setSelectedImage(imgSrc)}
          style={{ cursor: 'pointer', objectFit: 'cover', padding: '10px', flexGrow: '1' }}
        />
      ))}
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

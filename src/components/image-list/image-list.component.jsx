import ImageShow from "../image-show/image-show.component";
import "./image-list.styles.css";
const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images && images.map((img, idx) => <ImageShow image={img} key={idx} />)}
    </div>
  );
};

export default ImageList;

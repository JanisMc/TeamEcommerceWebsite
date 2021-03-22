import './Image.css'
import LaptopPreview from '../../images/LaptopPreview.png'
import DesktopPreview from '../../images/DesktopPreview.png'
import MobilesPreview from '../../images/MobilesPreview.png'
import SmartwatchesPreview from '../../images/SmartWatchesPreview.png'
import AccessoriesPreview from '../../images/AccessoriesPreview.png'


const images = {
   LaptopPreview,
   DesktopPreview,
   MobilesPreview,
   SmartwatchesPreview,
   AccessoriesPreview 

}

const Image = (props) => {
    return (
        <img src = {images[props.img]} className = {props.class}/>
    )
}

export default Image
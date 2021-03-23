// import './Image.css'
import LaptopPreview from '../../images/LaptopPreview.png'
import DesktopPreview from '../../images/DesktopPreview.png'
import MobilesPreview from '../../images/MobilesPreview.png'
import SmartwatchesPreview from '../../images/SmartWatchesPreview.png'
import AccessoriesPreview from '../../images/AccessoriesPreview.png'
import Laptop1 from '../../images/Laptop1.png'
import Laptop2 from '../../images/Laptop2.png'
import Laptop3 from '../../images/Laptop3.png'
import Laptop4 from '../../images/Laptop4.png'
import Laptop5 from '../../images/Laptop5.png'
import Smartwatches1 from '../../images/SW1.jpg'
import Smartwatches2 from '../../images/SW2.jpg'
import Smartwatches3 from '../../images/SW3.jpg'
import Smartwatches4 from '../../images/SW4.jpg'
import Smartwatches5 from '../../images/SW5.jpg'
import Logo from '../../images/LogoSJJTech.png'
import FavIcon from '../../images/FavIconSJJTech.png'


const images = {
   LaptopPreview,
   DesktopPreview,
   MobilesPreview,
   SmartwatchesPreview,
   AccessoriesPreview,
   Laptop1,
   Laptop2,
   Laptop3,
   Laptop4,
   Laptop5,
   Smartwatches1,
   Smartwatches2,
   Smartwatches3,
   Smartwatches4,
   Smartwatches5,
   Logo,
   FavIcon

}

const Image = (props) => {
    return (
        <img src = {images[props.img]} className = {props.class}/>
    )
}

export default Image
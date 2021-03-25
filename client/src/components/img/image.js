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
import SW1 from '../../images/SW1.png'
import SW2 from '../../images/SW2.png'
import SW3 from '../../images/SW3.png'
import SW4 from '../../images/SW4.png'
import SW5 from '../../images/SW5.png'
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
   SW1,
   SW2,
   SW3,
   SW4,
   SW5,
   Logo,
   FavIcon

}

const Image = (props) => {
    return (
        <img src = {images[props.img]} className = {props.class}/>
    )
}

export default Image
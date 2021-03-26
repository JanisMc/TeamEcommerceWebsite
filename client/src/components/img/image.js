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
import Desktop1 from '../../images/Desktop1.png'
import Desktop2 from '../../images/Desktop2.png'
import Desktop3 from '../../images/Desktop3.png'
import Desktop4 from '../../images/Desktop4.png'
import Desktop5 from '../../images/Desktop5.png'
import Mobile1 from '../../images/Mobile1.png'
import Mobile2 from '../../images/Mobile2.png'
import Mobile3 from '../../images/Mobile3.png'
import Mobile4 from '../../images/Mobile4.png'
import Mobile5 from '../../images/Mobile5.png'
import SW1 from '../../images/SW1.png'
import SW2 from '../../images/SW2.png'
import SW3 from '../../images/SW3.png'
import SW4 from '../../images/SW4.png'
import SW5 from '../../images/SW5.png'
import Accessory1 from '../../images/Accessory1.png'
import Accessory2 from '../../images/Accessory2.png'
import Accessory3 from '../../images/Accessory3.png'
import Accessory4 from '../../images/Accessory4.png'
import Accessory5 from '../../images/Accessory5.png'
import Logo from '../../images/LogoSJJTech.png'
import Banner from '../../images/Banner.png'
import Discount from '../../images/Discount.png'

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
   Desktop1,
   Desktop2,
   Desktop3,
   Desktop4,
   Desktop5,
   Mobile1,
   Mobile2,
   Mobile3,
   Mobile4,
   Mobile5,
   SW1,
   SW2,
   SW3,
   SW4,
   SW5,
   Accessory1,
   Accessory2,
   Accessory3,
   Accessory4,
   Accessory5,
   Logo,
   Banner,
   Discount

}

const Image = (props) => {
    return (
        <img src = {images[props.img]} className = {props.class}/>
    )
}

export default Image
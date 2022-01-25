import Image from 'next/image'
import Hamburger from './Hamburger'

const Nav = () => {
    
    return (
        <div>
      
        <Hamburger/>
        <div>
        <div className="flex justify-center border-b mx-8">
            <Image
            src = "https://res.cloudinary.com/dyvgcv5se/image/upload/v1643131382/Test_cat/Untitled-1_rmm7ai.svg"
            alt = "logo"
            width = "120"
            height = "120"
            />
        </div>
        </div>
           
        </div>
    )
}

export default Nav
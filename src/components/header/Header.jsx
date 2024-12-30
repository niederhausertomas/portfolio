import Navbar from '../navbar/Navbar'
import tomas from '../../assets/images/tomas.png'

const Header = () => {


  return (
    <header className="bg-black w-screen">
        <Navbar/>
       
        <div className="w-full flex flex-wrap p-0 items-center mb-[200px]">
            <div className="flex justify-center w-full">
                <img 
                    className="h-[250px] w-[250px] object-cover rounded-full mt-[70px] mb-[10px]" 
                    alt='profilePhoto' 
                    src={tomas}
                />
            </div>
            <h2 className="w-full text-center text-[#dfdede] text-[40px] mt-[10px] mb-[10px]">
                Tomás <br/>
                Niederhauser
            </h2>
            <div className='w-full text-center m-0 flex justify-center items-center'>
                <h1 className="font-mono text-[30px] md:text-[50px] text-[#dfdede] whitespace-nowrap overflow-hidden
                    animate-[typing_4s_steps(20)_alternate,blink_1s_infinite_alternate] 
                    border-r-2 w-[20ch]">
                    Front-end Developer
                </h1>
            </div>
        </div>
    </header>
  )
}

export default Header

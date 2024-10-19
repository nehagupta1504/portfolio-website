import laptopImage from '../../assets/laptop.png';

const HomePage = () => {
    return (
        <div className="w-full md:mt-20">
           <div className="flex flex-row justify-between h-full">
                <section aria-label="information" className="w-7/12  flex items-center flex-col justify-center mt-20 gap-6">
                     <span className="text-6xl">Looking <span className="italic font-extralight">for</span> my next</span>
                     <span className="text-6xl font-extrabold underline">opportunity</span>
                     <span className="text-6xl font-extralight">to make <span className="italic font-semibold">a change</span>.</span>
                     <span className="text-5xl font-thin">The digital way</span>
                </section>
                <section aria-label="carousel" className="w-5/12 bg-cream flex items-center justify-center">
                    <div>
                        <img src={laptopImage} alt="laptop"  className='h-90'/>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default HomePage;

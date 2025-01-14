
const Footer = () => {
  return (
    <section className="w-dvw">
        <div className="pt-7 bg-gray-950 border-t border-gray-500 flex justify-between flex-wrap items-center p-4 mr-6">
        <div className="text-gray-200 flex gap-2">
            <p>Terms $ Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            <a href="https://github.com/peter254-cpu" className="social-icon">
                <img src="/assets/github.svg"  alt="github" className="w-1/3 h-1/3" />
            </a>
            <div className="social-icon">
                <img src="/assets/github.svg"  alt="github" className="w-1/3 h-1/3" />
            </div>
            <div className="social-icon">
                <img src="/assets/github.svg"  alt="github" className="w-1/3 h-1/3" />
            </div>
        </div>
        </div>
        <p className="bg-black text-white text-center w-full p-0 m-o ">copyright2025, All rights reserves</p>
    </section>
  )
}

export default Footer
// Logo.js
import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/header-profile.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group">
        <div className="relative h-12 md:h-16 mr-2 md:mr-4">
                <Image src={profileImg} alt="Sunmade logo" className="w-full h-full object-cover" sizes="20vw" priority />
        </div>
        {/* <span className="font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300">
          <span className="text-dark dark:text-light">Sun</span>
          <span className="text-accent dark:text-accentDark">Made</span>
      </span> */}
    </Link>
  )
}
export default Logo
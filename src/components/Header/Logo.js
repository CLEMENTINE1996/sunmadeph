// Logo.js
import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group">
        <div className="relative w-12 md:w-16 h-12 md:h-16 mr-2 md:mr-4">
            {/* Glow effect behind the logo */}
            <div className="absolute inset-0 bg-accent dark:bg-accentDark rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-solid border-dark dark:border-light/20 shadow-lg">
                <Image src={profileImg} alt="Sunmade logo" className="w-full h-full object-cover" sizes="20vw" priority />
            </div>
        </div>
        <span className="font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300">
          <span className="text-dark dark:text-light">Sun</span>
          <span className="text-accent dark:text-accentDark">Made</span>
      </span>
    </Link>
  )
}
export default Logo
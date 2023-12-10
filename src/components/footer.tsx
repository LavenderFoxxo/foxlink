'use client';
import Link from 'next/link'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer: React.FC = () => {
  return (
    <div className="pl-3 md:pt-1 pr-3">
      <div className="flex pb-4 pt-4 border-t dark:bg-[#1f2937] dark:border-white dark:text-white border-black text-black gap-3 justify-between w-full z-10 max-w-3xl items-center mx-auto">
        <div>
          <p className="font-semibold opacity-80">
          Made with ❤️ by Alexander
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <Link href="https://instagram.com/alexanderhy04">
            <FontAwesomeIcon width={'20px'} icon={faInstagram} />
          </Link>
          <Link href="https://github.com/fennecdotmp3">
          <FontAwesomeIcon width={'20px'} icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
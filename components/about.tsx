import Link from 'next/link'
import Image from 'next/image'

export default function About({}) {
  return (
    <div className="flex">
      <div className="flex-none w-100 h-100">
        <Link href="/">
          <a>
            <Image
              src="/images/duncan.jpg"
              alt="Photo of Duncan Davidson"
              width={100}
              height={100}
              className="rounded-full"
            />
          </a>
        </Link>
      </div>
      <div className="flex pl-6">
        <div className="flex items-center items-center justify-center text-gray-500 text-sm pr-2">
          <div>
            <Link href="/">
              <a className="font-bold text-blue-500">Duncan Davidson</a>
            </Link>{' '}
            is a software developer, photographer, and author living in Berlin.
            His{' '}
            <Link href="/cv">
              <a className="font-bold text-blue-500">curriculum vitae</a>
            </Link>{' '}
            and{' '}
            <Link href="/resume">
              <a className="font-bold text-blue-500">resume</a>
            </Link>{' '}
            tell the story of his career, so far. You can also find him on{' '}
            <a
              className="font-bold text-blue-500"
              href="https://twitter.com/duncan"
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              className="font-bold text-blue-500"
              href="http://linkedin.com/in/duncandavidson "
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
      </div>
    </div>

    // <div className="flex-none">
    //   <div className="flex">
    //     <Link href="/">
    //       <a>
    //         <Image
    //           src="/images/duncan.jpg"
    //           alt="Photo of Duncan Davidson"
    //           width={100}
    //           height={100}
    //           className="w-100 h-100 rounded-full"
    //         />
    //       </a>
    //     </Link>
    //   </div>
    //   <div className="flex-none pl-8">
    //     <div>Duncan Davidson</div>
    //     <div>
    //       Software developer, photographer, and author. American immigrant
    //       living in Berlin, Germany.
    //     </div>
    //     <p>

    //     </p>
    //   </div>
    // </div>
  )
}

import Link from 'next/link'

export default function About({}) {
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex items-center items-center justify-center text-gray-500 text-sm font-light pr-2">
          <div>
            <Link href="/">
              <a className="font-bold text-grey-500">Duncan Davidson</a>
            </Link>{' '}
            is a software developer, photographer, and author living in Berlin.
            His{' '}
            <Link href="/cv">
              <a className="font-bold text-grey-500">curriculum vitae</a>
            </Link>{' '}
            and{' '}
            <Link href="/resume">
              <a className="font-bold text-grey-500">resume</a>
            </Link>{' '}
            tell the story of his career, so far. You can also find him on{' '}
            <a
              className="font-bold text-grey-500"
              href="https://twitter.com/duncan"
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              className="font-bold text-grey-500"
              href="http://linkedin.com/in/duncandavidson "
            >
              LinkedIn
            </a>
            .
          </div>
        </div>
      </div>
      <div className="flex-none pl-8 w-100 h-100">
        <Link href="/">
          <a>
            <img
              src="/images/duncan-200.jpg"
              alt="Photo of Duncan Davidson"
              width="100"
              height="100"
              className="rounded-full"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

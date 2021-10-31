import Link from 'next/link';

export default function Index({}) {
  return (
    <section className="bg-gray-700 h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="font-semibold text-8xl text-blue-200 leading-normal mb-4">
            Welcome to my portfolio
          </h1>

          <p className="text-blue-100 text-2xl leading-loose">
            My name is Muhammad Usman Ghani im 22 years old.
          </p>

          <p className="text-blue-100 text-2xl leading-loosel">
            Im a front-end engineer at.{' '}
            <Link href="https://mvssive.com/">
              <a className="text-yellow-600 hover:text-yellow-500" target="_blank">
                Mvssive ventures
              </a>
            </Link>
          </p>

          <p className="text-blue-100 text-2xl leading-loose">
            living in pakistan and follwoing my dream with a passionate heart.
          </p>

          <div className="mt-8">
            <Link href="https://github.com/usmanghanidev">
              <a className="text-yellow-600 hover:text-yellow-500 mr-3" target="_blank">
                Github
              </a>
            </Link>
            <Link href="https://twitter.com/usmanghanidev">
              <a className="text-yellow-600 hover:text-yellow-500 mr-3" target="_blank">
                Twitter
              </a>
            </Link>
            <Link href="https://www.hackerrank.com/usmanghanidev">
              <a className="text-yellow-600 hover:text-yellow-500 mr-3" target="_blank">
                Hacker Rank
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-usman-ghani-92a97b195/">
              <a className="text-yellow-600 hover:text-yellow-500" target="_blank">
                Linkdin
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

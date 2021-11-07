import Link from 'next/link';

export default function Index({}) {
  return (
    <section className="bg-gray-700 h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:justify-center items-center h-full p-4 pt-20 md:p-0">
          <div
            className="h-32 w-32 md:h-40 md:w-40 bg-no-repeat bg-cover bg-top rounded-full"
            style={{ backgroundImage: 'url("/me.jpg")' }}></div>

          <div className="mt-5 md:mt-10 text-center">
            <p className="text-blue-100 font-thin text-2xl md:text-4xl  md:mb-2">Hello, Im</p>

            <h1 className="font-semibold text-2xl md:text-6xl text-blue-200 font-bold  md:mb-2">
              Muhammad Usman Ghani
            </h1>

            <p className="text-blue-100 text-xl md:text-4xl">and this is my portfolio</p>
          </div>

          <RasumeBtn sm />

          <div className="mt-8 md:mt-0">
            <p className="text-blue-100 text-center text-md md:text-2xl">
              Im a front-end engineer at{' '}
              <Link href="https://mvssive.com/">
                <a className="text-yellow-600 hover:text-yellow-500" target="_blank">
                  Mvssive ventures
                </a>
              </Link>
            </p>

            <p className="text-blue-100 text-center text-md md:text-2xl">
              living in pakistan and follwoing my dream with a passionate heart.
            </p>
          </div>

          <RasumeBtn />

          <div className="md:mt-8 text-center">
            <a
              href="mailto:usmanghanidev@gmail.com"
              className="text-yellow-600 hover:text-yellow-500 mr-3">
              Email me
            </a>
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

const RasumeBtn = ({ sm }) => {
  return (
    <button
      className={`my-10 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded ${
        sm ? 'hidden md:block' : 'block md:hidden'
      }`}>
      <a href="/usmanghani.pdf" download="muhammad-usman-ghani-resume">
        Download Resume
      </a>
    </button>
  );
};

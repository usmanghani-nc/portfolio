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
            I'm a front-end engineer at.{' '}
            <a href="www.mvssive.com" className="text-yellow-600 hover:text-yellow-500">
              Mvssive ventures
            </a>
          </p>

          <p className="text-blue-100 text-2xl leading-loose">
            living in pakistan and follwoing my dream with a passionate heart.
          </p>

          <div className="mt-8">
            <a
              href="https://github.com/usmanghanidev"
              className="text-yellow-600 hover:text-yellow-500 mr-3">
              Github
            </a>
            <a
              href="https://twitter.com/usmanghanidev"
              className="text-yellow-600 hover:text-yellow-500 mr-3">
              Twitter
            </a>
            <a
              href="https://www.hackerrank.com/usmanghanidev"
              className="text-yellow-600 hover:text-yellow-500 mr-3">
              Hacker Rank
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usman-ghani-92a97b195/"
              className="text-yellow-600 hover:text-yellow-500">
              Linkdin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TopNavigation } from '@/components/top-navigation';

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <TopNavigation page='about' />

      <section className='flex relative flex-col pt-36 items-center w-full min-h-screen px-8 pb-16'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center text-[#3b82f6] tracking-wide leading-normal'>
          AI Chat Website
        </h1>

        <h1 className='text-2xl sm:text-5xl font-bold text-center'>by Aidbase</h1>

        <p className='text-center text-gray-200 mt-4 max-w-[768px]'>
          AI Chat Website (NextJS + Aidbase Elements).
        </p>

        <h1 className='text-lg sm:text-2xl font-bold text-center mt-8'>Demo</h1>

        <p className='text-center text-gray-200 mt-4 max-w-[768px]'>
          Try the website live at:
          <br />
          🔗{' '}
          <a className='underline' href='https://chat-website-demo.aidbase.ai'>
            https://chat-website-demo.aidbase.ai
          </a>
        </p>

        <h1 className='text-lg sm:text-2xl font-bold text-center mt-8'>GitHub</h1>

        <p className='text-center text-gray-200 mt-4 max-w-[768px]'>
          Use this template on GitHub:
          <br />
          🔗{' '}
          <a className='underline' href='https://github.com/Aidbase/ai-chat-website'>
            https://github.com/Aidbase/ai-chat-website
          </a>
        </p>

        <h1 className='text-lg sm:text-2xl font-bold text-center mt-8'>Installation</h1>

        <p className='text-gray-200 mt-4 max-w-[768px]'>
          <ol className='list-decimal [&_li]:mb-4'>
            <li>Create a new repository from this template.</li>
            <li>Clone the repository to your local machine.</li>
            <li>Install the dependencies.</li>
            <li>
              Create a free Aidbase account:
              <br />
              <a className='underline' href='https://app.aidbase.ai/signup'>
                https://app.aidbase.ai/signup
              </a>
              .
            </li>
            <li>
              Create a new AI Chatbot:
              <br />
              <a className='underline' href='https://docs.aidbase.ai/chatbot/get-started'>
                https://docs.aidbase.ai/chatbot/get-started
              </a>
              .
            </li>
            <li>
              Add the Chatbot ID to the <code>.env</code> file.
            </li>
          </ol>
        </p>

        <p className='text-center text-gray-200 mt-4 max-w-[768px]'>That&apos;s it 🥳</p>
      </section>
    </main>
  );
}

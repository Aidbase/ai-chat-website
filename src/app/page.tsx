'use client';
import { useEffect, useRef, useState } from 'react';
import { ChatBody, ChatElementMethods } from '@aidbase/chat';
import { TopNavigation } from '@/components/top-navigation';

let interval: NodeJS.Timeout | undefined;

export default function Home() {
  const [expandFull, setExpandFull] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const chatMethods = useRef<ChatElementMethods>();

  const clearChat = () => {
    chatMethods.current?.setNewConversation();

    setTimeout(() => {
      setExpandFull(false);
    }, 150);
  };

  /**
   * We're using this workaround to let the full page height expand with the chatbot container.
   * This puts the scrollbar nicely in the side of the window.
   * If you don't mind the scrollbar on the chatbot container itself, you can delete this hook.
   */
  useEffect(() => {
    interval = setInterval(() => {
      const container = containerRef.current;
      const span = container?.querySelector('span');
      const shadowRoot = span?.shadowRoot;
      const rootChild = shadowRoot?.firstChild;
      const containerChild = rootChild?.firstChild as HTMLElement;

      if (containerChild?.scrollHeight > containerChild?.clientHeight) {
        setExpandFull(true);
        clearInterval(interval);
      }
    });
  }, [expandFull]);

  return (
    <main className='flex flex-col min-h-screen items-center justify-between'>
      <TopNavigation page='chat' newChat={clearChat} />

      <section className='flex relative flex-col mt-32 items-center justify-center w-full max-w-[768px]'>
        {isLoading && (
          <div className='absolute'>
            <span className='loader'></span>
          </div>
        )}

        <div
          className='chat-container w-full transition-opacity duration-300'
          ref={containerRef}
          style={{
            height: expandFull ? 'auto' : 'calc(100vh - 10rem)',
            opacity: isLoading ? 0 : 1,
          }}
        >
          <ChatBody
            ref={chatMethods}
            chatbotID={process.env.NEXT_PUBLIC_CHATBOT_ID as string}
            onReady={() => setIsLoading(false)}
            colors={{
              /**
               * Theme your AI chatbot here.
               * See all available options on:
               * https://docs.aidbase.ai/customizing/theme
               */
              gray: {
                '100': 'transparent',
                '200': '#0c254b',
                '150': '#283043',
                '300': '#37435B',
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}

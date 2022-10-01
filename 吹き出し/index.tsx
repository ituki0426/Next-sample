import type { FC } from 'react';

const Chat: FC = () => (
  <span className="relative flex justify-center">
    <span
      className={[
        'whitespace-nowrap',
        'rounded',
        'white',
        'px-2',
        'py-1',
        'absolute',
        '-top-12',
        'left-1/2',
        'bg-white',
        '-translate-x-1/2',
        "before:content-['']",
        'before:absolute',
        'before:-translate-x-1/2',
        'before:top-[3px]',
        'before:border-[8px]',
		'before:border-r-[18px]',
        'before:border-transparent',
        'before:border-t-white',
      ].join(' ')}
    >
      Hello World
    </span>
  </span>
);

export default Chat;

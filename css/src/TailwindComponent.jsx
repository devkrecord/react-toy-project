import React from 'react';

/*
Tailwind는 className에 Tailwind에서 이미 정의된 수많은 클래스 이름 중 원하는 것을 골라 조합하여 사용 가능

Tailwind 설치 
$ yarn install -D tailwindcss
$ npx tailwindcss init

나머지는 https://tailwindcss.com/docs/installation 참고

Tailwind CSS IntelliSense 확장자 설치

className 작성시 ctrl + space 키 -> Tailwind에서 정의된 클래스 이름을 확인해볼 수 있다.

*/
export default function TailwindComponent() {
  return (
    <div>
      <h1 className="text-8xl">안녕!</h1>
      <button className="bg-blue-500 rounded-xl px-5 py-3">Button</button>
    </div>
  );
}

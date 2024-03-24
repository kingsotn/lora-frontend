'use client';

import Image from 'next/image';
import NavLink from './NavLink';

let heroImages = ['/1.png', '/3.png', '/mari.png', '/6.png', '/king.png', '/4.png'];

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Instantly train a LoRA by uploading <u>short</u> videos
          </h1>
          <p className="max-w-xl mx-auto">
            InstaLora makes it simple for you to generate cool looking images of yourself
            in any style, completely for free
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="https://leo4life2--kohya-app-app.modal.run/"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
            >
              Generate
            </NavLink>
            <NavLink
              target="_blank"
              href="https://github.com/leo4life2/instalora/tree/9fb08677205c709b4ec59574b96a5762c21ef0a0"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Learn more
            </NavLink>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10">
            {heroImages.map((image, idx) => (
              <Image
                key={idx}
                alt="image"
                src={image}
                width={800}
                height={800}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

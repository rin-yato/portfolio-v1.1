import React from "react";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function me() {
  return (
    <div className="pt-16">
      <h1 className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        Ohh? So, you want to know more about me?
      </h1>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        My name is <span className="font-normal uppercase">chea rithorn</span>,
        although some people call me
        <span className="font-normal uppercase"> rin yato</span> since I&apos;ve
        used that nickname for a long time.
      </article>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        Besides coding, I like to read manga, if you don&apos;t know what manga
        is, it&apos;s like a comic book. I also like to play video games,
        although I don&apos;t play them that much anymore.
      </article>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        Hmmm, what else? Ohh! I&apos;m a huge fan of strange theories, I like to
        read about them and I also like to think about them. For example, UFO🛸,
        aliens👽, time travel⌛️, magic🪄, gods and spirits, etc.
      </article>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        I also lift weights, I&apos;m not that strong, but I&apos;m trying to
        get stronger, haha😂.
      </article>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] my-16 lg:mt-28">
        Well, that&apos;s all I can think of right now, if you want to know more
        about me, you can contact me through this{" "}
        <a href="https://t.me/rinyato" className="font-[400] underline underline-offset-4">
          telegram
        </a>
        , I&apos;ll be happy to talk to you.
      </article>
      <article className="font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] mt-16 lg:mt-28 pb-28">
        Alright! Take care and have a nice day!
      </article>
      <div className="flex justify-center font-[300] text-2xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] lg:mt-28 pb-28 lg:pb-52">
        <a href="https://t.me/rinyato" className="underline underline-offset-8">
          My Telegram <ArrowForwardOutlinedIcon className="animate-pulse text-2xl pb-1 md:text-4xl lg:text-6xl xl:text-7xl"/>
        </a>
      </div>
    </div>
  );
}

export default me;

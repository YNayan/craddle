import PromptForm from "@/components/PromptForm";

export default function Home() {
  return (
    <section className="sm:h-screen xl:h-full relative max-container padding-container flex flex-col gap-20 py-10 pb-32 mb:gap-28 lg:py-20 sm:justify-center items-center text-center sm:-mb-16">
      <div className="gap-y-1 lg:gap-y-5 flex-col xl:max-w-[900px]">
        <h1 className=" bold-32 lg:bold-52 text-red-400 dark:text-white">
          <span className="font-light-gradient dark:font-dark-gradient">
            Empower Your Creativity
          </span>{" "}
          with Instant Inspiration
        </h1>
        <p className="regular-14 lg:regular-20 dark:text-gray-400">
          Unlock the Power of One Prompt: Instantly Generate Compelling Quotes
          and Text-Based Posts to Fuel Your Creativity Effortlessly
        </p>
      </div>

      <PromptForm />
    </section>
  );
}
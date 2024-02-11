"use client";
import { useFormState, useFormStatus } from "react-dom";
import { generatePosts } from "@/lib/action";

const PromptForm = () => {
  const [state, formAction] = useFormState<any, any>(generatePosts, {
    message: null,
  });
  const { pending } = useFormStatus();

  return (
    <form
      action={formAction}
      className="w-full flex flex-col items-center gap-4"
    >
      <label
        htmlFor="postMessage"
        className="block text-lg regular-18 lg:bold-20 text-gray-500 dark:text-gray-700"
      >
        Let's get you started
      </label>
      <div className="border-4 border-gray-500 dark:border-black-20 h-full w-full p-2 lg:p-6 flexBetween xl:max-w-[80%] rounded-xl ">
        <input
          type="text"
          id="postMessage"
          name="postMessage"
          className="border-none bg-transparent focus:outline-none w-full font-light-gradient dark:font-dark-gradient lg:regular-18"
          placeholder="Generate the required Post."
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 dark:from-blue-20 rounded-md p-2 lg:p-4 w-auto whitespace-nowrap transition-colors regular-14 lg:regular-18 dark:hover:from-blue-10 hover:from-blue-500"
          disabled={pending}
        >
          {pending ? "Generating Post" : "Generate Post"}
        </button>
        {/* {
          state.message ?
            "Something went wrong":"" /*Apply proper error card later on*/
        }
      </div>
    </form>
  );
};

export default PromptForm;

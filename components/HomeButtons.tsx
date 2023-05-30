import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const HomeButtons = () => {
  return (
    <div
      className={`${poppins.className} flex justify-center gap-5 text-sm md:gap-7 lg:gap-8 lg:text-base`}
    >
      <Link
        href="/signup"
        className="border-2 border-clr-black bg-clr-black px-3 py-2 text-clr-gray1"
      >
        Start Writing
      </Link>
      <Link href="/blogs" className="border-2 border-clr-black px-3 py-2">
        Explore Blogs
      </Link>
    </div>
  );
};

export default HomeButtons;

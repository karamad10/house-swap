import Link from "next/link";

const Button = ({ href, text, primary }) => {
  return (
    <Link href={href}>
      <button
        className={`${
          primary
            ? "bg-white hover:bg-indigo-100 text-indigo-800 font-semibold py-2 px-4 border border-indigo-400 rounded shadow"
            : "bg-white hover:bg-indigo-100 text-grey-800 font-semibold py-2 px-4 border border-grey-400 rounded shadow"
        }`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

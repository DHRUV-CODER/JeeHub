interface LoaderProps {
  TextValue: string;
}
export default function Loader({ TextValue }: LoaderProps) {
  return (
    <div>
      <div className="px-1 py-2 flex items-center justify-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl sm:text-2xl text-stone-300">
          <mark className="px-2 text-black rounded bg-orange-500">Hub</mark>{TextValue}
        </h1>
      </div>
    </div>
  );
}

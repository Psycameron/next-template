export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M27.75 16a.75.75 0 0 1-.75.75H16.75V27a.75.75 0 1 1-1.5 0V16.75H5a.75.75 0 1 1 0-1.5h10.25V5a.75.75 0 1 1 1.5 0v10.25H27a.75.75 0 0 1 .75.75Z" />
    </svg>
  );
};

export const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M27.75 16a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75Z" />
    </svg>
  );
};

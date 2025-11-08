export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-full focus:bg-[#FFD479] focus:px-6 focus:py-3 focus:text-[#002B5B] focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}

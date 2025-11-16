type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <section
      className={`mx-auto max-w-2xl px-4 py-32 lg:max-w-8xl lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

type Props = {
  children: React.ReactNode;
};

export default function DocumentContent({ children }: Props) {
  return <article className="flex-auto px-4 py-16 xl:px-16">{children}</article>;
}

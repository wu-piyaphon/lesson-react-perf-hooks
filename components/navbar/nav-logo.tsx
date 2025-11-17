import { Menu, X } from "lucide-react";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onToggleMenu: () => void;
};

export default function NavLogo({ isOpen, onToggleMenu }: Props) {
  return (
    <div className="z-50 flex items-center gap-4">
      <label className="swap swap-rotate md:hidden">
        <input type="checkbox" checked={isOpen} onChange={onToggleMenu} />

        <Menu className="swap-off fill-current" />
        <X className="swap-on fill-current" />
      </label>

      <Link href="/" className="font-bold text-2xl text-white">
        ReAcademy
      </Link>
    </div>
  );
}

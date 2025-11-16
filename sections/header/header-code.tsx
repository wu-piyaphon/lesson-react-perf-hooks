import Image from "next/image";
import HeaderLine from "./header-line";

export default function HeaderCode() {
  return (
    <div className="relative flex items-center justify-center">
      <HeaderLine />

      <div className="relative w-full md:w-4/5">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
        <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
        <div className="-top-px absolute right-11 left-20 h-px bg-linear-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
        <div className="-bottom-px absolute right-20 left-11 h-px bg-linear-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />

        <div className="mockup-code relative z-10 rounded-2xl border-primary bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="mb-4 ml-4 w-fit rounded-full border border-primary bg-slate-800 px-3 py-0.5 text-primary text-xs">
            react-hooks.tsx
          </div>
          <pre data-prefix="01">
            <code>{`import { useMemo, useCallback } from 'react';`}</code>
          </pre>
          <pre data-prefix="02"></pre>
          <pre data-prefix="03">
            <code>{`const memoizedValue = useMemo(() => {`}</code>
          </pre>
          <pre data-prefix="04">{`    return ...`}</pre>
          <pre data-prefix="05">
            <code>{`}, [dependency]);`}</code>
          </pre>
          <pre data-prefix="06">
            <code></code>
          </pre>
        </div>

        <Image
          src="/images/header/blur-circle-cyan.png"
          alt="Blur Circle"
          width={530}
          height={530}
          className="-top-66 -right-64 absolute"
        />

        <Image
          src="/images/header/blur-circle-indigo.png"
          alt="Blur Circle"
          width={560}
          height={560}
          className="-right-44 -top-34 absolute"
        />
      </div>
    </div>
  );
}

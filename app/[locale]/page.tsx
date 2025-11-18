import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Container from "@/components/container";
import {
  DocumentContent,
  DocumentNavBookmark,
  DocumentNavPage,
} from "@/components/document";
import HeaderSection from "@/sections/header/header-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <HeaderSection />

      <Container className="relative flex w-full flex-row pt-0">
        <DocumentNavPage />
        <DocumentContent>
          <div id="quick-start">
            Quick start! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus, molestiae suscipit? Ullam sequi hic voluptate illum
            praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam quis
            accusamus dicta molestias fuga. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Esse quo eligendi, ipsam itaque
            consectetur inventore quidem laborum ad expedita earum cum tempora,
            cumque eaque aperiam et incidunt voluptate non. Sit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus, molestiae
            suscipit? Ullam sequi hic voluptate illum praesentium et veniam
            fugit nisi eveniet! Quas blanditiis, quam quis accusamus dicta
            molestias fuga. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Esse quo eligendi, ipsam itaque consectetur inventore quidem
            laborum ad expedita earum cum tempora, cumque eaque aperiam et
            incidunt voluptate non. Sit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus, molestiae suscipit? Ullam sequi hic
            voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Esse quo eligendi,
            ipsam itaque consectetur inventore quidem laborum ad expedita earum
            cum tempora, cumque eaque aperiam et incidunt voluptate non.
            Sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
            veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus
            dicta molestias fuga. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse quo eligendi, ipsam itaque consectetur
            inventore quidem laborum ad expedita earum cum tempora, cumque eaque
            aperiam et incidunt voluptate non. Sit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus, molestiae suscipit? Ullam sequi
            hic voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum,
            dolor sit amet consectetur
          </div>
          <div id="installing-dependencies">
            Installing dependencies! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus, molestiae suscipit? Ullam sequi hic
            voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Esse quo eligendi,
            ipsam itaque consectetur inventore quidem laborum ad expedita earum
            cum tempora, cumque eaque aperiam et incidunt voluptate non. Sit.
            adipisicing elit. Esse quo eligendi, ipsam itaque consectetur
            inventore quidem laborum ad expedita earum cum tempora, cumque eaque
            aperiam et incidunt voluptate non. Sit.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus, molestiae suscipit? Ullam sequi
            hic voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Esse quo eligendi,
            ipsam itaque consectetur inventore quidem laborum ad expedita earum
            cum tempora, cumque eaque aperiam et incidunt voluptate non.
            Sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
            veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus
            dicta molestias fuga. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse quo eligendi, ipsam itaque consectetur
          </div>
          <div id="configuring-your-project">
            Configuring your project! inventore quidem laborum ad expedita earum
            cum tempora, cumque eaque aperiam et incidunt voluptate non.
            Sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
            veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus
            dicta molestias fuga. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse quo eligendi, ipsam itaque consectetur
            inventore quidem laborum ad expedita earum cum tempora, cumque eaque
            aperiam et incidunt voluptate non. Sit. veniam fugit nisi eveniet!
            Quas blanditiis, quam quis accusamus dicta molestias fuga. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Esse quo
            eligendi, ipsam itaque consectetur inventore quidem laborum ad
            expedita earum cum tempora, cumque eaque aperiam et incidunt
            voluptate non. Sit.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus, molestiae suscipit? Ullam sequi hic
            voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Esse quo eligendi,
            ipsam itaque consectetur inventore quidem laborum ad expedita earum
            cum tempora, cumque eaque aperiam et incidunt voluptate non. Sit.
          </div>
          <div id="basic-usage">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
            veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus
            dicta molestias fuga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus, molestiae suscipit? Ullam sequi hic
            voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus, molestiae
            suscipit? Ullam sequi hic voluptate illum praesentium et veniam
            fugit nisi eveniet! Quas blanditiis, quam quis accusamus dicta
            molestias fuga. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Natus, molestiae suscipit? Ullam sequi hic voluptate illum
            praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam quis
            accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus, molestiae suscipit? Ullam sequi
            hic voluptate illum praesentium et veniam fugit nisi eveniet! Quas
            blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus, molestiae
            <div id="profiling-performance">
              Profiling performance! suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae
            </div>
            <div id="understanding-caching">
              Understanding caching! suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis
            </div>
            <div id="predicting-performance">
              Predicting performance! accusamus dicta molestias fuga. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Natus,
              molestiae suscipit? Ullam sequi hic voluptate illum praesentium et
              veniam fugit nisi eveniet! Quas blanditiis, quam quis accusamus
              dicta molestias fuga. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus, molestiae suscipit? Ullam sequi hic
              voluptate illum praesentium et veniam fugit nisi eveniet! Quas
              blanditiis, quam quis accusamus dicta molestias fuga. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Natus, molestiae
              suscipit? Ullam sequi hic voluptate illum praesentium et veniam
              fugit nisi eveniet! Quas blanditiis, quam quis accusamus dicta
              molestias fuga. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae
            </div>
            <div id="getting-help">
              Getting help! suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam fugit nisi eveniet! Quas blanditiis, quam
              quis accusamus dicta molestias fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet
            </div>
            <div id="troubleshooting">
              Troubleshooting adipisicing elit. Natus, molestiae suscipit? Ullam
              sequi hic voluptate illum praesentium et veniam fugit nisi
              eveniet! Quas blanditiis, quam quis accusamus dicta molestias
              fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus, molestiae suscipit? Ullam sequi hic voluptate illum
              praesentium et veniam
            </div>
            <div id="join-the-community">
              Join the community! fugit nisi eveniet! Quas blanditiis, quam quis
              accusamus dicta molestias fuga.
            </div>
          </div>
        </DocumentContent>
        <DocumentNavBookmark />
      </Container>
    </>
  );
}

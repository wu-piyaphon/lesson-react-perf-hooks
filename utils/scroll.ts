export function getElementPosition(elementId: string): number | null {
  const element = document.getElementById(elementId);
  if (!element) return null;

  return element.getBoundingClientRect().top + window.scrollY;
}

export function isElementActive(
  href: string,
  scrollPosition: number,
  scrollOffset: number = 100,
): boolean {
  const elementId = href.replace("#", "");
  const elementPosition = getElementPosition(elementId);

  if (elementPosition === null) return false;

  return scrollPosition >= elementPosition - scrollOffset;
}

export function scrollToElement(
  href: string,
  scrollOffset: number = 100,
): void {
  const elementId = href.replace("#", "");
  const elementPosition = getElementPosition(elementId);

  if (elementPosition !== null) {
    window.scrollTo({
      top: elementPosition - scrollOffset,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);
  }
}

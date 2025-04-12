type OpenLinkOptions = {
  newTab?: boolean;
  noopener?: boolean;
  noreferrer?: boolean;
};

export function openLink(link: string, options: OpenLinkOptions = {}): void {
  const { newTab = true, noopener = true, noreferrer = true } = options;

  if (newTab) {
    const rel = [noopener ? "noopener" : "", noreferrer ? "noreferrer" : ""]
      .filter(Boolean)
      .join(" ");

    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.rel = rel;
    a.click();
  } else {
    window.location.href = link;
  }
}

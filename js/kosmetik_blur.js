import $ from "jquery";
const stableClass =
  "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl";
const kosmetikKanan = $(".kosmetik-kanan");
const kosmetikKiri = $(".kosmetik-kiri");
kosmetikKanan.addClass(stableClass + " -bottom-40 sm:-bottom-80");
kosmetikKiri.addClass(stableClass + " -top-40 sm:-top-80");
const stableKosmetikContent = (kanan) => {
  return `<div
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
          class="relative aspect-1155/678 w-144.5 -z-1 ${
            kanan
              ? "right-[calc(50%-11rem)] translate-x-1/2 sm:right-[calc(50%-30rem)] "
              : "left-[calc(50%-11rem)] -translate-x-1/2 sm:left-[calc(50%-30rem)] "
          } rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-288.75"
        ></div>`;
};
kosmetikKiri.html(stableKosmetikContent(false));
kosmetikKanan.html(stableKosmetikContent(true));

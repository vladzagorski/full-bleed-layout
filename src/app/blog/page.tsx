import { Prose } from "@/components/prose";
import { Hero } from "@/components/sections/hero";
import { outlineStyle, sectionSpaceStyle } from "@/components/utils";
import { cn } from "@/lib/utils";

export default function Blog() {
  return (
    <>
      <Hero title="Blog" />

      <Prose className={cn("grid-container full-breakout", "max-w-max", sectionSpaceStyle())}>
        <h2>Lorem Ipsum</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt blandit lectus, in sollicitudin diam
          molestie vel. Ut vitae ante in ex sollicitudin laoreet. Integer in nulla imperdiet, faucibus turpis a,
          accumsan tellus. Quisque tempus quam et nunc iaculis egestas. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Curabitur ex odio, sollicitudin sed congue ac, egestas vitae
          libero. Sed vehicula nec elit vitae tincidunt. Curabitur a felis non dolor ullamcorper pharetra at eget est.
        </p>

        <p>
          In volutpat enim a congue iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Nam aliquam magna vel libero finibus, quis tincidunt nisi accumsan. Suspendisse a eros
          lacus. Pellentesque eget magna at nibh consectetur pulvinar. Aenean ultrices mi ac commodo vehicula. Cras ac
          magna dapibus odio posuere venenatis. Integer eu gravida turpis.
        </p>

        <p className={cn(outlineStyle(), "breakout", "bg-accent p-3")}>
          Nullam dictum sem lacus, at hendrerit eros bibendum eget. Proin mauris neque, rutrum et eros ut, eleifend
          aliquam dui. Vestibulum in dignissim risus, ac scelerisque dui. Phasellus vitae luctus augue, ac porta sem.
          Integer sed molestie erat. Ut ut justo ipsum. Praesent efficitur mi erat, non mollis dolor finibus vel.
          Praesent malesuada, felis at ornare ultricies, lorem felis pellentesque sem, eget dictum risus nisl non quam.
          Proin convallis tempus pulvinar. Suspendisse condimentum nisi id mi venenatis, vitae porta enim faucibus.
          Curabitur id dolor nisl.
        </p>

        <p>
          Donec vitae lectus et quam semper facilisis.Suspendisse egestas, metus vitae blandit sodales, mauris lectus
          volutpat est, vel tempor mi orci nec nulla.Suspendisse potenti.Duis faucibus dui ut cursus lacinia.Vivamus ut
          risus nisi.Phasellus eu augue nisi.Sed vitae mi porta, euismod elit vel, rhoncus nunc.Proin in scelerisque
          orci.Nunc fermentum est leo, vitae tincidunt sapien dapibus vel.Interdum et malesuada fames ac ante ipsum
          primis in faucibus.Ut venenatis eu purus vitae maximus.Quisque eu dui feugiat, aliquet tellus at, vulputate
          orci.Curabitur scelerisque massa sapien, condimentum finibus erat aliquam eget.Pellentesque bibendum ipsum
          massa, eget viverra sapien malesuada vel.Ut vitae egestas dolor.Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas.
        </p>
      </Prose>
    </>
  );
}

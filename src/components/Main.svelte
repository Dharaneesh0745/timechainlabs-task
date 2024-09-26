<script>
  import Hero from "./helpers/Hero.svelte";
  import HeroImages from "./helpers/HeroImages.svelte";
  import Trusted from "./helpers/Trusted.svelte";
</script>

<main class="flex flex-col flex-1 p-4 mt-3">
  <section class="h-[380px] text-center flex flex-col justify-center">
    <Hero />
  </section>
  <section>
    <HeroImages />
  </section>
  <section>
    <Trusted />
  </section>
</main>

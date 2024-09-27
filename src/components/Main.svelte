<script>
  import Benefits from "./helpers/Benefits.svelte";
  import ContactUs from "./helpers/ContactUs.svelte";
  import Hero from "./helpers/Hero.svelte";
  import HeroImages from "./helpers/HeroImages.svelte";
  import HireTalent from "./helpers/HireTalent.svelte";
  import HowItWorks from "./helpers/HowItWorks.svelte";
  import RecruitersStroy from "./helpers/RecruitersStroy.svelte";
  import Trusted from "./helpers/Trusted.svelte";
</script>

<main class="flex flex-col flex-1 p-4 mt-3 w-full">
  <section
    class="max-w-[1400px] mx-auto h-[380px] text-center flex flex-col justify-center"
  >
    <Hero />
  </section>
  <section class="max-w-[1400px] mx-auto">
    <HeroImages />
  </section>
  <section class="max-w-[1400px] mx-auto">
    <Trusted />
  </section>
  <section
    class="bg-green-100"
    style="width: 98.1vw; margin-left: calc((100% - 100vw) / 2);"
  >
    <RecruitersStroy />
  </section>
  <section>
    <Benefits />
  </section>
  <section id="#howItWorks">
    <HowItWorks />
  </section>
  <section>
    <ContactUs />
  </section>
  <section>
    <HireTalent />
  </section>
</main>

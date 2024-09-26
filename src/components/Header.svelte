<script>
  export let y;

  let tabs = [
    { name: "Mentors", link: "#mentors", style: "" },
    { name: "How it works", link: "#howItWorks", style: "" },
    { name: "Projects", link: "#projects", style: "" },
    { name: "Blog", link: "#blog", style: "" },
    { name: "FAQ", link: "#faq", style: "" },
    { name: "Code of Conduct", link: "#codeOfConduct", style: "" },
    {
      name: "Hire from Us",
      link: "#hireFromUs",
      style: "text-blue-600 font-semibold",
    },
  ];
</script>

<header
  class={"sticky z-[10] pt-3 top-0 duration-200 px-6 flex items-center justify-between border border-solid" +
    (y > 0
      ? "py-4 bg-white border-0"
      : "py-6 bg-transparent border-transparent")}
>
  <!-- <b class="font-bold poppins">Timechain Labs</b> -->
  <img src="/logo.png" class="sm:h-14 sm:w-50 h-12 w-40" alt="" />
  <div class="lg:flex hidden items-center gap-12">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-blue-600">
        <p class={tab.style}>{tab.name}</p>
      </a>
    {/each}
  </div>
  <button
    class="text-white lg:flex hidden text-sm hover:bg-blue-500 hover:duration-200 bg-blue-600 px-5 py-3 rounded-md"
    >Apply Now &nbsp;<i class="fa-solid fa-circle-arrow-right mt-1"></i>
  </button>
  <button class="lg:hidden"><i class="fa-solid fa-bars text-2xl"></i></button>
</header>

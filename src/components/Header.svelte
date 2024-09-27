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

  // State to control the visibility of the modal
  let isModalOpen = false;

  // Function to toggle modal visibility
  function toggleModal() {
    isModalOpen = !isModalOpen;
  }
</script>

<header
  class={"sticky z-[10] pt-3 lg:pb-2 top-0 duration-200 px-6 flex items-center justify-between border border-solid" +
    (y > 0
      ? "py-4 bg-white border-0"
      : "py-6 bg-transparent border-transparent")}
>
  <img src="/logo.png" class="sm:h-14 sm:w-50 h-12 w-40" alt="Logo" />
  <div class="lg:flex hidden items-center gap-12">
    {#each tabs as tab}
      <a href={tab.link} class="duration-200 hover:text-blue-600">
        <p class={tab.style}>{tab.name}</p>
      </a>
    {/each}
  </div>
  <button
    class="text-white lg:flex hidden text-sm hover:bg-blue-500 hover:duration-200 bg-blue-600 px-5 py-3 rounded-md"
  >
    Apply Now &nbsp;<i class="fa-solid fa-circle-arrow-right mt-1"></i>
  </button>
  <button class="lg:hidden" on:click={toggleModal}>
    <i class="fa-solid fa-bars text-2xl"></i>
  </button>
</header>

<!-- Modal -->
{#if isModalOpen}
  <div
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    on:click={toggleModal}
  >
    <div
      class="bg-white rounded-lg text-center p-6 max-w-sm w-full relative"
      on:click|stopPropagation
    >
      <h2 class="text-lg font-bold mb-4">Navigation</h2>
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-blue-600"
        on:click={toggleModal}
      >
        <i class="fa-solid fa-times text-xl"></i>
      </button>
      <div>
        {#each tabs as tab}
          <a
            href={tab.link}
            class="block py-2 text-gray-800 hover:text-blue-600"
          >
            <p class={tab.style}>{tab.name}</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

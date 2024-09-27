<script lang="ts">
  import { onMount } from "svelte";

  let currentIndex: number = 0;
  const images: string[] = [
    "/rc-11.jpg",
    "/rc-22.jpg",
    "/rc-33.jpg",
    "/rc-11.jpg",
    "/rc-22.jpg",
    "/rc-33.jpg",
  ];

  let isDragging = false; // Track if the user is dragging
  let startX: number;
  let windowWidth: number = 0; // Initialize window width
  let itemsPerRow: number = 3; // Default for desktop

  // Function to update window width
  function updateWindowWidth() {
    windowWidth = window.innerWidth;
    itemsPerRow = windowWidth < 768 ? 1 : 3; // Set items per row based on window width
  }

  onMount(() => {
    updateWindowWidth(); // Set initial window width
    window.addEventListener("resize", updateWindowWidth); // Update width on resize

    // Cleanup on component destroy
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  });

  function nextImages() {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around to show all images
  }

  function previousImages() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to show all images
  }

  // Touch support for swiping
  function touchStart(event: TouchEvent | MouseEvent) {
    isDragging = true;
    startX = (event as TouchEvent).touches
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
  }

  function touchMove(event: TouchEvent | MouseEvent) {
    if (!isDragging) return; // Only process if dragging
    const currentX = (event as TouchEvent).touches
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
    const xDiff = startX - currentX;
    if (xDiff > 50) {
      nextImages();
      isDragging = false; // Stop dragging after a swipe
    } else if (xDiff < -50) {
      previousImages();
      isDragging = false; // Stop dragging after a swipe
    }
  }

  function touchEnd() {
    isDragging = false; // Reset dragging state
  }

  function mouseDown(event: MouseEvent) {
    touchStart(event);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(event: MouseEvent) {
    touchMove(event);
  }

  function mouseUp() {
    isDragging = false; // Reset dragging state
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  }
</script>

<main class="pb-10">
  <div class="mt-8 lg:ml-16 ml-8">
    <h1 class="text-4xl">Recruiters Story</h1>
    <br />
    <p>
      Together, we're making education accessible and <br /> transformative. Join
      us in shaping a brighter future!
    </p>

    <div class="top-buttons">
      <button on:click={previousImages} class="arrow left">←</button>
      <button on:click={nextImages} class="arrow right">→</button>
    </div>

    <br /><br />

    <div
      class="carousel"
      on:touchstart={touchStart}
      on:touchmove={touchMove}
      on:touchend={touchEnd}
      on:mousedown={mouseDown}
    >
      <div
        class="carousel-images"
        style="transform: translateX(-{currentIndex *
          (100 /
            itemsPerRow)}%); width: calc(100% * {images.length} / {itemsPerRow});"
      >
        {#each images as image, index}
          <div class="carousel-item">
            <img src={image} alt="Carousel Image" class="carousel-image" />
          </div>
        {/each}
      </div>
    </div>

    <div class="bottom-buttons">
      <button on:click={previousImages} class="arrow left">←</button>
      <button on:click={nextImages} class="arrow right">→</button>
    </div>
  </div>
</main>

<style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden; /* Hide overflow to show only the current images */
    width: 100%; /* Ensure carousel takes full width */
  }

  .top-buttons {
    position: relative;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    margin-top: -50px;
    margin-right: 50px;
  }

  .bottom-buttons {
    display: none;
    justify-content: center;
    margin-top: 10px;
  }

  .carousel-images {
    display: flex;
    transition: transform 0.5s ease;
    /* Width is dynamically set in the inline style */
  }

  .carousel-item {
    flex: 0 0 calc(100% / var(--items-per-row)); /* Ensure items take appropriate width */
    max-width: 100%; /* Avoid overflow */
    padding: 5px; /* Optional padding between items */
  }

  .carousel-image {
    width: 90%; /* Adjusted to 100% for responsive design */
    height: auto;
    border-radius: 10px;
  }

  .caption {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    text-align: center;
  }

  .arrow {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    height: 40px;
    width: 40px;
    margin: 0 5px;
  }

  @media (max-width: 500px) {
    .top-buttons {
      display: none;
    }

    .bottom-buttons {
      display: flex;
    }

    .carousel {
      overflow: hidden; /* Hide overflow for mobile */
    }

    .carousel-item {
      flex: 0 0 100%; /* One image at a time on mobile */
    }

    .carousel-image {
      width: 100%; /* Image full width */
    }

    .arrow {
      height: 30px;
      width: 30px;
      padding: 5px;
    }
  }

  @media (min-width: 769px) {
    .carousel-item {
      flex: 0 0 calc(33.33% - 10px); /* Three images at a time on larger screens */
    }
  }
</style>

<script lang="ts">
  let currentIndex: number = 0;
  const images: string[] = [
    "https://via.placeholder.com/500x400/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/500x400/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/500x400/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/500x400/FF33A1/FFFFFF?text=Image+4",
    "https://via.placeholder.com/500x400/FF5733/FFFFFF?text=Image+5",
    "https://via.placeholder.com/500x400/33FF57/FFFFFF?text=Image+6",
    "https://via.placeholder.com/500x400/3357FF/FFFFFF?text=Image+7",
  ];

  let isDragging = false; // Track if the user is dragging
  let startX: number;

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
        style="transform: translateX(-{currentIndex * (100 / images.length)}%);"
      >
        {#each images as image}
          <img src={image} alt="Carousel Image" class="carousel-image" />
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
    overflow-x: auto; /* Allow horizontal scrolling */
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
  }

  .carousel-image {
    width: 450px; /* Fixed width for images */
    height: auto;
    margin: 0 5px;
    border-radius: 10px;
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

  @media (max-width: 768px) {
    .top-buttons {
      display: none;
    }

    .bottom-buttons {
      display: flex;
    }

    .carousel {
      overflow-x: scroll; /* Enable horizontal scrolling for mobile */
    }

    .carousel-image {
      width: 80%; /* Adjust image width for mobile */
      height: auto;
    }

    .arrow {
      height: 30px;
      width: 30px;
      padding: 5px;
    }
  }

  @media (max-width: 480px) {
    .carousel-image {
      width: 90%; /* Adjust image width further for small screens */
    }
  }
</style>

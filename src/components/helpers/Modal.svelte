<script lang="ts">
  export let showModal: boolean;
  export let onClose: () => void;
</script>

{#if showModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white text-center rounded-lg p-6 max-w-sm w-full">
      <i class="fa-solid fa-envelope text-8xl"></i>
      <h2 class="text-xl font-semibold">Thank You for Reaching Out!</h2>
      <p>
        Your message has been received, and your request will be addressed
        shortly, Kindly check your mail for update on your request.
      </p>
      <div class="flex justify-center mt-4">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded"
          on:click={onClose}
        >
          Done
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Basic modal styling */
  .fixed {
    position: fixed;
  }
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .bg-black {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .z-50 {
    z-index: 50;
  }
</style>

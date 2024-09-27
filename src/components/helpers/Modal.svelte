<script lang="ts">
  export let showModal: boolean;
  export let onClose: () => void;
</script>

{#if showModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white rounded-lg p-6 max-w-sm w-full">
      <h2 class="text-xl font-semibold">Thank You!</h2>
      <p>Your submission has been received.</p>
      <div class="flex justify-end mt-4">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded"
          on:click={onClose}
        >
          Close
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

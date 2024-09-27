<script lang="ts">
  import Modal from "./Modal.svelte"; // Adjust the import path as necessary

  let contactName: string = "";
  let companyName: string = "";
  let emailAddress: string = "";
  let phoneNumber: string = "";
  let countryCode: string = "+91"; // Default country code (e.g., USA)
  let selectedCountry: string = "";
  let selectedState: string = "";
  let amount: number | null = null; // Amount field
  let currency: string = ""; // Bind for selected currency
  let message: string = ""; // Message field

  let errors: {
    contactName: string;
    companyName: string;
    emailAddress: string;
    phoneNumber: string;
    selectedCountry: string;
    selectedState: string;
    amount: string;
    currency: string;
    message: string;
  } = {
    contactName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    selectedCountry: "",
    selectedState: "",
    amount: "",
    currency: "",
    message: "",
  };

  const countries = [
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    // Add more countries as needed
  ];

  const states = [
    { name: "California" },
    { name: "Texas" },
    { name: "New York" },
    // Add more states as needed
  ];

  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "INR", symbol: "₹" },
    { code: "AUD", symbol: "A$" },
    // Add more currencies as needed
  ];

  const validate = (): boolean => {
    errors = {
      contactName: "",
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
      selectedCountry: "",
      selectedState: "",
      amount: "",
      currency: "",
      message: "",
    };

    if (!contactName) {
      errors.contactName = "Contact Name is required";
    }
    if (!companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!emailAddress) {
      errors.emailAddress = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(emailAddress)) {
      errors.emailAddress = "Email Address is invalid";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!selectedCountry) {
      errors.selectedCountry = "Country is required";
    }
    if (!selectedState) {
      errors.selectedState = "State is required";
    }
    if (amount === null) {
      errors.amount = "Amount is required";
    }
    if (!currency) {
      errors.currency = "Currency is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }

    return (
      !errors.contactName &&
      !errors.companyName &&
      !errors.emailAddress &&
      !errors.phoneNumber &&
      !errors.selectedCountry &&
      !errors.selectedState &&
      !errors.amount &&
      !errors.currency &&
      !errors.message
    );
  };

  let showModal: boolean = false; // State for modal visibility

  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to an API)
      console.log("Form submitted", {
        contactName,
        companyName,
        emailAddress,
        countryCode,
        phoneNumber,
        selectedCountry,
        selectedState,
        amount,
        currency,
        message,
      });

      // Show the modal on successful submission
      showModal = true;

      // Reset the form fields
      contactName = "";
      companyName = "";
      emailAddress = "";
      phoneNumber = "";
      countryCode = "+1";
      selectedCountry = "";
      selectedState = "";
      amount = null;
      currency = "";
      message = "";
    }
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

<main class="mt-24 flex lg:flex-row gap-x-32 flex-col">
  <div class="flex-1">
    <p
      class="border border-1 px-2 py-1 text-sm w-[95px] text-center rounded-2xl"
    >
      Contact Us
    </p>
    <br />
    <h1 class="text-4xl">Hiring Request</h1>
    <br />
    <p class="text-gray-600">
      Unlock the potential of your business with top-tier professionals. We
      provide custom hiring solutions for every industry, ensuring you find the
      perfect fit.
    </p>
  </div>

  <div class="flex-[1.3] bg-green-100 rounded-xl lg:mt-0 mt-8">
    <div class="m-5 bg-white rounded-md p-4">
      <form on:submit={handleSubmit} class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="contactName" class="block mb-2"
              >Contact Name
              <span class="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              bind:value={contactName}
              class="border rounded p-2 w-full"
            />
            {#if errors.contactName}<p class="text-red-500">
                {errors.contactName}
              </p>{/if}
          </div>
          <div>
            <label for="companyName" class="block mb-2"
              >Company Name<span class="text-red-500 font-bold">*</span></label
            >
            <input
              type="text"
              id="companyName"
              bind:value={companyName}
              class="border rounded p-2 w-full"
            />
            {#if errors.companyName}<p class="text-red-500">
                {errors.companyName}
              </p>{/if}
          </div>
          <div>
            <label for="emailAddress" class="block mb-2"
              >Email Address<span class="text-red-500 font-bold">*</span></label
            >
            <input
              type="email"
              id="emailAddress"
              bind:value={emailAddress}
              class="border rounded p-2 w-full"
            />
            {#if errors.emailAddress}<p class="text-red-500">
                {errors.emailAddress}
              </p>{/if}
          </div>
          <div>
            <label for="phoneNumber" class="block mb-2"
              >Phone No<span class="text-red-500 font-bold">*</span></label
            >
            <div class="flex">
              <select
                id="countryCode"
                bind:value={countryCode}
                class="border rounded-l p-2 w-[30%]"
              >
                {#each countries as country}
                  <option value={country.code}
                    >{country.flag} {country.code}</option
                  >
                {/each}
              </select>
              <input
                type="tel"
                id="phoneNumber"
                bind:value={phoneNumber}
                class="border rounded-r p-2 w-3/4"
                placeholder="1234567890"
              />
            </div>
            {#if errors.phoneNumber}<p class="text-red-500">
                {errors.phoneNumber}
              </p>{/if}
          </div>
          <div>
            <label for="selectedCountry" class="block mb-2"
              >Country you're based in<span class="text-red-500 font-bold"
                >*</span
              ></label
            >
            <select
              id="selectedCountry"
              bind:value={selectedCountry}
              class="border rounded p-3 w-full"
            >
              <option value="">Select Country</option>
              {#each countries as country}
                <option value={country.name}>{country.name}</option>
              {/each}
            </select>
            {#if errors.selectedCountry}<p class="text-red-500">
                {errors.selectedCountry}
              </p>{/if}
          </div>
          <div>
            <label for="selectedState" class="block mb-2"
              >City you're operating from<span class="text-red-500 font-bold"
                >*</span
              ></label
            >
            <select
              id="selectedState"
              bind:value={selectedState}
              class="border rounded p-3 w-full"
            >
              <option value="">Select State</option>
              {#each states as state}
                <option value={state.name}>{state.name}</option>
              {/each}
            </select>
            {#if errors.selectedState}<p class="text-red-500">
                {errors.selectedState}
              </p>{/if}
          </div>
        </div>

        <div class="lg:flex flex-row gap-x-3">
          <div class="flex-1">
            <label for="" class="mb-2"
              >Employment type you're offering?<span
                class="text-red-500 font-bold">*</span
              ></label
            >
            <div class="mb-1 mt-2">
              <input type="checkbox" name="" id="" />
              <label for="">Full-time Role</label>
            </div>
            <div class="mb-1">
              <input type="checkbox" name="" id="" />
              <label for="">Part-time Role</label>
            </div>
            <div class="mb-1">
              <input type="checkbox" name="" id="" />
              <label for="">Internship Role</label>
            </div>
          </div>
          <div class="flex-1">
            <label for=""
              >Skill Level<span class="text-red-500 font-bold">*</span></label
            >
            <div class="mt-2 mb-1">
              <input type="checkbox" name="" id="" />
              <label for="">Intermediate Level</label>
            </div>
            <div class="">
              <input type="checkbox" name="" id="" />
              <label for="">Advanced Level</label>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <label for=""
            >Are these position onsite or Remote?<span
              class="text-red-500 font-bold">*</span
            ></label
          >
          <div class="mt-2 mb-1">
            <input type="checkbox" name="" id="" />
            <label for="">Onsite</label>
          </div>
          <div class="">
            <input type="checkbox" name="" id="" />
            <label for="">Remote</label>
          </div>
        </div>

        <div>
          <label for="" class="block mb-2"
            >What's your budget?<span class="text-red-500 font-bold">*</span
            ></label
          >
          <div class="flex items-center">
            <select
              id="currency"
              bind:value={currency}
              class="border rounded-l p-[10px] w-1/3"
            >
              <option value="">Select Currency</option>
              {#each currencies as currencyOption}
                <option value={currencyOption.code}
                  >{currencyOption.symbol} {currencyOption.code}</option
                >
              {/each}
            </select>
            <input
              type="number"
              id="amount"
              bind:value={amount}
              class="border rounded-r p-2 w-2/3"
              placeholder="Enter amount"
              min="0"
            />
          </div>
          {#if errors.amount}<p class="text-red-500">{errors.amount}</p>{/if}
          {#if errors.currency}<p class="text-red-500">
              {errors.currency}
            </p>{/if}
        </div>

        <div>
          <label for="message" class="block"
            >Additional Information about role you're look to hire?<span
              class="text-red-500 font-bold">*</span
            ></label
          >
          <textarea
            id="message"
            bind:value={message}
            class="border rounded p-2 w-full"
          ></textarea>
          {#if errors.message}<p class="text-red-500">{errors.message}</p>{/if}
        </div>

        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  </div>

  <Modal {showModal} onClose={closeModal} />
  <!-- Include the modal here -->
</main>

<style>
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
</style>

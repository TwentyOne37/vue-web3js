<template>
  <div>
    <button @click="getRegistrationFeeUsd">Get Registration Fee</button>
    <button @click="getMerchantData(1)">Get Merchant Data</button>
    <!-- assuming 1 is a valid merchantId -->
    <div v-for="method in contractMethods" :key="method" class="method">
      {{ method }}
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { MERCHANT_REGISTRY_ABI, MERCHANT_REGISTRY_ADDRESS } from "../config";

let provider;
let contract;

export default {
  data: function () {
    return {
      contractMethods: [],
    };
  },
  created: async function () {
    // Modern dapp browsers...
    if (window.ethereum) {
      try {
        provider = new ethers.BrowserProvider(window.ethereum);
        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
        const contractAddress = MERCHANT_REGISTRY_ADDRESS;
        const contractAbi = MERCHANT_REGISTRY_ABI[0].abi;
        contract = new ethers.Contract(contractAddress, contractAbi, provider);
        console.log(contract); // Add this line

        // Extract function names from the ABI
        contractAbi.forEach((item) => {
          if (item.type === "function") {
            this.contractMethods.push(item.name);
          }
        });
      } catch (error) {
        console.error("Failed to enable ethereum or create contract:", error);
      }
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  },
  methods: {
    getRegistrationFeeUsd: async function () {
      try {
        const registrationFeeUsd = await contract.registrationFeeUsd;
        console.log("Registration Fee USD:", registrationFeeUsd.toString());
      } catch (error) {
        console.error("Fetching registration fee failed:", error);
      }
    },
    getMerchantData: async function (merchantId) {
      try {
        const merchantData = await contract.merchants(merchantId);
        console.log("Merchant Data:", merchantData);
      } catch (error) {
        console.error("Fetching merchant data failed:", error);
      }
    },
  },
};
</script>

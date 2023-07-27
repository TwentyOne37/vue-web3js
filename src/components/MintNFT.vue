<template>
  <div>
    <input v-model="merchantId" placeholder="Merchant ID" type="number" />
    <input v-model="merchantAddress" placeholder="Merchant Address" />
    <input v-model="merchantName" placeholder="Merchant Name" />
    <input v-model="latitude" placeholder="Latitude" type="number" />
    <input v-model="longitude" placeholder="Longitude" type="number" />
    <input v-model="physicalAddress" placeholder="Physical Address" />
    <input v-model="category" placeholder="Category" type="number" />
    <button @click="mint">Mint</button>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { MERCHANT_REGISTRY_ABI, MERCHANT_REGISTRY_ADDRESS } from "../config";
import { RelayProvider, wrapContract } from "@opengsn/provider";

let provider;
let contract;

const contractAddress = MERCHANT_REGISTRY_ADDRESS;
const contractAbi = MERCHANT_REGISTRY_ABI[0].abi;

export default {
  data() {
    return {
      merchantId: "",
      merchantAddress: "",
      merchantName: "",
      latitude: "",
      longitude: "",
      physicalAddress: "",
      category: "",
    };
  },
  created: async function () {
    if (window.ethereum) {
      try {
        const gsnConfig = {
          paymasterAddress: "0x3BFE9d8CDA5B3cA161720cD47d3EE56c061d30fD",
          forwarderAddress: "0x19cAC08A8f200e2eB89D5A41F9243793D77E2deb",
        };
        const gsnProvider = await RelayProvider.newProvider({
          provider: window.ethereum,
          config: gsnConfig,
        });
        await gsnProvider.init();
        provider = new ethers.getDefaultProvider(gsnProvider);

        await window.ethereum.enable(); // Request account access
        const merchantRegistryContract = new ethers.Contract(
          contractAddress,
          contractAbi,
          await provider.getSigner()
        );

        contract = await wrapContract(merchantRegistryContract, gsnConfig);
      } catch (error) {
        console.error("Failed to enable ethereum or create contract:", error);
      }
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  },
  methods: {
    mint: async function () {
      const merchant = [
        parseInt(this.merchantId),
        this.merchantAddress,
        this.merchantName,
        parseInt(this.latitude),
        parseInt(this.longitude),
        this.physicalAddress,
        parseInt(this.category),
      ];
      try {
        // const signer = await provider.getSigner();
        const tokenAddress = ethers.ZeroAddress; // ETH
        const tx = await contract.mint(merchant, tokenAddress, {
          value: ethers.parseEther("0.1"),
        });
        await tx.wait(); // Wait for transaction to be mined
      } catch (error) {
        console.error("Minting failed:", error);
      }
    },
  },
};
</script>

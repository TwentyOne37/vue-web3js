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
import Web3 from "web3";
import { MERCHANT_REGISTRY_ABI, MERCHANT_REGISTRY_ADDRESS } from "../config";

const web3 = new Web3(window.ethereum);
const contractAddress = MERCHANT_REGISTRY_ADDRESS;
const contractAbi = MERCHANT_REGISTRY_ABI;
const tokenAddress = "0x0000000000000000000000000000000000000000"; // ETH

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
  methods: {
    mint: async function () {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      const merchant = {
        id: parseInt(this.merchantId),
        merchantAddress: this.merchantAddress,
        name: this.merchantName,
        latitude: parseInt(this.latitude),
        longitude: parseInt(this.longitude),
        physicalAddress: this.physicalAddress,
        category: parseInt(this.category),
      };
      try {
        await contract.methods.mint(merchant, tokenAddress).send({
          from: accounts[0],
          value: web3.utils.toWei("0.01", "ether"),
        });
      } catch (error) {
        console.error("Minting failed:", error);
      }
    },
  },
};
</script>

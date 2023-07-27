<template>
  <div>
    <button @click="connectWallet" v-if="!address">Connect Wallet</button>
    <div v-if="address">
      <p>Connected Address: {{ address }}</p>
      <p>ETH Balance: {{ ethBalance }}</p>
      <p>USDC Balance: {{ usdcBalance }}</p>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { USDC_ABI, USDC_ADDRESS } from "../config";

let provider;
let usdcContract;

export default {
  data() {
    return {
      address: "",
      ethBalance: "",
      usdcBalance: "",
    };
  },
  methods: {
    connectWallet: async function () {
      // Modern dapp browsers...
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.enable();
          provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          this.address = await signer.getAddress();

          // Get ETH Balance
          const balance = await provider.getBalance(this.address);
          this.ethBalance = ethers.formatEther(balance);

          // Get USDC Balance
          usdcContract = new ethers.Contract(USDC_ADDRESS, USDC_ABI, signer);
          const usdcBalance = await usdcContract.balanceOf(this.address);
          this.usdcBalance = ethers.formatUnits(usdcBalance, 6); // USDC has 6 decimals
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      }
      // Non-dapp browsers...
      else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },
  },
};
</script>

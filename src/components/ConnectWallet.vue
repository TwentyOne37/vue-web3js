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
import Web3 from "web3";
import BigNumber from "bignumber.js";
import { USDC_ABI, USDC_ADDRESS } from "../config";

const web3 = new Web3(window.ethereum);
const usdcContractAddress = USDC_ADDRESS;
const usdcContractAbi = USDC_ABI;

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
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.address = accounts[0];
      this.ethBalance = new BigNumber(await web3.eth.getBalance(this.address))
        .div(1e18)
        .toString();
      const usdcContract = new web3.eth.Contract(
        usdcContractAbi,
        usdcContractAddress
      );
      this.usdcBalance = new BigNumber(
        await usdcContract.methods.balanceOf(this.address).call()
      )
        .div(1e6)
        .toString();
    },
  },
};
</script>

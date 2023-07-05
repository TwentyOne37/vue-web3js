<template>
  <div id="app">
    <ConnectWallet />
    <ContractInfo />
    <MintNFT />
  </div>
</template>

<script>
import ContractInfo from "./components/ContractInfo.vue";
import ConnectWallet from "./components/ConnectWallet.vue";

export default {
  name: "App",
  components: {
    ConnectWallet,
    // MintNFT,
    ContractInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

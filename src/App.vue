<template>
  <div id="app" class="window">
    <div class="title-bar">
      <div class="title-bar-text">My App</div>
    </div>
    <div class="window-body">
      <ConnectWallet />
      <ContractInfo />
      <MintNFT />
    </div>
  </div>
</template>

<script>
import ContractInfo from "./components/ContractInfo.vue";
import ConnectWallet from "./components/ConnectWallet.vue";
import MintNFT from "./components/MintNFT.vue";

export default {
  name: "App",
  components: {
    ConnectWallet,
    MintNFT,
    ContractInfo,
  },
};
</script>

<style>
@import "98.css";

body {
  margin: 0;
  background-color: #008080; /* Windows 95 teal */
}

#app {
  font-family: "ms_sans_serif";
  font-size: large;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #008080;
  box-sizing: border-box;
}

.window {
  background-color: #c0c0c0 !important; /* Gray window */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  width: 90%; /* Adjust this value according to your preference */
  max-width: none; /* Removes maximum width restriction */
}

.title-bar {
  background-color: #000080; /* Windows 95 navy blue */
  color: #ffffff; /* white text */
  padding: 5px;
  text-align: center;
  width: 100%;
}

.window-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
}

.field {
  flex-direction: column !important;
}
</style>

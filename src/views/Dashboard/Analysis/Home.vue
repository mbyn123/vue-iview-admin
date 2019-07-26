<template>
  <div>
    <AggregateData />
    <StoreData />
    <SearchData />
    <PercentData />
  </div>
</template>

<script>
import AggregateData from "./AggregateData";
import StoreData from "./StoreData";
import SearchData from "./SearchData.vue";
import PercentData from "./PercentData.vue";

export default {
  components: {
    AggregateData,
    StoreData,
    SearchData,
    PercentData
  }
};
</script>

<style>
</style>

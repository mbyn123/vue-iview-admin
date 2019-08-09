<template>
  <div>
    <Row>
      <Col span="24">
        <div style="height:100vh">
          <vue-wangeditor id="editor" width="100%"></vue-wangeditor>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import vueWangeditor from "vue-wangeditor";
export default {
  components: {
    vueWangeditor
  }
};
</script>

<style scoped>
</style>
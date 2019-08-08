<template>
  <div>
    <div class="start">
      <div class="in">
        <div class="picture">
          <img src="http://pt1mv9q6v.bkt.clouddn.com/403.png" alt />
        </div>
        <div class="num">403</div>
        <div class="hint">抱歉，你无权访问该页面。</div>
        <div class="but">
          <Button type="primary">返回首页</Button>
        </div>
      </div>
    </div>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
      <input type="text">
      <input type="text">
      <input type="text">
    </Modal>
  </div>
  
</template>

<script scoped>
export default {
          data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
 
};
</script>

<style scoped>
.start {
  min-height: 100vh;
  padding: 50px;
  margin: -18px -20px;
  background: rgb(240, 242, 245);
}

.start .in .picture {
  text-align: center;
  padding: 20px 0 6px 0;
}

.start .in .num {
  font-size: 24px;
  color: #333;
  text-align: center;
}

.start .in .hint {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  margin-bottom: 40px;
}
.start .in .but {
  text-align: center;
}
</style>
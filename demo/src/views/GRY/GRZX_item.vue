<template>
    <div>

            <div class="tdS">
                <div class="inS">
                    <div class="topS">
                        <span>团队</span>
                    </div>
                    <div>
                        <Row>
                            <Col span="12" v-for="(td,index) in tdarr" :key="index">
                                <div class="innerS">
                                    <a href="#">
                    <span class="imgs">
                      <img :src="td.img" alt />
                    </span>
                                        <span class="mz">{{td.title}}</span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tdarr: [
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/fpng.png",
                        title: "科学搬砖组"
                    },
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/opng.png",
                        title: "全组都是吴彦祖"
                    },
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/p.png",
                        title: "中二少女团"
                    },
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/zfb.png",
                        title: "程序员日常"
                    },
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/z.png",
                        title: "高逼格设计天团"
                    },
                    {
                        img: "http://pt1mv9q6v.bkt.clouddn.com/spng.png",
                        title: "骗你来学计算机"
                    }
                ]
            };
        }
    };
</script>

<style>
    .tdS {
        padding-bottom: 40px;
    }
    .tdS .inS {
        background: white;
    }
    .tdS .inS .topS {

        padding: 30px 25px 0 25px;
        font-size: 14px;
        color: black;
    }

    .tdS .inS .innerS {
        padding: 0 16px;
    }

    .tdS .inS .innerS a {
        display: block;
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .tdS .inS .innerS a:hover .mz {
        color: #2d8cf0;
    }

    .tdS .inS .innerS .imgs {
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-right: 10px;
    }
    .tdS .inS .innerS .imgs img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .tdS .inS .innerS .mz {
        color: black;
        font-size: 14px;
        display: inline-block;
    }
</style>
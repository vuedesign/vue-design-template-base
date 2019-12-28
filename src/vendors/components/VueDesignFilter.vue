<template>
    <div class="vue-design-filter">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vue-design-filter'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .vue-design-filter{
        margin-bottom: 20px;
        background-color: #eef5f97a;
        padding: 0 5px 5px 5px;
        &:after{
            content: '';
            display: block;
            width: 100%;
            height: 0;
            clear: both;
        }
        ul{
            li{
                float: left;
                margin-left: 5px;
                &:first-child{
                    margin-left: 0;
                }
                margin-top: 5px;
            }
            &.left{
                float: left;
            }
            &.right{
                float: right;
            }
        }
    }
</style>

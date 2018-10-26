<template>
    <div class="vued-header">
        <div class="vued-logo">
            <h1>logo</h1>
        </div>
        <vued-breadcrumb slot="breadcrumb"></vued-breadcrumb>
        <div class="vued-header-right">
            <ul class="vued-header-nav">
                <li
                    v-for="(item, index) in headerLeftNav"
                    :index="item.name"
                    :key="index"
                >
                    <i :class="item.icon"></i><span>{{ item.label }}</span>
                </li>
            </ul>
            <div class="vued-avatar">
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import headerLeftNav from '@/configs/headerLeftNav';
import VuedBreadcrumb from '@/components/servers/VuedBreadcrumb';
export default {
    components: {
        VuedBreadcrumb
    },
    data() {
        return {
            headerNavActive: 'users',
            headerLeftNav
        };
    },
    methods: {
        handleSelect() {

        }
    }
};
</script>

<style lang="scss">
    .vued-header{
        height: 100%;
        // background-color: #409EFF;
        background-color: #fff;
        // box-shadow: 0 1px 1px rgba(0,0,0,.1);
        border-bottom: 1px solid #ddd;
    }
    .vued-logo{
        height: 100%;
        float: left;
        text-align: center;
        min-width: 200px;
        h1{
            display: inline-block;
            font-size: 20px;
            padding: 10px 20px 0 20px;
            color: #333;
            font-weight: 700;
        }
    }
    .vued-header-right{
        float: right;
    }
    .vued-header-nav{
        float: left;
        line-height: 46px;
        height: 46px;
        li{
            cursor: pointer;
        }
        i,
        span{
            display: inline-block;
            vertical-align: middle;
        }
        span{
            margin-left: 3px;
        }
    }
    .vued-avatar{
        float: left;
        margin-left: 20px;
        padding: 10px;
        span{
            display: block;
            width: 28px;
            height: 28px;
            background-color: #ddd;
            border-radius: 50%;
            cursor: pointer;
        }
    }
</style>

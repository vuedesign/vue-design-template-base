<template>
    <div class="vued-header">
        <div class="vued-logo">
            <h1 @click="handleLogo">VueDesign Admin</h1>
        </div>
        <div class="vued-header-left">
            <vued-breadcrumb slot="breadcrumb"></vued-breadcrumb>
        </div>
        <div class="vued-header-right">
            <ul class="vued-header-nav">
                <li
                    v-for="(item, index) in headerMenu"
                    v-if="item.type !== 'MORE'"
                    :index="item.name"
                    :key="index"
                    @click="handleHeaderNav(item, index)"
                >
                    <el-tooltip class="item" effect="dark" :content="item.label" placement="bottom">
                        <span class="menu-btn"><vued-iconfont :type="item.icon"></vued-iconfont></span>
                    </el-tooltip>
                </li>
                <li>
                    <el-popover
                        placement="bottom"
                        width="200"
                        trigger="click">
                        <div class="vued-header-right-more">
                            <dl v-for="(item, index) in headerMenu"
                                v-if="item.type === 'MORE'"
                                :key="index"
                            >
                                <dt><vued-iconfont :type="item.icon" /></dt>
                                <dd>{{ item.label }}</dd>
                            </dl>
                        </div>
                        <span class="menu-btn" slot="reference"><vued-iconfont type="menu-more"></vued-iconfont></span>
                    </el-popover>
                </li>
                <li>
                    <el-popover
                        placement="bottom"
                        title="消息"
                        width="200"
                        trigger="click"
                        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                        <span class="menu-btn" slot="reference"><vued-iconfont type="message"></vued-iconfont></span>
                    </el-popover>
                </li>
            </ul>
            <div class="vued-user">
                <el-popover
                    placement="bottom"
                    width="240"
                    trigger="click"
                >
                    <span class="avatar" slot="reference"></span>
                    <div class="vued-user-popover">
                        <dl>
                            <dt><span class="avatar-big"></span></dt>
                            <dd>
                                <h4>wujian</h4>
                                <p>wujian@aaa.cn</p>
                            </dd>
                        </dl>
                        <ul>
                            <li class="setting" @click="handleSetting">
                                <vued-iconfont type="setting" />
                                <span>设置</span>
                            </li>
                            <li class="exit" @click="handleExit">
                                <vued-iconfont type="exit" />
                                <span>退出</span>
                            </li>
                        </ul>
                    </div>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script>
import headerMenu from '@/configs/headerMenu';
import VuedBreadcrumb from '@/modules/global/components/servers/VuedBreadcrumb';

export default {
    name: 'vued-header',
    components: { VuedBreadcrumb },
    data() {
        return {
            headerMenu
        };
    },
    methods: {
        handleExit() {
            this.$message(`click exit`);
        },
        handleSetting() {
            this.$message(`click setting`);
        },
        handleLogo() {
            this.$router.push({
                path: '/'
            });
        },
        handleHeaderNav(item, index) {
            this.$message(`click on item ${JSON.stringify(item)}`);
        }
    }
};
</script>

<style lang="scss">
    @import "~styles/variables.scss";
    .vued-header{
        height: 100%;
        background-color: #409EFF;
    }
    .vued-logo{
        height: 100%;
        float: left;
        text-align: center;
        min-width: 200px;
        h1{
            margin: 0;
            display: inline-block;
            font-size: 20px;
            padding: 9px 16px 0 16px;
            color: #fff;
            font-weight: 700;
            cursor: pointer;
        }
    }
    .vued-header-nav,
    .vued-header-left ul{
        float: left;
        line-height: $header-bar-size;
        height: $header-bar-size;
        li{
            cursor: pointer;
            float: left;
            padding: 0 11px;
        }
    }
    .vued-user{
        float: right;
        margin-left: 10px;
        padding: 6px 6px 6px 16px;
        cursor: pointer;
        > span{
            display: block;
            height: 24px;
            line-height: 24px;
        };
        .avatar{
            display: block;
            vertical-align: middle;
            width: 28px;
            height: 28px;
            background-color: #ddd;
            border-radius: 50%;
            cursor: pointer;
        }
        .name{
            height: 24px;
            line-height: 24px;
            color: #fff;
            margin-left: 4px;
        }
    }
    .vued-user-popover{
        dl,
        ul{
            &:after{
                content: '';
                display: block;
                clear: both;
                width: 100%;
                height: 0;
            }
        }
        dt{
            float: left;
            margin-right: 10px;
            .avatar-big{
                display: block;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-color: #eee;
            }
        }
        dd{
            h4{
                font-size: 18px;
            }
            p{
                color: #999;
            }
        }
        ul{
            padding-top: 10px;
            border-top: 1px solid #f9f9f9;
            margin-top: 10px;
        }
        li{
            float: left;
            cursor: pointer;
            i,
            span{
                display: inline-block;
                vertical-align: middle;
                color: #999;
            }
            &:hover{
                i,
                span{
                    color: #409EFF;
                }
            }
            &.exit{
                float: right;
            }
            &.setting{
                float: left;
            }
        }
    }
    .vued-header-right-more{
        &:after{
            content: '';
            display: block;
            width: 100%;
            height: 0;
            clear: both;
        }
        dl{
            width: 50%;
            float: left;
            cursor: pointer;
            text-align: center;
            border: 1px solid transparent;
            padding: 10px 0;
            border-radius: 3px;
            &:hover{
                border: 1px solid #eee;
            }
        }
        dt{
            i.iconfont{
                font-size: 32px;
            }
        }
    }
    .vued-header-right{
        float: right;
        line-height: 48px;
        height: 48px;
        li{
            float: left;
            padding: 0 11px;
            span.menu-btn{
                cursor: pointer;
                display: inline-block;
                vertical-align: middle;
                width: 26px;
                height: 26px;
                line-height: 26px;
                border-radius: 50%;
                text-align: center;
                margin-left: 0;
                & > i{
                    display: block;
                    vertical-align: middle;
                    color: #fff;
                }
                &:hover{
                    background-color: #2c8eff;
                }
            }
        }
    }
    .vued-header-left{
        float: left;
    }
</style>

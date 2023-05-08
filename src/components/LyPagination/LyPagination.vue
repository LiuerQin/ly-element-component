<template>
    <div class="ly-pagination">
        <el-pagination
        v-model:currentPage="paginationData.pageNum"
        v-model:pageSize="paginationData.pageSize"
        :background="background"
        :layout="layout"  
        :total="total" 
        :paper-count="paperCount"
        :page-sizes="pageSizes"  
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const props = defineProps({
    // 当前页
    page: {
        type: Number,
        default:1,
    },
    size: {
        type: Number,
        default: 10,
    },
    // 是否为分页按钮添加背景色
    background: {
        type: Boolean,
        default: false,
    },
    // 组件布局
    layout: {
        type: String,
        default: "total, sizes, prev, pager, next, jumper",
    },
    // 设置最大页码按钮数，超过该值页码按钮会折叠
    paperCount: {
        type: Number,
        default: 6,
    },
    // 总条数
    total: {
        type: Number,
        required: true
    },
    // 每页显示个数选择器的选项设置
    pageSizes: {
        type: Array,
        default: () => [10, 20, 30, 40, 50, 100]
    }
})
let paginationData = reactive({
    pageNum: props.page,
    pageSize: props.size
})
const emits = defineEmits(["update:pageSize", "update:pageNum", "change"])
function handleSizeChange (e: number) {
    emits("update:pageSize", e)
    emits("change", paginationData)
}
function handleCurrentChange (e: number) {
    emits("update:pageNum", e)
    emits("change", paginationData)
}
</script>

<style lang="scss" scoped>
.ly-pagination {
    float: right;
    margin-top: 10px;
}
</style>
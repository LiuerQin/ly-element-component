<template>
    <div class="pagination">
        <ly-pagination
            v-model:pageNum="paginationData.pageNum"
            v-model:pageSize="paginationData.pageSize" 
            :total="paginationData.total"
            @change="getList"
            ></ly-pagination>
    </div>
</template>

<script setup lang="ts">
import LyPagination from 'components/LyPagination/LyPagination.vue';
import { reactive } from "vue";

// 表格数据
let tableData = reactive([]);
// 分页数据
const paginationData = reactive({
  total: 100,
  pageNum: 1,
  pageSize: 10,
});
// 查找数据
async function getList() {
  // 清空数据
  tableData.length = 0;
  console.log("tableData1:", tableData);

  // 判断是否有对象，没有的话就自动弄
//   let res = await http.getList({
//     ...refPenkSearch.value.queryObj,
//     pageNum: paginationData.pageNum,
//     pageSize: paginationData.pageSize,
//   });
//   tableData.push(...res.rows);
//   paginationData.total = res.count;

  console.log("tableData:", tableData);
}


</script>

<style scoped>
/* .pagination { */
    /* width: 800px; */
/* } */
</style>
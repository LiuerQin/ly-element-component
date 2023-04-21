<template>
    <el-table>
        <template v-for="item in columns" :key="item.prop">
            <ly-table-column v-bind="item"></ly-table-column>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { ColumnProps } from "./types"
import LyTableColumn from "./LyTableColumn"

interface Props {
    columns: ColumnProps[]
}

const props = defineProps<Props>()
const columns = ref<ColumnProps[]>(props.columns)

</script>
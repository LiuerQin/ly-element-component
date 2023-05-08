<template>
    <div class="select">
        <ly-select
            v-model:value="selectValue"
            :title-name="selectDate.titleName"
            :options="selectDate.options"
            :multiple="selectDate.multiple"
            :clearable="selectDate.clearable"
            :disabled="selectDate.disabled || false"
            :placeholder="selectDate.placeholder"
            @change="handleChange()"
            
            ></ly-select>
    </div>
</template>

<script setup lang="ts">
import LySelect from 'components/LySelect/LySelect.vue';
import { reactive, ref } from "vue";

// 下拉框数据
const selectDate = reactive({
    titleName: '基地',
    placeholder: '请选择基地',
    multiple: true,
    clearable: true,
    disabled: false,
    options: [
        {
            label: '洛阳',
            value: '200'
        },
        {
            label: '珠海',
            value: '400'
        }
    ]
});
const selectValue = ref('200')
// 查找数据
async function handleChange() {
  console.log(12145163)
}


</script>

<style scoped>
/* .pagination { */
    /* width: 800px; */
/* } */
</style>
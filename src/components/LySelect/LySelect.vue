<template>
    <div class="ly-select">
        <span v-show="titleName" class="titleClass" :style="titleStyle" >{{ props.titleName }}: </span>
        <el-select
        v-model="selectValue" 
        class="selectClass" 
        :style="selectStyle" 
        :title="!props.multiple ? selectTitle : ''" 
        :placeholder="props.placeholder" 
        :clearable="props.clearable" 
        :multiple="props.multiple" 
        :filterable="props.filterable" 
        :collapse-tags="props.collapse" 
        :collapse-tags-tooltip="props.collapse" 
        :scroll-always-on="props.scrollbar" 
        :disabled="props.disabled || false"
        @change="handleChange" 
        >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Multiple, OptionItem, Value } from './type';
type Props = {
    titleName?: string;
    titleMinWidth?: string;
    width?: string;
    value: Value;
    options: OptionItem[];
    placeholder?: string;
    multiple?: Multiple;
    clearable?: boolean;
    collapse?: boolean;
    scrollbar?: boolean;
    filterable?: boolean;
    disabled?: boolean;
};
const props = withDefaults(defineProps<Props>(),{
    titleName: "",
    titleMinWidth: "70px",
    width: "218px",
    placeholder: "请选择",
    multiple: true,
    clearable: true,
    collapse: true,
    scrollbar: false,
    filterable: true,
    disabled: false,
})
const selectTitle = ref("");

const selectValue = computed({
    get:() => props.value,
    set:(val) => {
        emits('update:value', val)
    }
});
const handleChange = (val: Value) => {
    emits("change", val)
    // 单选时，将选中的值赋值给title
    if(!props.multiple) {
        props.options.forEach((item) => {
            if(item.value === val) {
                selectTitle.value = item.label
            }
        })
    }
}
const emits = defineEmits(["update:value", "change"])
const titleStyle = computed(() => `min-width: ${props.titleMinWidth}`)
const selectStyle = computed(() => `width: ${props.width}`)
</script>

<style lang="scss" scoped>
.ly-select {
    display: flex;
    align-items: center;
}

.titleClass {
    text-align: right;
    font-size: 14px;   
    margin-right: 8px;
}
</style>
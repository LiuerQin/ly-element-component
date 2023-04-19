<template>
    <el-form :model="props.modelValue">
        <el-form-item v-for="(item, index) in props.formItems" :key="item.attrs?.label || index" v-bind="item.attrs">
            <component :is="item.component.componentIs" v-bind="item.component.attrs"
                :model-value="props.modelValue[item.attrs.prop]" @update:model-value="handleInput($event, item.attrs.prop)">
            </component>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { LyFormItems, LyFormItem, LyFormData, LyFormDataValueType } from "./types"
// import { watchEffect } from "vue"

interface Props {
    modelValue: LyFormData,
    formItems: LyFormItems
}
const props = defineProps<Props>()

// watchEffect(() => {
//     console.log("form", props.modelValue)
// })

interface Emits {
    (e: "update:modelValue", v: LyFormData): void
}
const emits = defineEmits<Emits>()

const handleChange = (val: LyFormDataValueType, prop: LyFormItem['attrs']['prop']) => {
    const form = cloneDeep(props.modelValue) as LyFormData
    form[prop] = val

    // console.log("change", prop, form)
    emits("update:modelValue", form)
}

const handleInput = (val: LyFormDataValueType, prop: LyFormItem['attrs']['prop']) => {
    handleChange(val, prop)
}

const cloneDeep = (val: LyFormData) => {
    return JSON.parse(JSON.stringify(val))
}

</script>
<template>
    <el-form :model="props.modelValue">
        <el-form-item v-for="(item, index) in props.formItems" :key="item.attrs?.label || index" v-bind="item.attrs">
            <slot :name="item.attrs.prop">
                <template v-if="item.component">
                    <component :is="item.component.render" v-bind="item.component.attrs"
                        :model-value="props.modelValue[item.attrs.prop]"
                        @update:model-value="handleInput($event, item.attrs.prop)">
                    </component>
                </template>
            </slot>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { LyFormItems, LyFormItem, LyFormData, LyFormDataValueType } from "./types"

interface Props {
    modelValue: LyFormData,
    formItems: LyFormItems
}
const props = defineProps<Props>()

interface Emits {
    (e: "update:modelValue", v: LyFormData): void
}
const emits = defineEmits<Emits>()

const handleChange = (val: LyFormDataValueType, prop: LyFormItem['attrs']['prop']) => {
    const form = cloneDeep(props.modelValue) as LyFormData
    form[prop] = val

    emits("update:modelValue", form)
}

const handleInput = (val: LyFormDataValueType, prop: LyFormItem['attrs']['prop']) => {
    handleChange(val, prop)
}

const cloneDeep = (val: LyFormData) => {
    return JSON.parse(JSON.stringify(val))
}

</script>
<template>
    <div class="form-page">
        <ly-form v-model="form" :form-items="formItems" :rules="rules" label-width="100">
            <template #slot1>
                <el-checkbox v-model="form.slot1" label="Option 1" size="large" />
            </template>
        </ly-form>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import LyForm from 'components/LyForm/LyForm.vue'

const form = ref({
    input1: "",
    slot1: true,
    input2: "",
    date: "",
    selector: ""
})
const rules = {
    input1: [{ required: true, trigger: "blur", message: "必填" }]
}

const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
}

const formItems = [{
    attrs: {
        label: "输入框1",
        prop: "input1"
    },
    component: {
        render: "el-input",
        attrs: {
            size: "small",
        }
    }
}, {
    attrs: {
        label: "输入框1",
        prop: "slot1"
    },
}, {
    attrs: {
        label: "输入框2",
        prop: "input2"
    },
    component: {
        render: "el-input",
    }
}, {
    attrs: {
        label: "日期",
        prop: "date"
    },
    component: {
        render: "el-date-picker",
        attrs: {
            type: "date",
            disabledDate
        }
    }
}]

watch(form, () => {
    console.log("form page", form.value)
}, {
    deep: true
})

</script>

<style scoped>
.form-page {
    width: 800px;
}
</style>
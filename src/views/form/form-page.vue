<template>
    <div class="form-page">
        <ly-form v-model="form" :form-items="formItems" :rules="rules" label-width="100"></ly-form>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"
import LyForm from 'components/LyForm/LyForm.vue'

const form = ref({
    input1: "",
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
        componentIs: "el-input",
        attrs: {
            size: "small",
        }
    }
}, {
    attrs: {
        label: "输入框2",
        prop: "input2"
    },
    component: {
        componentIs: "el-input",
    }
}, {
    attrs: {
        label: "日期",
        prop: "date"
    },
    component: {
        componentIs: "el-date-picker",
        attrs: {
            type: "date",
            disabledDate
        }
    }
}]

watchEffect(() => {
    console.log("form page", form.value)
})

</script>

<style scoped>
.form-page {
    width: 800px;
}
</style>
<template>
    <ly-table :data="data" :columns="columns"></ly-table>
</template>

<script lang="tsx" setup>
import LyTable from "components/LyTable/LyTable.vue"
import { ColumnProps } from "components/LyTable/types"
import { ElMessage } from "element-plus"



// 自定义渲染表头（使用tsx语法）
const headerRender = (row: ColumnProps) => {
    return (
        <el-button
            type="primary"
        >
            {row.label}
        </el-button>
    );
};

const columns = [{
    prop: "base",
    label: "基本信息",
    headerRender,
    _children: [
        { prop: "username", label: "用户姓名", width: 110 },
        { prop: "user.detail.age", label: "年龄", width: 100 },
        {
            prop: "gender",
            label: "性别",
            width: 100,
            // enum: getUserGender,
            // fieldNames: { label: "genderLabel", value: "genderValue" }
        },
        {
            prop: "details",
            label: "详细资料",
            _children: [
                { prop: "idCard", label: "身份证号" },
                { prop: "email", label: "邮箱" },
                { prop: "address", label: "居住地址" }
            ]
        }
    ]
},
{
    prop: "status",
    label: "用户状态",
    tag: true,
    // enum: getUserStatus,
    // fieldNames: { label: "userLabel", value: "userStatus" }
},
{ prop: "createTime", label: "创建时间", width: 200 },
{ prop: "operation", label: "操作", fixed: "right", width: 230 }]
const data = [{

}]
</script>
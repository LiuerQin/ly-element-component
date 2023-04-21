import { ColumnProps } from "./types";
import { useSlots } from "vue";

const renderCellData = (props: ColumnProps, scope: any) => {
  const prop = props.prop || "";
  const valueKey = getSlotName(prop);
  console.log("valueKey", valueKey);
  return scope.row[valueKey] ?? "--";
};

const getSlotName = (prop: string) => {
  const propArr = prop.split(".");
  return propArr[propArr.length - 1];
};

export default function LyTableColumn(props: ColumnProps) {
  const slots = useSlots();
  return (
    <el-table-column {...props}>
      {{
        default: (scope: any) => {
          if (props.children && props.children.length > 0)
            return props.children.map((item) => LyTableColumn(item));
          if (props.render) return props.render(scope);
          if (props.prop && slots[props.prop]) return slots[props.prop]!(scope);
          return renderCellData(props, scope);
        },
        header: (scope: any) => {
          if (props.renderHeader) return props.renderHeader(scope);
        }
      }}
    </el-table-column>
  );
}

import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";

export interface ColumnProps<T = any>
  extends Partial<Omit<TableColumnCtx<T>, "children" | "renderCell">> {
  //   renderHeader?: (columnProps: ColumnProps) => any; // 自定义表头内容渲染（tsx语法）
  render?: (scope: { row: T }) => any; // 自定义单元格内容渲染（tsx语法）
  children?: ColumnProps<T>[]; // 多级表头
}

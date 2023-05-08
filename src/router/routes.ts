export default [
  {
    path: "/",
    component: () => import("@/layout/LayoutIndex.vue"),
    children: [
      { path: "/form", component: () => import("@/views/form/form-page.vue") },
      { path: "/pagination", component: () => import("@/views/pagination/my-pagination.vue")},
      { path: "/select", component: () => import("@/views/select/my-select.vue")}
    ]
  }
];

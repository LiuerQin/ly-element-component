export default [
  {
    path: "/",
    component: () => import("@/layout/LayoutIndex.vue"),
    children: [
      { path: "/form", component: () => import("@/views/form/form-page.vue") },
      {
        path: "/table",
        component: () => import("@/views/table/table-page.vue")
      }
    ]
  }
];

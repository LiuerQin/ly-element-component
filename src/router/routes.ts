export default [
  {
    path: "/",
    component: () => import("@/layout/LayoutIndex.vue"),
    children: [
      { path: "/form", component: () => import("@/views/form/form-page.vue") }
    ]
  }
];

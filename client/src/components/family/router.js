export const Family = [
  {
    path: "/family",
    name: "Family",
    component: () => import("../../views/Family.vue")
  }
];

export const FamilyDetails = [
  {
    path: "/family/:memberId",
    name: "FamilyDetails",
    component: () => import("../../views/FamilyDetails.vue")
  }
];

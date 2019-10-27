const price = 1000;
if (price <= 1000) {
  console.log("Small");
} else if (price > 1000 && price < 5000) {
  console.log("Medium");
} else {
  console.log("Large");
}

const status = "pending";
switch (status) {
  case "pending":
    console.log("Pending");
    break;
  case "approved":
    console.log("Approved");
    break;
  default:
    console.log("Unknown");
    break;
}

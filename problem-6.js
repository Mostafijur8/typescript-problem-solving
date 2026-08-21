"use strict";
function canEdit(role) {
    if (role === "admin" || role === "editor") {
        return true;
    }
    return false;
}
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));

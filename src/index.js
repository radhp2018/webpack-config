import "./styles/index.scss";

const patilFamily = {
    members: 4,
    firstName: "Rahul",
    lastName: "patil"
};

const patilFamilyNewMember = {
    ...patilFamily,
    members: 5,
    fullName: "Rahul D. Patil"
}

console.log(patilFamilyNewMember)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Biya",
    lastName: "Damtew",
    age: 21,
    location: "Addis Ababa"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Addis Ababa"
};

//put them in the an array
const studentsList: Student[] = [student1, student2];

//create a table and append a new row
const table: HTMLTableElement = document.createElement("table");

// Create table header
const headerRow: HTMLTableRowElement = table.insertRow();
const headerFirstName: HTMLTableCellElement = headerRow.insertCell();
headerFirstName.textContent = "First Name";
const headerLocation: HTMLTableCellElement = headerRow.insertCell();
headerLocation.textContent = "Location";

// Loop through studentsList and add rows
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});

// 5. Append the table to the body
document.body.appendChild(table);
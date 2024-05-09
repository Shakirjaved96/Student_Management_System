import inquirer from 'inquirer';

class Student {
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.courses = [];
    this.balance = 2400;
  }

  enrollCourse(course: string) {
    this.courses.push(course);
  }

  viewBalance() {
    console.log(`Balance for ${this.name}: $${this.balance}`);
  }

  payTuition(amount: number) {
    this.balance -= amount;
    console.log(`Payment of $${amount} received from ${this.name}.`);
  }

  showStatus() {
    console.log(`Student ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
    console.log(`Balance: $${this.balance}`);
  }
}

class StudentManager {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudent(id: number, name: string) {
    const student = new Student(id, name);
    this.students.push(student);
  }

  enrollStudent(id: number, course: string) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      student.enrollCourse(course);
      console.log(`${id} enrolled in ${course} successfully.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  viewStudentBalance(id: number) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      student.viewBalance();
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  payStudentTuition(id: number, amount: number) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      student.payTuition(amount);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  showStudentStatus(id: number) {
    const student = this.students.find(student => student.id === id);
    if (student) {
      student.showStatus();
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  viewAllStudents() {
    if (this.students.length === 0) {
      console.log("No students in the system.");
    } else {
      console.log("Students in the system:");
      this.students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} (ID: ${student.id})`);
        console.log(`Courses: ${student.courses.join(", ")}`);
        console.log(`Balance: $${student.balance}`);
        console.log();
      });
    }
  }
}

async function main() {
  const studentManager = new StudentManager();

  // Using inquirer to get student names
  const answers = await inquirer.prompt ([
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID of the first student :',

    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the first student :',

    },
    {
      type: 'input',
      name: 'id2',
      message: 'Enter the ID of the second student :',

    },
    {
      type: 'input',
      name: 'name2',
      message: 'Enter the name of the second student :',
    }
  ])};
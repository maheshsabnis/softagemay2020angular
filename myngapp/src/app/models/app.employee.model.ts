export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptName: string,
    public Salary: number
  ){}
}

export const Employees =[
  {
    EmpNo:101, EmpName: 'A', DeptName: 'IT', Salary:12000
  },
  {
    EmpNo:102, EmpName: 'B', DeptName: 'HR', Salary:11000
  },
  {
    EmpNo:103, EmpName: 'C', DeptName: 'SL', Salary:10000
  }
];

export const Departments = [
  'IT', 'HR', 'SL'
];

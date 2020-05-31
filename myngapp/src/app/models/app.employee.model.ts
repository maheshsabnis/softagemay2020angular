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
  },
  {
    EmpNo:104, EmpName: 'D', DeptName: 'IT', Salary:12000
  },
  {
    EmpNo:105, EmpName: 'E', DeptName: 'HR', Salary:12000
  },
  {
    EmpNo:106, EmpName: 'F', DeptName: 'SL', Salary:12000
  },
];
export const Departments = [
  'IT', 'HR', 'SL'
];



export class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string
  ) {}
}

export const DeptDatabase= [
  {DeptNo: 10, DeptName: 'IT'},
  {DeptNo: 20, DeptName: 'HR'},
  {DeptNo: 30, DeptName: 'SL'}
];


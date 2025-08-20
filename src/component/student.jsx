import Student from './component/student';


function App() {
  return (
    <>
      <Student name="Niharika" age={22}  isStudent={true}/>
      <Student name="Maitri" age={21}  isStudent={false}/>
      <Student name="Khushi" age={23}  isStudent={true}/>
      <Student name="Priya" age={22}  isStudent={false}/>
    </>
  );
}
export default Student;

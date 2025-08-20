import PropTypes from 'prop-types';


function Student(props) {
  console.log(props);  
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
       <p>{props.isStudent}</p>
    </div>
  );
}




Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};
Student.defaultProps={
  name:"Guest",
  age:0,
  isStudent:false,
}

//Default props=default value for props in case they are not passed from the parent component 
// name:guest

export default Student;

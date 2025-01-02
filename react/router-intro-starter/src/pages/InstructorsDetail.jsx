import { useParams , useLocation } from "react-router-dom";


const InstructorsDetail = () => {

    let {id}= useParams();

   let {state , pathname} = useLocation();

  return (
    <div className="p-3">
       <p>

        from useParam: I am instructor {""} <span className="text-danger fw-bolder">{id}</span>
       </p>
       <p>

        from useLocation: I am instructor {""} <span className="text-danger fw-bolder">{state?.name}</span>
       </p>
        <p>our path is: {pathname}</p>
    </div>
  )
}

export default InstructorsDetail

import { useReducer, useState } from "react"

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            throw new Error()
    }
}

export default function UseStateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [count,setCount] = useState(0)

    function handelIncrement() {
        setCount(count + 1)
    }
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          {state.count}
          <br />
          <br />
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "increment" })}
          >
            reducer
          </button>
          <br />
                <br />
          {count}
          <br />
          <br />
          <button
            className="btn btn-primary"
            onClick={handelIncrement}
          >
            use satate
          </button>
        </div>
      </div>
    );
}

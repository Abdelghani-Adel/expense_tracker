import React, { useState } from "react";

// Written as a function declaration
// The return type is ReactNode because it directly return the jsx react node
function Heading(): React.ReactNode {
  return <h1>My Website Heading</h1>;
}

// Written as a function expression
// The return type is FC because it just return the Functional component which returns after that the ReactNode
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>;

// Props
/**
 * always use interface for public API’s definition when authoring a library or 3rd-party ambient type definitions.”
 * “consider using type for your React Component Props and State, because it is more constrained.”
 * Always add descriptive comments to your props using the TSDoc notation
 * Whether you use types or interfaces for your component props, use them consistently.
 * When props are optional, handle appropriately or use default values.
 */
type Props = {
  /** color to use for the background */
  color?: string;
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, color = "tomato", onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

// Hooks
// `value` is inferred as a string
// `setValue` is inferred as (newValue: string) => void
const [value, setValue] = useState("");

type User = {
  email: string;
  id: string;
};

// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);

// useReducer
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload, // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload, // `payload` is number
      };
    default:
      return state;
  }
}
export {};

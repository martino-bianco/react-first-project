export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

// OR:
// export default function TabButton(props) {
//     return (
//       <li>
//         <button>{props.children}</button>
//       </li>
//     );
//   }
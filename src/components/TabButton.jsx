export default function TabButton({ children }) {
  function handleClick() {
    console.log("yoyoyo!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
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

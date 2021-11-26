export default function Button(props) {
   const { setReverse, reverse } = props;
   return (
      <button
         className="button"
         onClick={() => {
            setReverse(!reverse);
         }}
      >
         Reverse
      </button>
   );
}

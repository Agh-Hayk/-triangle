export default function Input(props) {
   const { setCount } = props;
   return (
      <input
         className="input"
         onChange={(e) => {
            setCount(e.target.value);
         }}
         type="number"
      />
   );
}

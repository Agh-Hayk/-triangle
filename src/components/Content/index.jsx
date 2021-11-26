export default function Content(props) {
   const { getArr, reverse } = props;
   return (
      <div className="content">
         {reverse ? <div>{getArr().reverse()}</div> : <div>{getArr()}</div>}
      </div>
   );
}

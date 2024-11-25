const Statistic = ({list}) =>{
    let hlp = list[0] + list[1] + list[2];
    let avrg;
    let positive = list[0]/hlp*100;
  
    avrg = hlp / list.length;
    if(isNaN(positive)){
      return (
        <p>No feedback given</p>
      )
    }else{
      return(
        <div>
          <p>good {list[0]}</p>
          <p>neutral {list[1]}</p>
          <p>bad {list[2]}</p>
          <p>all {hlp}</p>
          <p>average {avrg}</p>
          <p>positive {Math.round(positive)}%</p>
        </div>
      )
    }
}
export default Statistic;
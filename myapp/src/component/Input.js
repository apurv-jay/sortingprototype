import React from 'react';
import './Input.css';
import  {getMergeSortAnimations} from './MergeSort';

export default class Input extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
 CreateRandArray()
{
    const array = [];
    for(let i=0;i<100;i++)
    {
        array.push(Math.floor(Math.random() * (800 - 5 + 1) + 5));
    }
    
    this.setState({array});
}
bubble(array)
{
    const Arrayfun = document.getElementsByClassName('array-bar');
    let i, j;
    for (i = 0; i < 100-1; i++) 
    {   
    for (j = 0; j < 100-i-1; j++)
    {
       
        if(array[j]>array[j+1])
        {
            let temp1=array[j];
            let temp2=array[j+1];
            let great = Arrayfun[j].style;
            let great1 = Arrayfun[j+1].style;
            setTimeout(() => {
                great.backgroundColor = "yellow";
                great1.backgroundColor = "yellow";
                great.height=`${temp2}px`;
                great1.height=`${temp1}px`;
                great.backgroundColor="purple";
              },i*100);
            // setTimeout(()=>{
                
            // },(i)*100);
        }
        // else{
        //     let temp1=array[j];
        //     let tempj2=array[j+1];
        //     let great = Arrayfun[j].style;
        //     let great1 = Arrayfun[j+1].style;
        //     setTimeout(() => {
        //         great.backgroundColor = "black";
        //         great1.backgroundColor = "black";
        //         great.backgroundColor="purple";
        //       },i*100);
        //     // setTimeout(()=>{
                
        //     // },(i)*100);
        // }
       
        if (array[j] > array[j+1])
        {
            let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
            this.setState({array});
        }
       

               
    }
    let cc=0;
        let great3=Arrayfun[99-i].style;
        setTimeout(()=>{
            great3.backgroundColor="green";
        },(i)*100);
        cc=cc+1;
        console.log();
    }
  
}
Merge()
{
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "yellow" : "purple";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
}
Selection(array)
{
    const Arrayfun = document.getElementsByClassName('array-bar');
   for(let i=0;i<100-1;i++)
   {
       for(let j=i+1;j<100;j++)
       {
        if(array[i]>array[j])
        {
            let temp1=array[i];
            let temp2=array[j];
            let great = Arrayfun[i].style;
            let great1 = Arrayfun[j].style;
            setTimeout(() => {
                great.backgroundColor = "yellow";
                great1.backgroundColor = "yellow";
                great.height=`${temp2}px`;
                great1.height=`${temp1}px`;
                great.backgroundColor="purple";
              },i*100);
            if(array[i]>array[j])
            {
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
                this.setState({array});
            }
        }}
        let great3=Arrayfun[i].style;
        setTimeout(()=>{
            great3.backgroundColor="green";
        },(i)*100);

    }
   
}
render(){

    const {array} = this.state;
    return (
        <div>
        <div className="UpperPart">
            <div className="Head">
                <h1>SORTING VISUALIZER</h1>
            </div>
            <div className="Input">
                <br/>              
                <form>
                    <input type="button" value="Generate New Array" onClick={()=>this.CreateRandArray()} className="b1"></input>
                </form>
                <br/>
                <form>
                    <div>
                    <input type="button" value="Merge" className="b1" onClick={()=>this.Merge()}></input>
                    <input type="button" value="Bubble" className="b3" onClick={()=>this.bubble(this.state.array)}></input>
                    <input type="button" value="Selection" onClick={()=>this.Selection(this.state.array)}></input>
                    </div>
                </form>
            </div>
        </div>
        <div className="lower">
            <div>
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                     backgroundColor: "purple",
                    height: `${value}px`,
                }}></div>
            ))}
            </div>

        </div>
        </div>
        

    );
    
}
}

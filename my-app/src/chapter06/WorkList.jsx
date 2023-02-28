import React from "react";
import Work from "./Work";

const reservedWorks = [
    {
        id:1,
        message: "9:00 부터 수업1이 있습니다.",
    },
    {
        id:2,
        message: "12:00 부터 식사 시간 입니다.",
    },
    {
        id:3,
        message: "14:00 부터 수업2이 있습니다.",
    },
    {
        id:4,
        message: "20:00 부터 식사 시간 입니다.",
    },
    {
        id:5,
        message: "22:00 부터 수업2 과제가 있습니다.",
    },
];

var timer;

class WorkList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            works:[],
        };
    }

    componentDidMount(){
        const { works } = this.state;
        timer = setInterval(() => {
            if (works.length < reservedWorks.length) {
                const index = works.length;
                works.push(reservedWorks[index]);
                this.setState({
                    works: works,
                });
            } else {
                this.setState({
                    works: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return(
            <div>
                {this.state.works.map((work) => {
                    return (
                    <Work 
                    key={work.id}
                    id={work.id}
                    message={work.message}/>
                    );
                })}
            </div>
        );
    }
}

export default WorkList;
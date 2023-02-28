import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
        console.log(location);
    }

    render(){
        const{location}=this.props;
        if(location.state){
            return (
                <div style={{paddingTop:'150px'}}>
                    <h3 style={{textAlign:'center'}}>{location.state.title}</h3>
                    <table align={'center'}>
                        <tbody>
                        <tr><td rowSpan={4} width={'200px'}><img src={location.state.thumbnail} alt={location.state.title} title={location.state.title} /> </td>
                        <td width={'200px'}>출판사 : {location.state.publisher}</td></tr>
                        <tr><td>출판일 : {location.state.datetime}</td></tr>
                        <tr><td>가격 : {location.state.price}원</td></tr>
                        <tr><td>저자 <ul className="book_authors">
                        {location.state.authors.map((author, index) => (
                            <li key={index} className="book__authors">{author}</li>
                        ))}
                    </ul></td></tr></tbody>
                    </table>
                    <p className="book__contents">{location.state.contents}...</p>
               </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;
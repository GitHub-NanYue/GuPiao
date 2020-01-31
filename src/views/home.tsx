import React, { Component } from 'react';
import request from '../utils/utils';
import './home.css'
class Gupiao extends Component<any> {
    state={
        list:[]
    }
    render() {
        let {list} = this.state
        console.log(list)
        return (
            <div className="home">
                <ol className="olis">
                    {
                        list.map((item:any,index:any)=>{
                            return <li key={index} className="lis"><div>{item.name}</div><div className="numVery"><span>{item.trade}</span><div className="NumBox" onClick={()=>{}}>{item.pricechange}%</div></div></li>
                        })
                    }
                </ol>
            </div>
        );
    }
    componentDidMount():void{
        let {list} = this.state
        request.get('/finance/stock/shall?stock=&page=&type=&key=fe8ee281e77b3697909846f94e47a68c').then((res:any)=>{
            setTimeout(() => {
                this.setState({
                    list:res.data.result.data
                })
            }, 1000);
        })
    }
}

export default Gupiao;
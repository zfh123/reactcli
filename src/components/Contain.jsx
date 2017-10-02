import React from 'react';
import '../static/css/contain.css'
//首字母大写

class Contain extends React.Component{


    constructor(props){  /*构造函数*/


        super(props);

        this.state={

            msg:'这是header组件里面的数据'
        }

        this.run=this.run.bind(this);  /*改变this的指向*/

    }
    run(){
        
    } 

    render(){
        return(

            <div>
                <div className="contain">contain</div>
            </div>
        )

    }
}


//一个组件就是一个模块   外部要用这个模块的话就得暴露这个模块

export default Contain;
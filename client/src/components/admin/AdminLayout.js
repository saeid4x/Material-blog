import React,{Component} from 'react';
import '../../css/adminLayout.css';
import SendPost from './SendPost';
import ManagePost from './ManagePost';
import {Link} from 'react-router-dom';
 

class AdminLayout extends Component{


    render(){
         return(  
            <div>
                <section id="admin-sec-header">          
                    <section id="admin-sec-header-nav">
                        <nav>
                        <a href="#"> وبلاگ من </a> |
                            <a href="#"> خانه </a> | 
                            <a href="#"> مطالب سایت  </a> |
                            <a href="#"> پروفایل </a> | 
                            <a href="#"> خانه </a> |
                        </nav>
                    </section>
                    <br/>
                    <div>
                        <h1>Saeid4x + Logo</h1>
                    </div>

                </section>
                <hr/>          
               

            </div>
 
         )
    }

}
export default AdminLayout;
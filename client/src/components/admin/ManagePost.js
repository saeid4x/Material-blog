import React, { Component } from "react";
import Navbar from '../Navbar';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import "../../css/ManagePost.css";
import ButtomNavbar from '../BottomNavbar';


class ManagePost extends Component {
  state = {
    postFetched: [],
    updateDate: [],
    orderID: 0
  };
  number = 1;

  componentDidMount() {
    var url = "http://127.0.0.1:8082/admin/managepost";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          postFetched: data
        });
        console.log("url=", window.location.href);
      })
      .catch(err => {
        console.log("Error during Fetch=", err);
      });
  }

  render() {
    var postsData = this.state.postFetched;
    var finalPosts = postsData.length ? (
      postsData.map(item => (
        //******************************************************** */

        <TableRow key={item._id}>
          <TableCell component="th" scope="row">
            <a href={`http://127.0.0.1:8082/admin/delete/${item._id}`}>
              <Button variant="contained" color="secondary">
                حذف
                <DeleteIcon />
              </Button>
            </a>

            <Link to={`/admin/updatepost/${item._id}`}>
              <Button variant="contained" color="primary">
                ویرایش
                <EditIcon />
              </Button>
            </Link>

            <Link to={`/post/${item._id}`}>
              <Button variant="contained" color="default">
                مشاهده
                {/* <i class="material-icons">pageview</i> */}
                <SearchIcon/>
              </Button>
            </Link>
          </TableCell>
          <TableCell align="right"> {item.category}</TableCell>
          <TableCell align="right">{item.title}</TableCell>
          <TableCell align="right">{this.number++}</TableCell>
        </TableRow>
        //*********************************************************************** */
        /* <div className="row managepost" key={item._id}>                 
               <div className="col s3 m3 l3 xl2">
                       <div className="row">                      
                               <Link to={`/admin/updatepost/${item._id}`} className="btn">ویرایش</Link>
                               <a href={`http://127.0.0.1:8082/admin/delete/${item._id}`} className=" btn">حذف</a>                            
                       </div>
                   </div>
                   <div className="col s2 m2 l2 xl2">{item.category}</div>
                   <div className="col s5 m5 l5 xl5">{item.title}</div>
                   <div className="col " >{this.number++}</div>      
                  
               </div> */
      ))
    ) : (
      <div>no posts exist</div>
    );

    return (
      <div>
        <Navbar/>
        <ButtomNavbar/>
        <div className="container">
          <Table className="managepost">
            <TableHead>
              <TableRow>
                <TableCell>
                  <center>عملیات</center>
                </TableCell>
                <TableCell align="right">دسته بندی</TableCell>
                <TableCell align="right">عنوان پست</TableCell>
                <TableCell>ردیف</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{finalPosts}</TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
export default ManagePost;

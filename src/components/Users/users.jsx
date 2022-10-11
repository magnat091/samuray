import React from "react";

import {Paginator} from "../Common/Paginator/paginator";
import User from "./user";


const Users = (props) => {

    return(
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUserCount={props.totalUserCount} pageSize={props.pageSize} />
            <div>
                {
                    props.users.map( (u) => <User user={u}
                                                  followingInProgress={props.followingInProgress}
                                                  key={u.id}
                                                  follow={props.follow}
                                                  unfollow={props.unfollow}
                    />)
                }
            </div>
        </div>
    )

}



export default Users;

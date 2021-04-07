import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
    var elmItems = props.tasks.map((elmItem, index) => {
        console.log(elmItem)
        return <TaskItem key={elmItem.id} index={index} tasks={elmItem} />
    })
    console.log(elmItems)
    console.log(props.tasks)
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td />
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        <select className="form-control">
                            <option value={-1}>Tất Cả</option>
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích Hoạt</option>
                        </select>
                    </td>
                    <td />
                </tr>
                {elmItems}
            </tbody>
        </table>
    );
}

export default TaskList;

import React, { useState } from "react";

function TaskItem(props) {
    return (
        <tr>
                    <td>{props.index + 1}</td>
                    <td>{props.tasks.name}</td>
                    <td className="text-center">
                        <span className={props.tasks.status === true ? "label label-success" : "label label-danger"}>
                        {props.tasks.status === true ? "Kích hoạt" : "Ẩn"}
                        </span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5" />Sửa
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5" />Xóa
                  </button>
                    </td>
                </tr>
    )
}

export default TaskItem;

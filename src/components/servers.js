import React from 'react'
import { Date } from 'prismic-reactjs';

const Servers = ({ servers }) => {
    return (
        <div>
            <center>
                <h3>Server List</h3>
            </center>
            <table style={{border: "3px blue"}} border="1">
                <thead>
                    <tr>
                        <th width="25%">URL</th>
                        <th width="10%">Status</th>
                        <th width="15%">Duration</th>
                        <th>Date Checked</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody border="1">
            {servers.map((server) => (
                    <tr key={server.url.toString()}>
                        <td width="25%">{server.url}</td>
                        <td width="10%">{server.statusCode}</td>
                        <td width="15%">{server.duration / 1000}</td>
                        <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date(server.date))}</td>
                        <td>{server.statusCode === 200 && 
                                <img src="checkmark.png" alt=""></img>
                            }
                        </td>
                    </tr>
            ))}
                </tbody>
            </table>
        </div>
    )
};

export default Servers
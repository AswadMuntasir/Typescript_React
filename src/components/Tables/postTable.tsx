    import React, { useState } from 'react';
    import PostModal from '../Modals/postModal';
    import { Button } from 'react-bootstrap';

    interface TableProps {
    data: {
        id: number;
        title: string;
    }[];
    }

    const Table: React.FC<TableProps> = ({ data }) => {
    const tableStyle = {
        marginTop: '50px',
    };
    const [showModal, setShowModal] = useState(false);

    const handlePost = (postData: { title: string }) => {
        console.log('Posted data:', postData);
    };

    return (
        <div style={tableStyle}>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add Data</Button>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
                ))}
            </tbody>
            </table>
            <PostModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onPost={handlePost}
            />
        </div>
    );
    };

    export default Table;
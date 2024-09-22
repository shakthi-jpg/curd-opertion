import { useState } from "react";

const CURDOPERTON = () => {
    const [name, setName] = useState("");
    const [moblie, setMoblie] = useState("");
    const [edu, setEdu] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    let [userlist, setUser] = useState([]);
    let [userindex, updateIndex] = useState(-1); // default is -1 for adding new users

    const save = () => {
        let newuser = { fullname: name, moblie: moblie, city: city, edu: edu, address: address };

        if (userindex === -1) {
            setUser([...userlist, newuser]); // add new element
        } else {
            userlist[userindex] = newuser; // update existing element
            setUser([...userlist]); // reflect the updated array in state
            updateIndex(-1); // reset to allow adding new values after update
        }

        // Reset form fields
        setName("");
        setMoblie("");
        setEdu("");
        setCity("");
        setAddress("");
    };

    const deluser = (index) => {
        userlist.splice(index, 1); // remove user from array
        setUser([...userlist]);
    };

    const edituser = (user, index) => {
        updateIndex(index); // set index for editing

        setName(user.fullname);
        setMoblie(user.moblie);
        setEdu(user.edu);
        setCity(user.city);
        setAddress(user.address);
    };

    return (
        <section style={styles.section}>
            <h1 style={styles.title}>CRUD Operation: React Input and Output ({userlist.length})</h1>
            <p style={styles.subtitle}>CRUD means Create, Read, Update, Delete</p>

            <table style={styles.formTable}>
                <tbody>
                    <tr>
                        <td>Enter your name</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td>Enter your mobile</td>
                        <td><input type="text" onChange={(e) => setMoblie(e.target.value)} value={moblie} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td>Enter your education</td>
                        <td><input type="text" onChange={(e) => setEdu(e.target.value)} value={edu} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td>Enter your city</td>
                        <td>
                            <select onChange={(e) => setCity(e.target.value)} value={city} style={styles.select}>
                                <option value="">Choose</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="tamil nadu">Tamil Nadu</option>
                                <option value="chennai">Chennai</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter your address</td>
                        <td><textarea onChange={(e) => setAddress(e.target.value)} value={address} style={styles.textarea} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save} style={styles.button}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table style={styles.dataTable}>
                <thead>
                    <tr style={styles.tableHeader}>
                        <th>Sl. No</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Education</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userlist.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.fullname}</td>
                            <td>{user.moblie}</td>
                            <td>{user.edu}</td>
                            <td>{user.city}</td>
                            <td>{user.address}</td>
                            <td><button onClick={() => edituser(user, index)} style={styles.editButton}>Edit</button></td>
                            <td><button onClick={() => deluser(index)} style={styles.deleteButton}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

// Inline CSS Styles
const styles = {
    section: {
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    subtitle: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#666',
    },
    formTable: {
        margin: '0 auto 20px auto',
        borderCollapse: 'collapse',
        width: '60%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
    },
    input: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    select: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    textarea: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        resize: 'vertical',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    dataTable: {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    },
    tableHeader: {
        backgroundColor: '#4CAF50',
        color: 'white',
        marginBottom:'10px'
    },
    editButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default CURDOPERTON;

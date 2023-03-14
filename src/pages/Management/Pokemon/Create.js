import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

const typeArr = [
    {
        id: 1,
        name: "grass"
    },
    {
        id: 2,
        name: "fire"
    },
    {
        id: 3,
        name: "water"
    },
    {
        id: 4,
        name: "poison"
    },
    {
        id: 5,
        name: "bug"
    }
] 

function Create(){
    const [no, setNo] = useState("");
    const [name, setName] = useState("");
    const [mainType, setMainType] = useState("");
    const [subType, setSubType] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [image, setImage] = useState("");
    const [introduce, setIntroduce] = useState("");

    const handleInsert = () => {
        const type = [mainType];
        if(subType !== "") type.push(subType);
        addDoc(collection(db, "pokemon"), {
            no: Number(no),
            name: name,
            type: type,
            weight: Number(weight),
            height: Number(height),
            image: image,
            introduce: introduce
        });
        resetForm();
    }

    const resetForm = () => {
        setNo("");
        setName("");
        setMainType("");
        setSubType("");
        setWeight("");
        setHeight("");
        setImage("");
        setIntroduce("");
    }

    return (
        <div>
            <input type="number" name="no" placeholder="No Pokemon" value={no} onChange={e => setNo(e.target.value)} />
            <br />
            <input type="text" name="name" placeholder="Name Pokemon" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <input type="text" name="image" placeholder="image" value={image} onChange={e => setImage(e.target.value)} />
            <br />
            <select value={mainType} onChange={e => setMainType(e.target.value)}>
                <option value="">main type</option>
                {
                    typeArr.map(type => (
                        <option key={type.id} value={type.name}>
                            {type.name}
                        </option>
                    ))
                }
            </select>
            <br />
            <select value={subType} onChange={e => setSubType(e.target.value)}>
                <option value="">sub type</option>
                {
                    typeArr.map(type => (
                        <option key={type.id} value={type.name}>{type.name}</option>
                    ))
                }
            </select>
            <br />
            <input type="number" name="height" placeholder="height Pokemon" value={height} onChange={e => setHeight(e.target.value)} />
            <br />
            <input type="number" name="weight" placeholder="Weight Pokemon" value={weight} onChange={e => setWeight(e.target.value)} />
            <br />
            <textarea name="introduce" value={introduce} onChange={e => setIntroduce(e.target.value)}></textarea>
            <br />
            <button onClick={() => handleInsert()}>Submit</button>
        </div>
    )
}

export default Create;
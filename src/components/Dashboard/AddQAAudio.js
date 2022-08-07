import React, { useEffect, useState } from 'react';

const AddQAAudio = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/get_qa_categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [categories])


    const newlink = 'https://drive.google.com/file/d/1uIGHYwTDutJqn-WD_5gIsufKpPn_Cfoh/view?usp=sharing';
    const links = newlink.slice(0, -17);
    const linking = links.substring(32);
    const blinking = `https://docs.google.com/uc?export=download&id=${linking}`
    console.log(blinking);

    const handleAddAudio = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const date = e.target.date.value;
        const name = e.target.name.value;
        const place = e.target.place.value;
        const googlelink = e.target.link.value;
        const googlelink2 = googlelink.slice(0, -17);
        const googlelink3 = googlelink2.substring(32);
        const link = `https://docs.google.com/uc?export=download&id=${googlelink3}`


        const description = e.target.description.value;

        const audioData = { date, name, category, place, link, description }

        fetch('http://localhost:5000/addboyans', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(audioData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }
    return (
        <div>
            <h1 className='text-3xl border-b-4 border-accent mt-28 lg:mr-16 inline-block'>একটি নতুন প্রশ্ন-উত্তরের ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-8 ml-16 lg:ml-80'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">বিভাগ বাছাই করুন</span>
                    </label>
                    <select name='category' class="select select-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option>{category.categoryName}</option>)
                        }
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">প্রশ্ন</span>
                    </label>
                    <input name='question' type="text" placeholder="প্রশ্ন লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">ওডিও লিংক</span>
                    </label>
                    <input name='link' type="text" placeholder="ওডিও লিংক" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">বিবরণ</span>
                    </label>
                    <textarea name='description' class="textarea textarea-bordered" placeholder="বিবরণ লিখুন"></textarea>
                </div>

                <button className='btn btn-md btn-accent text-white my-4 rounded-md mr-16 lg:mr-96' type='submit'>প্রশ্ন যোগ করুন</button>
            </form>
        </div>
    );
};

export default AddQAAudio;
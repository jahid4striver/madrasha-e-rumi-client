import React, { useEffect, useState } from 'react';

const AddAudio = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getcategories')
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
            <h1 className='text-3xl border-b-4 border-orange-600 mt-8'>একটি নতুন ওডিও যোগ করুন</h1>
            <form onSubmit={handleAddAudio} className='mt-16'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">তারিখ বাছাই করুন</span>
                    </label>
                    <input name='date' type="date" placeholder="তারিখ" class="input input-bordered w-full max-w-xs" />
                </div>
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
                        <span class="label-text">ওডিও নাম</span>
                    </label>
                    <input name='name' type="text" placeholder="ওডিও নাম" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">বয়ানের স্থান</span>
                    </label>
                    <input name='place' type="text" placeholder="বয়ানের স্থান" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">ওডিও লিংক</span>
                    </label>
                    <input name='link' type="text" placeholder="ওডিও লিংক" class="input input-bordered w-full max-w-xs" />
                </div>
                {/* <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">ডাউনলোড লিংক</span>
                    </label>
                    <input name='category' type="text" placeholder="ডাউনলোড লিংক" class="input input-bordered w-full max-w-xs" />
                </div> */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">বিবরণ</span>
                    </label>
                    <textarea name='description' class="textarea textarea-bordered" placeholder="বিবরণ লিখুন"></textarea>
                </div>

                <button className='btn btn-md btn-accent text-white mt-4 rounded-md' type='submit'>ওডিও যোগ করুন</button>
            </form>

            {/* <div class="overflow-x-auto my-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categories.map((category, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{category.categoryName}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default AddAudio;
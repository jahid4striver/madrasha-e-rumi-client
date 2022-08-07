import React, { useEffect, useState } from 'react';

const AddCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getcategories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [categories])

    const handleAddCategory = (e) => {
        e.preventDefault();
        const categoryName = e.target.category.value;
        console.log(categoryName);
        const cateData = { categoryName }

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cateData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
            })
    }
    return (
        <div>
            <h1 className='text-3xl border-b-4 border-accent mt-28 inline-block'>একটি নতুন বিভাগ যোগ করুন</h1>
            <form onSubmit={handleAddCategory} className='mt-16 ml-16 lg:ml-80'>
                <div class="form-control w-full max-w-sm ">
                    <label class="label">
                        <span class="label-text">বিভাগের নাম</span>
                    </label>
                    <input name='category' type="text" placeholder="বিভাগের নাম লিখুন" class="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-md btn-accent text-white mt-4 rounded-md mr-20 lg:mr-96 ' type='submit'>বিভাগ যোগ করুন</button>
            </form>

            <div class="overflow-x-auto my-8">
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
                            categories.map((category, index)=><tr>
                                <td>{index+1}</td>
                                <td>{category.categoryName}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddCategory;
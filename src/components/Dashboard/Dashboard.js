import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content w-11/12 mx-auto">
                <Outlet/>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div class="drawer-side mt-20 bg-green-300">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-blue-300">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/addcategory'>বয়ানের বিভাগ যোগ করুন</Link></li>
                    <li><Link to='/dashboard/add_qa_category'>প্রশ্ন-উত্তর বিভাগ যোগ করুন</Link></li>
                    <li><Link to='/dashboard/addaudio'>বয়ানের ওডিও যোগ করুন</Link></li>
                    <li><Link to='/dashboard/add_qa_audio'>প্রশ্ন-উত্তর ওডিও যোগ করুন</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
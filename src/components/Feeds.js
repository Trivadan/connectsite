import React from 'react'
import Share from './Share';
import Post from './Post';
// import { Link } from 'react-router-dom';
import { Posts } from "../dummyData";

function Feeds() {
    return (
        <aside className="aside col-lg-6">
            <Share />

            {/* Importing post from post */}
            {Posts.map((p) => (
              <Post key={p.id} post={p} />
            ))}

        </aside>  
    );
};

export default Feeds

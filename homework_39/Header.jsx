import React from "react";
import {useSelector} from "react-redux";

const Header = () => {

    const state = useSelector(state => state);

    return(
        <div>
          <button>Log in</button>
        </div>
    );
}
export default Header;
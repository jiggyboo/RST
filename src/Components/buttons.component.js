import React from "react";

export default function Buttons(props) {
    const [open, setOpen] = React.useState(false);
    let followed = props.following.includes(props.ticker);

    const follow = () => {
        props.follow(props.ticker);
    }

    const unfollow = (id) => {
        props.unfollow(props.ticker);
    }

    const openMore = () => {
        setOpen(true);
    }

    const closeMore = () => {
        setOpen(false);
        props.setEnlarge(true);
    }

    return (
        <div className={open ? "chart--buttons--open" : "chart--buttons"}>
            {open ? 
                [<img src="images/expand.svg" alt="expand the graph" className="chart--buttons--expand" onClick={closeMore}/>,
                props.login && <img src={followed ? "images/subtract.svg" : "images/add.svg"} alt="follow or unfollow this ticker" className="chart--buttons--expand" onClick={followed ? unfollow : follow }/>] :
                <img src="images/more.svg" alt="click for more options" className="chart--buttons--more" onClick={openMore}/>
            }
        </div>
    );
}
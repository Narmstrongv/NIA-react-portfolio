import React from "react";

const Project = () => {
    return(
        <div>
            {/* <!-- DIY Paint-N-Sip --> */}
            <h3>
                DIY Paint-N-Sip
            </h3>
            <img src="react-portfolio\src\imgs\DIY.png" alt="DIY Paint-N-Sip" />
            <a href="https://twalker7.github.io/HTeamL-Project/">DIY Paint-N-Sip Deployed App</a>
            <p>
            DIY Paint-N-Sip brings the fun of Paint and Sip events into the comfort of your quarantined home! Users can learn how to make a new cocktail and get artistically inspired while enjoying their drink. The user selects their favorite liquor and gets a cocktail recipe that features their choice. Now, the user can click a button to replace that cocktail if they don’t like the first option. Afterwards, they can click a button to display a work of art from the Metropolitan Museum of Art’s exclusive collection and start painting!
            </p>
            <a href="https://github.com/twalker7/HTeamL-Project">DIY Github</a>

            {/* <!-- NoneLeft --> */}
            <h3>
                NoneLeft
            </h3>
            <img src="react-portfolio\src\imgs\None_Left.png" alt="NoneLeft" />
            <a href="https://cryptic-brook-33720.herokuapp.com/">NoneLeft Deployed App</a>
            <p>
            NoneLeft allows the user to refer to a database full of ways to reuse the food leftover from various meals. The user is also able to login, add, and delete comments as well as leave a scored review of the tastiness of the re-made meals.
            </p>
            <a href="https://github.com/Narmstrongv/HTeamL-Project-2">NoneLeft Github</a>
        </div>
    )
}

export default Project;
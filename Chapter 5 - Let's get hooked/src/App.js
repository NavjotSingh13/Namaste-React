import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";

/* App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
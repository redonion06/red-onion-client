import { NavLink, Outlet } from "react-router-dom";

const FoodItems = () => {
    return (
        <div>
            <div className="flex justify-center mt-12">
                <NavLink
                    to="breakfast"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Breakfast
                </NavLink>
                <NavLink
                    to="lunch"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Lunch
                </NavLink>
                <NavLink
                    to="dinner"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary mx-3 border-b-4 border-primary"
                            : "mx-3 hover:text-primary text-neutral"
                    }
                >
                    Dinner
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
};

export default FoodItems;
